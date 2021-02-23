export const ListItem = ({ item, handleClickItem }) => {
  const { id, title, type } = item;
  return (
    <>
      <li
        className="list-item"
        key={id}
        value={title}
        type={type}
        onClick={handleClickItem}>
        {title}
      </li>
    </>
  );
};

export const CartItem = ({ item, onDelete }) => {
  const { title, id, amount } = item;
  return (
    <li className="cart-item" key={id}>
      {title}

      <span className="cart-amount">{amount}</span>
      <button className="list-button" onClick={() => onDelete(id)}>
        X
      </button>
    </li>
  );
};
