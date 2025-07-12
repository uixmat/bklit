import { useEffect } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    trackPageView?: () => void;
  }
}

export default function Products() {
  useEffect(() => {
    document.title = "Products | Bklit Playground";
    if (window.trackPageView) window.trackPageView();
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
