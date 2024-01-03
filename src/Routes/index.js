import { createBrowserRouter } from "react-router-dom";
import ProductDetailsPage from "../Pages/ProductDetails";
import HeaderCompoment from "../Pages/Home/HeaderCompoment";
import SliderCompoment from "../Pages/Home/SliderCompoment";
// import slider1 from "../Assets/Image/slider1.jpg";
// import slider2 from "../Assets/Image/slider1.jpg";
// import Slider from "../Pages/Home/Slider";
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
    path: "/Slider",
    element: <SliderCompoment />,
  },

]);

export default router;



//rafce