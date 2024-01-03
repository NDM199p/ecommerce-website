import { createBrowserRouter } from "react-router-dom";
import ProductDetailsPage from "../Pages/ProductDetails";
///feature/HeaderCompoment
import HeaderCompoment from "../Pages/Home/HeaderCompoment";
import SliderCompoment from "../Pages/Home/SliderCompoment";
// import slider1 from "../Assets/Image/slider1.jpg";
// import slider2 from "../Assets/Image/slider1.jpg";
// import Slider from "../Pages/Home/Slider";
//=======
// feature/cart-page-ui
import CartPage from "../Pages/CartPage";
import EmptyCartPage from "../Pages/EmptyCart";
import NotFoundPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/HeaderCompoment",
    element: <HeaderCompoment />,
  },
  {
    path: "/Slider",
    element: <SliderCompoment />,
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
    path: "/cart-page",
    element: <CartPage />,
  },
  {
    path: "/Slider",
    element: <SliderCompoment />,
  },

]);

export default router;



//rafce