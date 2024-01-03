import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home";
import ProductDetailsPage from "../Pages/ProductDetails";
import EmptyCartPage from "../Pages/EmptyCart";
import NotFoundPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/error-page",
    element: <NotFoundPage />,
  },
  {
    path: "/empty-cart",
    element: <EmptyCartPage />,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage />,
  },
]);

export default router;
