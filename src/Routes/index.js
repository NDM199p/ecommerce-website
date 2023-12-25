import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home";
import ProductDetailsPage from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/product-details",
    element: <ProductDetailsPage />,
  },
]);

export default router;
