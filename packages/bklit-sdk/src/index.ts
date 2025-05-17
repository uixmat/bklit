// packages/bklit-sdk/src/index.ts
interface BklitOptions {
  siteId: string;
  apiHost?: string; // Optional: defaults to your production API endpoint
}

const DEFAULT_API_HOST = "http://localhost:3000/api/track"; // Replace with your actual production URL

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

  async function trackPageView() {
    try {
      const data = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        siteId: siteId,
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

  // TODO: Add SPA navigation tracking (popstate, pushState override)
  // This needs careful consideration to be robust for various frameworks.
  // Example:
  // window.addEventListener('popstate', trackPageView);
  // const originalPushState = history.pushState;
  // history.pushState = function (...args) {
  //   originalPushState.apply(this, args);
  //   trackPageView(); // Or dispatch a custom event that trackPageView listens to
  // };
}

// Optional: For users who might prefer a default export or a different pattern.
// export default { init: initBklit };
