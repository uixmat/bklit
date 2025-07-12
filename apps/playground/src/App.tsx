import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { initBklit } from "bklit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

// IMPORTANT: Replace with a real Site ID from your main tracker application dashboard
const YOUR_SITE_ID = "cmcuk7myh00022k0xgh1kh599";

// Get the ngrok URL from environment variable
const NGROK_URL = import.meta.env.VITE_NGROK_URL;
const API_HOST = NGROK_URL
  ? `${NGROK_URL}/api/track`
  : "http://localhost:3000/api/track";

// Add this at the top of the file (after imports)
declare global {
  interface Window {
    trackPageView?: () => void;
  }
}

function Home() {
  useEffect(() => {
    document.title = "Playground Home | Bklit";
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
      {YOUR_SITE_ID ? (
        <>
          <p>Tracking initialized with Site ID: {YOUR_SITE_ID}</p>
          <p>API Host: {API_HOST}</p>
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
              Open your browser's developer console to see detailed tracking
              logs:
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
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>
          SITE_ID not configured in src/App.tsx. Tracking disabled.
        </p>
      )}
    </>
  );
}

function Products() {
  useEffect(() => {
    document.title = "Products | Bklit Playground";
  }, []);
  return (
    <>
      <h2>Products</h2>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link>
      </nav>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
      </ul>
    </>
  );
}

function ProductDetails() {
  const { productId } = useParams();
  useEffect(() => {
    document.title = `Product ${productId} | Bklit Playground`;
  }, [productId]);
  return (
    <>
      <h2>Product Details</h2>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link>
      </nav>
      <p>Viewing details for product ID: {productId}</p>
    </>
  );
}

// Custom hook to track page views on every route change
function useTrackPageView() {
  const location = useLocation();
  useEffect(() => {
    if (window.trackPageView) {
      window.trackPageView();
    }
  }, [location]);
}

function App() {
  useEffect(() => {
    if (YOUR_SITE_ID) {
      console.log(
        `Playground: Initializing Bklit with siteId: ${YOUR_SITE_ID} and API host: ${API_HOST}`
      );
      initBklit({
        siteId: YOUR_SITE_ID,
        apiHost: API_HOST,
      });
    } else {
      console.warn(
        "Playground: SITE_ID is not set. Tracking will not be initialized."
      );
    }
  }, []);

  return (
    <Router>
      <TrackPageViewWrapper>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </TrackPageViewWrapper>
    </Router>
  );
}

// Wrapper component to use the hook inside Router
function TrackPageViewWrapper({ children }: { children: React.ReactNode }) {
  useTrackPageView();
  return <>{children}</>;
}

export default App;
