// packages/bklit-sdk/src/index.ts

import { type BklitConfig, getDefaultConfig, validateConfig } from "./config";

interface BklitOptions {
  projectId: string;
  apiHost?: string;
  environment?: "development" | "production";
  debug?: boolean;
}

let currentSessionId: string | null = null; // Keep track of current session
let lastTrackedUrl: string | null = null; // Track last URL to prevent duplicates
let lastTrackedTime: number = 0; // Track last tracking time
const TRACKING_DEBOUNCE_MS = 1000; // Debounce tracking by 1 second

export function initBklit(options: BklitOptions): void {
  if (typeof window === "undefined") {
    return;
  }

  const { projectId, apiHost, environment, debug } = options;

  // Get default configuration and merge with options
  const defaultConfig = getDefaultConfig(environment);
  const finalConfig: BklitConfig = {
    apiHost: apiHost || defaultConfig.apiHost,
    environment: environment || defaultConfig.environment,
    debug: debug !== undefined ? debug : defaultConfig.debug,
  };

  // Validate configuration
  validateConfig(finalConfig);

  if (!projectId) {
    console.error("❌ Bklit SDK: projectId is required for initialization.");
    return;
  }

  if (finalConfig.debug) {
    console.log("🎯 Bklit SDK: Initializing with configuration", {
      projectId,
      apiHost: finalConfig.apiHost,
      environment: finalConfig.environment,
      debug: finalConfig.debug,
      userAgent: `${navigator.userAgent.substring(0, 50)}...`,
    });
  }

  // Store configuration globally for manual tracking
  window.bklitprojectId = projectId;
  window.bklitApiHost = finalConfig.apiHost;
  window.bklitEnvironment = finalConfig.environment;
  window.bklitDebug = finalConfig.debug;

  // Generate or get existing session ID
  if (!currentSessionId) {
    currentSessionId = generateSessionId();
    // Reset tracking state for new session
    lastTrackedUrl = null;
    lastTrackedTime = 0;
    if (debug) {
      console.log("🆔 Bklit SDK: New session created", {
        sessionId: currentSessionId,
      });
    }
  } else if (debug) {
    console.log("🔄 Bklit SDK: Using existing session", {
      sessionId: currentSessionId,
    });
  }

  async function trackPageView() {
    const currentUrl = window.location.href;
    const now = Date.now();

    // Check if we should skip this tracking request
    if (
      lastTrackedUrl === currentUrl &&
      now - lastTrackedTime < TRACKING_DEBOUNCE_MS
    ) {
      if (debug) {
        console.log("⏭️ Bklit SDK: Skipping duplicate page view tracking", {
          url: currentUrl,
          timeSinceLastTrack: now - lastTrackedTime,
          debounceMs: TRACKING_DEBOUNCE_MS,
        });
      }
      return;
    }

    try {
      const data = {
        url: currentUrl,
        timestamp: new Date().toISOString(),
        projectId: projectId,
        userAgent: navigator.userAgent,
        sessionId: currentSessionId,
        referrer: document.referrer || undefined,
        environment: environment,
      };

      if (debug) {
        console.log("🚀 Bklit SDK: Tracking page view...", {
          url: data.url,
          sessionId: data.sessionId,
          projectId: data.projectId,
          environment: data.environment,
        });
      }

      const response = await fetch(finalConfig.apiHost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        keepalive: true,
      });

      if (response.ok) {
        lastTrackedUrl = currentUrl;
        lastTrackedTime = now;

        if (debug) {
          console.log("✅ Bklit SDK: Page view tracked successfully!", {
            url: data.url,
            sessionId: data.sessionId,
            status: response.status,
          });
        }
      } else {
        console.error(
          `❌ Bklit SDK: Failed to track page view for site ${projectId}. Status: ${response.statusText}`,
        );
      }
    } catch (error) {
      console.error(
        `❌ Bklit SDK: Error tracking page view for site ${projectId}:`,
        error,
      );
    }
  }

  // Track initial page view
  if (debug) {
    console.log("🎯 Bklit SDK: Initializing page view tracking...");
  }
  trackPageView();

  // Cleanup on page unload
  const handlePageUnload = async () => {
    // End the session when user leaves
    if (currentSessionId) {
      try {
        if (debug) {
          console.log("🔄 Bklit SDK: Ending session on page unload...", {
            sessionId: currentSessionId,
            projectId: projectId,
          });
        }

        const endSessionUrl = `${finalConfig.apiHost}/session-end`;
        const response = await fetch(endSessionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId: currentSessionId,
            projectId: projectId,
            environment: environment,
          }),
          keepalive: true, // Important for sending data before page unloads
        });

        if (response.ok) {
          if (debug) {
            console.log("✅ Bklit SDK: Session ended successfully!", {
              sessionId: currentSessionId,
              status: response.status,
            });
          }
        } else {
          console.error("❌ Bklit SDK: Failed to end session", {
            sessionId: currentSessionId,
            status: response.status,
            statusText: response.statusText,
          });
        }
      } catch (error) {
        console.error("❌ Bklit SDK: Error ending session:", error);
      }
    }
  };

  window.removeEventListener("beforeunload", handlePageUnload); // Remove first to avoid duplicates
  window.addEventListener("beforeunload", handlePageUnload);

  // SPA navigation tracking
  let currentUrl = window.location.href;

  const handleRouteChange = () => {
    const newUrl = window.location.href;
    if (newUrl !== currentUrl) {
      if (debug) {
        console.log("🔄 Bklit SDK: Route change detected", {
          from: currentUrl,
          to: newUrl,
          sessionId: currentSessionId,
        });
      }
      currentUrl = newUrl;
      trackPageView(); // Track the new page view
    }
  };

  // Listen for popstate (browser back/forward)
  window.addEventListener("popstate", handleRouteChange);

  // Override pushState and replaceState for SPA navigation
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = (...args) => {
    originalPushState.apply(history, args);
    setTimeout(handleRouteChange, 0);
  };

  history.replaceState = (...args) => {
    originalReplaceState.apply(history, args);
    setTimeout(handleRouteChange, 0);
  };

  if (debug) {
    console.log("🎯 Bklit SDK: SPA navigation tracking enabled");
  }
}

