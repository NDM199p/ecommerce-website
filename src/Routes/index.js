import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home";
import ProductDetailsPage from "../Pages/ProductDetails";
import CartPage from "../Pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/cart-page",
    element: <CartPage />,
  },

  {
    path: "/product-details",
    element: <ProductDetailsPage />,
  },
]);

export default router;
