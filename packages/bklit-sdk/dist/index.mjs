// src/config.ts
var ENV_VARS = {
  BKLIT_API_HOST: "BKLIT_API_HOST",
  BKLIT_ENVIRONMENT: "BKLIT_ENVIRONMENT",
  BKLIT_DEBUG: "BKLIT_DEBUG"
};
var DEFAULT_API_HOSTS = {
  development: "http://192.168.1.94:3000/api/track",
  production: "https://bklit.com/api/track"
};
function getEnvVar(key) {
  if (typeof window !== "undefined") {
    return void 0;
  }
  if (typeof process !== "undefined" && process.env) {
    return process.env[key];
  }
  return void 0;
}
function getDefaultConfig(environment) {
  const env = environment || getEnvVar(ENV_VARS.BKLIT_ENVIRONMENT) || "production";
  const apiHost = getEnvVar(ENV_VARS.BKLIT_API_HOST) || DEFAULT_API_HOSTS[env];
  const debugEnv = getEnvVar(ENV_VARS.BKLIT_DEBUG);
  const debug = debugEnv ? debugEnv === "true" : env === "development";
  return {
    apiHost,
    environment: env,
    debug
  };
}
function validateConfig(config) {
  if (config.apiHost && !isValidUrl(config.apiHost)) {
    throw new Error(`Invalid API host URL: ${config.apiHost}`);
  }
  if (config.environment && !["development", "production"].includes(config.environment)) {
    throw new Error(`Invalid environment: ${config.environment}. Must be one of: development, production`);
  }
}
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// src/index.ts
var currentSessionId = null;
var lastTrackedUrl = null;
var lastTrackedTime = 0;
var TRACKING_DEBOUNCE_MS = 1e3;
function initBklit(options) {
  if (typeof window === "undefined") {
    return;
  }
  const {
    siteId,
    apiHost,
    environment,
    debug
  } = options;
  const defaultConfig = getDefaultConfig(environment);
  const finalConfig = {
    apiHost: apiHost || defaultConfig.apiHost,
    environment: environment || defaultConfig.environment,
    debug: debug !== void 0 ? debug : defaultConfig.debug
  };
  validateConfig(finalConfig);
  if (!siteId) {
    console.error("\u274C Bklit SDK: siteId is required for initialization.");
    return;
  }
  if (finalConfig.debug) {
    console.log("\u{1F3AF} Bklit SDK: Initializing with configuration", {
      siteId,
      apiHost: finalConfig.apiHost,
      environment: finalConfig.environment,
      debug: finalConfig.debug,
      userAgent: navigator.userAgent.substring(0, 50) + "..."
    });
  }
  window.bklitSiteId = siteId;
  window.bklitApiHost = finalConfig.apiHost;
  window.bklitEnvironment = finalConfig.environment;
  window.bklitDebug = finalConfig.debug;
  if (!currentSessionId) {
    currentSessionId = generateSessionId();
    lastTrackedUrl = null;
    lastTrackedTime = 0;
    if (debug) {
      console.log("\u{1F194} Bklit SDK: New session created", {
        sessionId: currentSessionId
      });
    }
  } else if (debug) {
    console.log("\u{1F504} Bklit SDK: Using existing session", {
      sessionId: currentSessionId
    });
  }
  async function trackPageView2() {
    const currentUrl2 = window.location.href;
    const now = Date.now();
    if (lastTrackedUrl === currentUrl2 && now - lastTrackedTime < TRACKING_DEBOUNCE_MS) {
      if (debug) {
        console.log("\u23ED\uFE0F Bklit SDK: Skipping duplicate page view tracking", {
          url: currentUrl2,
          timeSinceLastTrack: now - lastTrackedTime,
          debounceMs: TRACKING_DEBOUNCE_MS
        });
      }
      return;
    }
    try {
      const data = {
        url: currentUrl2,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        siteId,
        userAgent: navigator.userAgent,
        sessionId: currentSessionId,
        referrer: document.referrer || void 0,
        environment
      };
      if (debug) {
        console.log("\u{1F680} Bklit SDK: Tracking page view...", {
          url: data.url,
          sessionId: data.sessionId,
          siteId: data.siteId,
          environment: data.environment
        });
      }
      const response = await fetch(finalConfig.apiHost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        keepalive: true
      });
      if (response.ok) {
        lastTrackedUrl = currentUrl2;
        lastTrackedTime = now;
        if (debug) {
          console.log("\u2705 Bklit SDK: Page view tracked successfully!", {
            url: data.url,
            sessionId: data.sessionId,
            status: response.status
          });
        }
      } else {
        console.error(
          `\u274C Bklit SDK: Failed to track page view for site ${siteId}. Status: ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(
        `\u274C Bklit SDK: Error tracking page view for site ${siteId}:`,
        error
      );
    }
  }
  if (debug) {
    console.log("\u{1F3AF} Bklit SDK: Initializing page view tracking...");
  }
  trackPageView2();
  const handlePageUnload = async () => {
    if (currentSessionId) {
      try {
        if (debug) {
          console.log("\u{1F504} Bklit SDK: Ending session on page unload...", {
            sessionId: currentSessionId,
            siteId
          });
        }
        const endSessionUrl = finalConfig.apiHost + "/session-end";
        const response = await fetch(endSessionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            sessionId: currentSessionId,
            siteId,
            environment
          }),
          keepalive: true
          // Important for sending data before page unloads
        });
        if (response.ok) {
          if (debug) {
            console.log("\u2705 Bklit SDK: Session ended successfully!", {
              sessionId: currentSessionId,
              status: response.status
            });
          }
        } else {
          console.error("\u274C Bklit SDK: Failed to end session", {
            sessionId: currentSessionId,
            status: response.status,
            statusText: response.statusText
          });
        }
      } catch (error) {
        console.error("\u274C Bklit SDK: Error ending session:", error);
      }
    }
  };
  window.removeEventListener("beforeunload", handlePageUnload);
  window.addEventListener("beforeunload", handlePageUnload);
  let currentUrl = window.location.href;
  const handleRouteChange = () => {
    const newUrl = window.location.href;
    if (newUrl !== currentUrl) {
      if (debug) {
        console.log("\u{1F504} Bklit SDK: Route change detected", {
          from: currentUrl,
          to: newUrl,
          sessionId: currentSessionId
        });
      }
      currentUrl = newUrl;
      trackPageView2();
    }
  };
  window.addEventListener("popstate", handleRouteChange);
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
    console.log("\u{1F3AF} Bklit SDK: SPA navigation tracking enabled");
  }
}
function generateSessionId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${random}`;
}
function trackPageView() {
  if (typeof window === "undefined") {
    console.warn(
      "\u274C Bklit SDK: trackPageView can only be called in browser environment"
    );
    return;
  }
  if (!currentSessionId) {
    console.warn("\u274C Bklit SDK: No active session. Call initBklit() first.");
    return;
  }
  const debug = window.bklitDebug || false;
  if (debug) {
    console.log("\u{1F3AF} Bklit SDK: Manual page view tracking triggered");
  }
  const data = {
    url: window.location.href,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    siteId: window.bklitSiteId || "unknown",
    userAgent: navigator.userAgent,
    sessionId: currentSessionId,
    referrer: document.referrer || void 0,
    environment: window.bklitEnvironment || "production"
  };
  if (debug) {
    console.log("\u{1F680} Bklit SDK: Manual page view tracking...", {
      url: data.url,
      sessionId: data.sessionId,
      siteId: data.siteId,
      environment: data.environment
    });
  }
  const apiHost = window.bklitApiHost || getDefaultConfig(window.bklitEnvironment).apiHost;
  fetch(apiHost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    keepalive: true
  }).then((response) => {
    if (response.ok) {
      if (debug) {
        console.log("\u2705 Bklit SDK: Manual page view tracked successfully!", {
          url: data.url,
          sessionId: data.sessionId,
          status: response.status
        });
      }
    } else {
      console.error("\u274C Bklit SDK: Failed to track manual page view", {
        status: response.status,
        statusText: response.statusText
      });
    }
  }).catch((error) => {
    console.error("\u274C Bklit SDK: Error tracking manual page view:", error);
  });
}
window.trackPageView = trackPageView;
export {
  initBklit,
  trackPageView
};
