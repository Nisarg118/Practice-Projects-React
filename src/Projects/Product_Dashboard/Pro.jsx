import React from "react";
import Product from "./Product";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const Pro = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Product />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default Pro;
