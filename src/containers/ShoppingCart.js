import List from "../components/List/List";

export default function ShoppingCart({
  items,
  handleClickEmptyCart,
  onDelete,
}) {
  return (
    <>
      <button className="button-cart" onClick={handleClickEmptyCart}>
        Leeg Winkelwagen
      </button>
      <List items={items} onDelete={onDelete} />
    </>
  );
}
