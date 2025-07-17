import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

declare global {
  interface Window {
    trackPageView?: () => void;
  }
}

export default function ProductDetails() {
  const { productId } = useParams();
  useEffect(() => {
    document.title = `Product ${productId} | Bklit Playground`;
    if (window.trackPageView) {
      window.trackPageView();
    }
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
