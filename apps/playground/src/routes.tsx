import Home from "./routes/index";
import Products from "./routes/products";
import ProductDetails from "./routes/products.$productId";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />,
  },
];

export default routes;
