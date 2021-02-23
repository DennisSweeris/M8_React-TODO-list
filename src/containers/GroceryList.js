import List from "../components/List/List";
import InputField from "../components/InputField";

export default function GroceryList({ items, handleClickItem, addGrocery }) {
  return (
    <>
      <InputField onSubmit={addGrocery} />
      <List items={items} handleClickItem={handleClickItem} />
    </>
  );
}
