import React from "react";
import List from "../components/List/List";
import InputField from "../components/InputField";

const GroceryList = ({ items, handleClickItem, addGrocery }) => {
  return (
    <>
      <InputField onSubmit={addGrocery} />
      <List items={items} handleClickItem={handleClickItem} />
    </>
  );
};

export default GroceryList;
