import React from "react";
import GlobalLayout from "./pages/_layout";
// import { lazy } from "react";

const Index = React.lazy(() => import("./pages/index"));
const CartIndex = React.lazy(() => import("./pages/cart"));
const Payment = React.lazy(() => import("./pages/payment/index"));
const ProductsIndex = React.lazy(() => import("./pages/products/index"));
const ProductsId = React.lazy(() => import("./pages/products/[id]"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/cart", element: <CartIndex />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/products/:id", element: <ProductsId /> },
      { path: "/payment", element: <Payment />, index: true },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/cart" },
  { route: "/payment" },
  { route: "/products" },
  { route: "/products/:id" },
];