// Helper function to generate a unique session ID
function generateSessionId(): string {
  // Generate a unique session ID based on timestamp and random number
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${random}`;
}

// Global function for manual page view tracking
export function trackPageView() {
  if (typeof window === "undefined") {
    console.warn(
      "❌ Bklit SDK: trackPageView can only be called in browser environment",
    );
    return;
  }

  if (!currentSessionId) {
    console.warn("❌ Bklit SDK: No active session. Call initBklit() first.");
    return;
  }

  const debug = window.bklitDebug || false;

  if (debug) {
    console.log("🎯 Bklit SDK: Manual page view tracking triggered");
  }

  // Call the internal trackPageView function
  // We need to recreate it here since it's scoped inside initBklit
  const data = {
    url: window.location.href,
    timestamp: new Date().toISOString(),
    projectId: window.bklitprojectId || "unknown",
    userAgent: navigator.userAgent,
    sessionId: currentSessionId,
    referrer: document.referrer || undefined,
    environment: window.bklitEnvironment || "production",
  };

  if (debug) {
    console.log("🚀 Bklit SDK: Manual page view tracking...", {
      url: data.url,
      sessionId: data.sessionId,
      projectId: data.projectId,
      environment: data.environment,
    });
  }

  const apiHost =
    window.bklitApiHost || getDefaultConfig(window.bklitEnvironment).apiHost;

  fetch(apiHost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    keepalive: true,
  })
    .then((response) => {
      if (response.ok) {
        if (debug) {
          console.log("✅ Bklit SDK: Manual page view tracked successfully!", {
            url: data.url,
            sessionId: data.sessionId,
            status: response.status,
          });
        }
      } else {
        console.error("❌ Bklit SDK: Failed to track manual page view", {
          status: response.status,
          statusText: response.statusText,
        });
      }
    })
    .catch((error) => {
      console.error("❌ Bklit SDK: Error tracking manual page view:", error);
    });
}

// Store configuration globally for manual tracking
declare global {
  interface Window {
    trackPageView?: () => void;
    bklitprojectId?: string;
    bklitApiHost?: string;
    bklitEnvironment?: "development" | "production";
    bklitDebug?: boolean;
  }
}

// Make trackPageView available globally
window.trackPageView = trackPageView;
