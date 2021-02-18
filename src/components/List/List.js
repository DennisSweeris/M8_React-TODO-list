import React from "react";
import { ListItem, CartItem } from "./ListItem";

const List = ({ items, handleClickItem }) => {
  return (
    <>
      <ul>
        {items.map(item => {
          if (item.type === "Itemlist")
            return (
              <ListItem
                key={item.id}
                item={item.title}
                handleClickItem={handleClickItem}
                type={item.type}
              />
            );
          else
            return (
              <CartItem
                key={item.id}
                item={item.title}
                type={item.type}
                amount={item.amount}
              />
            );
        })}
      </ul>
    </>
  );
};

export default List;
