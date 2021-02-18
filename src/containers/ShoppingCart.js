import React from "react";
import List from "../components/List/List";

const ShoppingCart = ({ items, handleClickEmptyCart }) => {
  return (
    <>
      <button className="button-cart" onClick={handleClickEmptyCart}>
        Leeg Winkelwagen
      </button>
      <List items={items} />
    </>
  );
};

export default ShoppingCart;
