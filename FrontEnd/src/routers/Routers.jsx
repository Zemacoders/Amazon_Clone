// src/routers/Routers.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy-loaded components
const ProductDetail = React.lazy(() => import("../pages/ProductDetail"));
const Favorite = React.lazy(() => import("../pages/Favorite"));
const Category = React.lazy(() => import("../pages/Category"));
const Checkout = React.lazy(() => import("../pages/Checkout"));
const Signup = React.lazy(() => import("../pages/Signup"));
const Login = React.lazy(() => import("../pages/Login"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Home = React.lazy(() => import("../pages/Home"));
const Search = React.lazy(() => import("../pages/Search"));
const Products = React.lazy(() => import("../pages/Products"));


const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="category" element={<Category />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="products" element={<Products />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
