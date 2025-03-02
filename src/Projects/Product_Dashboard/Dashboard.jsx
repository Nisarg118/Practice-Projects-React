import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { getProducts } from "./store/productSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "Loading") {
    return <div>...Loading</div>;
  }

  if (status === "Error") {
    return <div>Error!!!!!!</div>;
  }
  const AddtoCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="">
      <div className="card w-[18rem]">
        <div className="flex justify-center">
          <img src={product.image} className="w-[100px] h-[130px]" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="font-bold">$ {product.price}</p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => AddtoCart(product)}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  ));
  return <div className="grid grid-cols-3 gap-5">{cards}</div>;
};

export default Dashboard;
