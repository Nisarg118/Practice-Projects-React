import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
const Product = () => {
  return (
    <div className="container flex-col bg-gray-600 min-h-screen flex items-center justify-center">
      <h1 className="m-4">Product Dashboard</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Product;
