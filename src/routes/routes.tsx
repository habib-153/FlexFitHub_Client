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
import UpdateProduct from "../components/ui/ProductManagement/updateProduct";
import Success from "../components/ui/Checkout/success";

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
        path: "about-us",
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
        path: "details/:id",
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
      {
        path: "update/:id",
        element: <UpdateProduct />,
      },
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
]);

export default router;
