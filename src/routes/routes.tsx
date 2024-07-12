import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import ProductManagement from "../pages/ProductManagement";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import CreateProduct from "../components/ui/ProductManagement/createProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/products",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Products></Products>,
      },
      {
        path: "management",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "details",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "addProduct",
        element: <CreateProduct />,
      },
    ],
  },
]);

export default router;
