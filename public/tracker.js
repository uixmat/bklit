(function () {
  async function trackPageView() {
    try {
      const data = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        siteId: "YOUR_DEFAULT_SITE_ID",
        // We'll need a way to identify the site later, e.g., a siteId configured by the user
        // siteId: 'YOUR_CONFIGURABLE_SITE_ID'
      };

      // Replace with your actual deployed URL
      const response = await fetch("http://localhost:3000/api/track", {
        // Or your production URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Failed to track page view:", response.statusText);
      }
    } catch (error) {
      console.error("Error tracking page view:", error);
    }
  }

  // Track initial page view
  trackPageView();

  // Potentially track history changes for SPAs later
  // window.addEventListener('popstate', trackPageView);
  // Or override pushState/replaceState
})();
