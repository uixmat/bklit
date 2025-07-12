"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  initBklit: () => initBklit,
  trackPageView: () => trackPageView
});
module.exports = __toCommonJS(index_exports);
var import_socket = require("socket.io-client");
var DEFAULT_API_HOST = "http://localhost:3000/api/track";
var bklitSocket = null;
var currentSessionId = null;
function initBklit(options) {
  if (typeof window === "undefined") {
    return;
  }
  const { siteId, apiHost = DEFAULT_API_HOST } = options;
  if (!siteId) {
    console.error("\u274C Bklit SDK: siteId is required for initialization.");
    return;
  }
  console.log("\u{1F3AF} Bklit SDK: Initializing with configuration", {
    siteId,
    apiHost,
    userAgent: navigator.userAgent.substring(0, 50) + "..."
  });
  window.bklitSiteId = siteId;
  window.bklitApiHost = apiHost;
  if (!currentSessionId) {
    currentSessionId = generateSessionId();
    console.log("\u{1F194} Bklit SDK: New session created", {
      sessionId: currentSessionId
    });
  } else {
    console.log("\u{1F504} Bklit SDK: Using existing session", {
      sessionId: currentSessionId
    });
  }
  async function trackPageView2() {
    try {
      const data = {
        url: window.location.href,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        siteId,
        userAgent: navigator.userAgent,
        sessionId: currentSessionId,
        referrer: document.referrer || void 0
      };
      console.log("\u{1F680} Bklit SDK: Tracking page view...", {
        url: data.url,
        sessionId: data.sessionId,
        siteId: data.siteId
      });
      const response = await fetch(apiHost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        keepalive: true
      });
      if (response.ok) {
        console.log("\u2705 Bklit SDK: Page view tracked successfully!", {
          url: data.url,
          sessionId: data.sessionId,
          status: response.status
        });
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
  console.log("\u{1F3AF} Bklit SDK: Initializing page view tracking...");
  trackPageView2();
  if (bklitSocket && bklitSocket.connected) {
    bklitSocket.emit("join_site_room", siteId);
  } else {
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
        return;
      }
    }
    bklitSocket = (0, import_socket.io)(socketURL, {
      path: "/api/socketio",
      // Standard path for our Socket.IO server
      addTrailingSlash: false,
      transports: ["polling", "websocket"],
      // Try polling first for ngrok compatibility
      timeout: 3e4,
      // Increase timeout for ngrok connections
      forceNew: true
      // Force new connection to avoid issues
      // autoConnect: false, // We will connect manually if needed
    });
    bklitSocket.on("connect", () => {
      console.log("Bklit SDK: Socket connected to server:", bklitSocket?.id);
      bklitSocket?.emit("join_site_room", siteId);
    });
    bklitSocket.on("disconnect", (reason) => {
      console.log(
        "Bklit SDK: Socket disconnected from server. Reason:",
        reason
      );
    });
    bklitSocket.on("connect_error", (error) => {
      console.log(
        "Bklit SDK: Socket.IO connection not available (this is normal for ngrok tunnels)"
      );
      console.log(
        "Bklit SDK: Page tracking is still working - only live visitor count is disabled"
      );
      bklitSocket?.disconnect();
      bklitSocket = null;
    });
  }
  const handlePageUnload = async () => {
    if (currentSessionId) {
      try {
        console.log("\u{1F504} Bklit SDK: Ending session on page unload...", {
          sessionId: currentSessionId,
          siteId
        });
        const endSessionUrl = apiHost.replace("/track", "/session-end");
        const response = await fetch(endSessionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            sessionId: currentSessionId,
            siteId
          }),
          keepalive: true
          // Important for sending data before page unloads
        });
        if (response.ok) {
          console.log("\u2705 Bklit SDK: Session ended successfully!", {
            sessionId: currentSessionId,
            status: response.status
          });
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
    if (bklitSocket && bklitSocket.connected) {
      bklitSocket.emit("leave_site_room", siteId);
      bklitSocket.disconnect();
      bklitSocket = null;
      console.log("Bklit SDK: Socket disconnected on page unload.");
    }
  };
  window.removeEventListener("beforeunload", handlePageUnload);
  window.addEventListener("beforeunload", handlePageUnload);
  let currentUrl = window.location.href;
  const handleRouteChange = () => {
    const newUrl = window.location.href;
    if (newUrl !== currentUrl) {
      console.log("\u{1F504} Bklit SDK: Route change detected", {
        from: currentUrl,
        to: newUrl,
        sessionId: currentSessionId
      });
      currentUrl = newUrl;
      trackPageView2();
    }
  };
  window.addEventListener("popstate", handleRouteChange);
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  history.pushState = function(...args) {
    originalPushState.apply(history, args);
    setTimeout(handleRouteChange, 0);
  };
  history.replaceState = function(...args) {
    originalReplaceState.apply(history, args);
    setTimeout(handleRouteChange, 0);
  };
  console.log("\u{1F3AF} Bklit SDK: SPA navigation tracking enabled");
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
  console.log("\u{1F3AF} Bklit SDK: Manual page view tracking triggered");
  const data = {
    url: window.location.href,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    siteId: window.bklitSiteId || "unknown",
    userAgent: navigator.userAgent,
    sessionId: currentSessionId,
    referrer: document.referrer || void 0
  };
  console.log("\u{1F680} Bklit SDK: Manual page view tracking...", {
    url: data.url,
    sessionId: data.sessionId,
    siteId: data.siteId
  });
  const apiHost = window.bklitApiHost || DEFAULT_API_HOST;
  fetch(apiHost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    keepalive: true
  }).then((response) => {
    if (response.ok) {
      console.log("\u2705 Bklit SDK: Manual page view tracked successfully!", {
        url: data.url,
        sessionId: data.sessionId,
        status: response.status
      });
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  initBklit,
  trackPageView
});
