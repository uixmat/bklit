import { useEffect } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    trackPageView?: () => void;
  }
}

export default function Home() {
  useEffect(() => {
    document.title = "Playground Home | Bklit";
    if (window.trackPageView) {
      window.trackPageView();
    }
  }, []);
  return (
    <>
      <h1>Vite + React Playground</h1>
      <p className="read-the-docs">
        This site is a testbed for Bklit analytics.
      </p>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link>
      </nav>

      <div
        style={{
          background: "#f0f0f0",
          padding: "16px",
          borderRadius: "8px",
          marginTop: "16px",
          fontSize: "14px",
        }}
      >
        <p>
          <strong>🔍 Console Logging Enabled</strong>
        </p>
        <p>
          Open your browser's developer console to see detailed tracking logs:
        </p>
        <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
          <li>🚀 Page view tracking events</li>
          <li>🆔 Session creation and management</li>
          <li>🔄 Route changes (SPA navigation)</li>
          <li>✅ Success/failure status</li>
          <li>❌ Error messages</li>
        </ul>
        <p style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
          Try navigating between pages to see the logs in action!
        </p>
        <button
          type="button"
          onClick={() => {
            if (window.trackPageView) {
              window.trackPageView();
            } else {
              console.log("❌ Manual tracking not available");
            }
          }}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "8px",
          }}
        >
          🔄 Test Manual Page View
        </button>
      </div>
    </>
  );
}
