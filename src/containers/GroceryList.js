import React from "react";
import List from "../components/List/List";
import InputField from "../components/InputField";

const GroceryList = ({ items, handleClickItem, addNewItem }) => {
  return (
    <>
      <InputField onSubmit={addNewItem} />
      <List items={items} handleClickItem={handleClickItem} />
    </>
  );
};

export default GroceryList;
