// src/index.ts
var DEFAULT_API_HOST = "http://localhost:3000/api/track";
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
}
export {
  initBklit
};
