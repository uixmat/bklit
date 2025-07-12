// packages/bklit-sdk/src/index.ts
import { io, Socket } from "socket.io-client";

interface BklitOptions {
  siteId: string;
  apiHost?: string; // Optional: defaults to your production API endpoint
}

const DEFAULT_API_HOST = "http://localhost:3000/api/track"; // Replace with your actual production URL
let bklitSocket: Socket | null = null; // Keep track of the socket instance
let currentSessionId: string | null = null; // Keep track of current session

export function initBklit(options: BklitOptions): void {
  if (typeof window === "undefined") {
    // Avoid running server-side if accidentally imported there directly
    return;
  }

  const { siteId, apiHost = DEFAULT_API_HOST } = options;

  if (!siteId) {
    console.error("Bklit SDK: siteId is required for initialization.");
    return;
  }

  // Generate or get existing session ID
  if (!currentSessionId) {
    currentSessionId = generateSessionId();
  }

  async function trackPageView() {
    try {
      const data = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        siteId: siteId,
        userAgent: navigator.userAgent, // Add user agent
        sessionId: currentSessionId,
        referrer: document.referrer || undefined,
      };

      const response = await fetch(apiHost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        keepalive: true, // Good for sending data before page unloads
      });

      if (!response.ok) {
        console.error(
          `Bklit SDK: Failed to track page view for site ${siteId}. Status: ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(
        `Bklit SDK: Error tracking page view for site ${siteId}:`,
        error
      );
    }
  }

  // Track initial page view
  trackPageView();

  // --- New Socket.IO Live Presence ---
  if (bklitSocket && bklitSocket.connected) {
    // If already connected (e.g. init called multiple times, or navigating SPA)
    // Potentially emit leave for old siteId if it changed, then join new one
    // For now, simplest is to disconnect and reconnect, or just ensure join_site_room is called for current siteId
    bklitSocket.emit("join_site_room", siteId); // Re-join, in case siteId changed in SPA context
  } else {
    // Determine Socket.IO server URL from apiHost
    // Example: apiHost = http://localhost:3000/api/track -> socketURL = http://localhost:3000
    let socketURL = DEFAULT_API_HOST.substring(
      0,
      DEFAULT_API_HOST.indexOf("/api/track")
    );
    if (apiHost !== DEFAULT_API_HOST) {
      try {
        const url = new URL(apiHost);
        socketURL = url.origin;
      } catch (e) {
        console.error(
          "Bklit SDK: Invalid apiHost for deriving socket URL",
          apiHost,
          e
        );
        // Fallback or do not connect socket if URL is invalid
        return;
      }
    }

    bklitSocket = io(socketURL, {
      path: "/api/socketio", // Standard path for our Socket.IO server
      addTrailingSlash: false,
      transports: ["polling", "websocket"], // Try polling first for ngrok compatibility
      timeout: 30000, // Increase timeout for ngrok connections
      forceNew: true, // Force new connection to avoid issues
      // autoConnect: false, // We will connect manually if needed
    });

    bklitSocket.on("connect", () => {
      console.log("Bklit SDK: Socket connected to server:", bklitSocket?.id);
      bklitSocket?.emit("join_site_room", siteId);
    });

    bklitSocket.on("disconnect", (reason: Socket.DisconnectReason) => {
      console.log(
        "Bklit SDK: Socket disconnected from server. Reason:",
        reason
      );
      // Server should handle cleanup. Client might attempt reconnection based on reason if desired.
    });

    bklitSocket.on("connect_error", (error: Error) => {
      // Don't show errors for Socket.IO connection failures through ngrok
      // The main tracking functionality still works perfectly
      console.log(
        "Bklit SDK: Socket.IO connection not available (this is normal for ngrok tunnels)"
      );
      console.log(
        "Bklit SDK: Page tracking is still working - only live visitor count is disabled"
      );

      // Disconnect to prevent repeated connection attempts
      bklitSocket?.disconnect();
      bklitSocket = null;
    });
  }

  // Cleanup on page unload
  const handlePageUnload = () => {
    if (bklitSocket && bklitSocket.connected) {
      bklitSocket.emit("leave_site_room", siteId); // Important for accurate live count
      bklitSocket.disconnect();
      bklitSocket = null;
      console.log("Bklit SDK: Socket disconnected on page unload.");
    }
  };

  window.removeEventListener("beforeunload", handlePageUnload); // Remove first to avoid duplicates
  window.addEventListener("beforeunload", handlePageUnload);

  // TODO: Add SPA navigation tracking (popstate, pushState override)
  // For SPAs, when route changes, you might want to:
  // 1. Call trackPageView() again for the new URL.
  // 2. If siteId context changes (multi-tenant SPA), emit leave_site_room for oldId, then join_site_room for newId.
  // For now, the socket connection persists for the initial siteId.
}

// Helper function to generate a unique session ID
function generateSessionId(): string {
  // Generate a unique session ID based on timestamp and random number
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${random}`;
}

// Optional: For users who might prefer a default export or a different pattern.
// export default { init: initBklit };
