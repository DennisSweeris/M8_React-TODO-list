import React from "react";

const ListItem = ({ item, handleClickItem }) => {
  return (
    <li
      className="list-item"
      key={item.id}
      value={item}
      onClick={handleClickItem}>
      <span>{item}</span>
    </li>
  );
};

const CartItem = ({ item }) => {
  return (
    <>
      <li className="cart-item" key={item.id} value={item} amount={item.amount}>
        <span>{item}</span>
        <span>{` Aantal: ${item.amount}`}</span>
      </li>
    </>
  );
};
export { ListItem, CartItem };
