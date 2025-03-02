import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div className="w-full rounded-lg  bg-red-300 px-3 py-2 mb-4">
      <ul className="flex items-center justify-between">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartProducts.length})</Link>
      </ul>
    </div>
  );
};

export default Navbar;
