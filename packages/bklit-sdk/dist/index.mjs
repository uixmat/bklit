// src/index.ts
import { io } from "socket.io-client";
var DEFAULT_API_HOST = "http://localhost:3000/api/track";
var bklitSocket = null;
function initBklit(options) {
  if (typeof window === "undefined") {
    return;
  }
  const { siteId, apiHost = DEFAULT_API_HOST } = options;
  if (!siteId) {
    console.error("Bklit SDK: siteId is required for initialization.");
    return;
  }
  async function trackPageView() {
    try {
      const data = {
        url: window.location.href,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        siteId
      };
      const response = await fetch(apiHost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        keepalive: true
        // Good for sending data before page unloads
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
  trackPageView();
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
    bklitSocket = io(socketURL, {
      path: "/api/socketio",
      // Standard path for our Socket.IO server
      addTrailingSlash: false
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
      console.error("Bklit SDK: Socket connection error:", error);
    });
  }
  const handlePageUnload = () => {
    if (bklitSocket && bklitSocket.connected) {
      bklitSocket.emit("leave_site_room", siteId);
      bklitSocket.disconnect();
      bklitSocket = null;
      console.log("Bklit SDK: Socket disconnected on page unload.");
    }
  };
  window.removeEventListener("beforeunload", handlePageUnload);
  window.addEventListener("beforeunload", handlePageUnload);
}
export {
  initBklit
};
