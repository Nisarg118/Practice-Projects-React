import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const RemoveFromCart = (id) => {
    dispatch(remove(id));
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
            className="btn btn-danger"
            onClick={() => RemoveFromCart(product.id)}
          >
            Remove Item
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">{cards}</div>
    </div>
  );
};

export default Cart;
