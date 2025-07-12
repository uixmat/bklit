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
    if (window.trackPageView) window.trackPageView();
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
    </>
  );
}
