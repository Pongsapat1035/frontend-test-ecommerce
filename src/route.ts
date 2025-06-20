import { createBrowserRouter } from "react-router";

import HomePage from "./pages/Home/HomePage";
import Layout from "./components/Layout";
import ProductListPage from "./pages/Products/ProductListPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import CartPage from "./pages/Cart/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "product",
        Component: ProductListPage,
      },
      {
        path: "product/:id",
        Component: ProductDetailPage,
      },
      {
        path: "checkout",
        Component: CheckoutPage,
      },
      {
        path: "cart",
        Component: CartPage,
      },
    ],
  },
]);

export default router