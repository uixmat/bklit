import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initBklit } from "bklit";
import routes from "./routes";
import "./index.css";

// IMPORTANT: Replace with a real Site ID from your main tracker application dashboard
const YOUR_SITE_ID = "cmcuk7myh00022k0xgh1kh599";

// Get the ngrok URL from environment variable
const NGROK_URL = import.meta.env.VITE_NGROK_URL;
const API_HOST = NGROK_URL
  ? `${NGROK_URL}/api/track`
  : "http://localhost:3000/api/track";

// Debug: Check if SDK is imported correctly
console.log("🔍 Playground: SDK import test", {
  initBklit: typeof initBklit,
  bklitModule: typeof initBklit === "function" ? "✅ Loaded" : "❌ Not loaded",
});

// Initialize Bklit SDK
if (YOUR_SITE_ID) {
  console.log("🎯 Playground: Initializing Bklit SDK...", {
    siteId: YOUR_SITE_ID,
    apiHost: API_HOST,
  });

  try {
    initBklit({
      siteId: YOUR_SITE_ID,
      apiHost: API_HOST,
    });
    console.log("✅ Playground: Bklit SDK initialized successfully");
  } catch (error) {
    console.error("❌ Playground: Error initializing Bklit SDK:", error);
  }
} else {
  console.warn("❌ Playground: SITE_ID not configured. Tracking disabled.");
}

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
