import { ListItem, CartItem } from "./ListItem";

export default function List({ items, handleClickItem, onDelete }) {
  return (
    <ul>
      {items.map(item => {
        const { id } = item;
        if (item.type === "Grocerylist")
          return (
            <ListItem key={id} handleClickItem={handleClickItem} item={item} />
          );
        else return <CartItem key={id} item={item} onDelete={onDelete} />;
      })}
    </ul>
  );
}
