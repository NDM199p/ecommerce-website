import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home";
import ProductDetailsPage from "../Pages/ProductDetails";
// feature/cart-page-ui
import CartPage from "../Pages/CartPage";
//=======
import EmptyCartPage from "../Pages/EmptyCart";
import NotFoundPage from "../Pages/ErrorPage";
import ContactDetails from "../Pages/ContactDetails";
import AddAddress from "../Pages/AddAddress";
// develop

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
    path: "/contact-details",
    element: <ContactDetails />,
  },
  {
    path: "/add-address",
    element: <AddAddress />,
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
