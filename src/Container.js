import React from "react";
import GroceryList from "./containers/GroceryList";
import ShoppingCart from "./containers/ShoppingCart";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { type: "Grocerylist", id: 1, title: "Appels" },
        { type: "Grocerylist", id: 2, title: "Pak melk" },
        { type: "Grocerylist", id: 3, title: "Chocolade" },
      ],
      shoppingCartItems: [
        { type: "Shoppinglist", id: 1, title: "Bananen", amount: 5 },
        { type: "Shoppinglist", id: 2, title: "Ice Tea", amount: 1 },
      ],
    };
  }

  render() {
    const addGrocery = grocery => {
      const item = {
        type: "Grocerylist",
        id: this.state.groceryItems.length + 1,
        title: grocery,
      };
      this.setState({ groceryItems: this.state.groceryItems.concat(item) });
    };

    const addNewShoppingListItem = itemTitle => {
      const newShoppingItem = {
        type: "Shoppinglist",
        id: this.state.shoppingCartItems.length + 1,
        title: itemTitle,
        amount: 1,
      };

      this.setState({
        shoppingCartItems: this.state.shoppingCartItems.concat(newShoppingItem),
      });
    };

    // Delete Item
    const deleteItem = id => {
      const newItems = this.state.shoppingCartItems.filter(
        item => item.id !== id
      );
      this.setState({ shoppingCartItems: newItems });
    };

    const addAmountToItem = itemTitle => {
      const shoppingList = [...this.state.shoppingCartItems];
      const newList = shoppingList.map(shoppingItem => {
        if (shoppingItem.title === itemTitle) {
          shoppingItem.amount++;
        }
        return shoppingItem;
      });
      this.setState({ shoppingCartItems: newList });
    };

    const handleClickItem = event => {
      const clickedItem = event.target.innerText;
      const currentShoppingList = [...this.state.shoppingCartItems];
      const shoppingListItem = currentShoppingList.filter(
        item => item.title === clickedItem
      );

      shoppingListItem.length === 0
        ? addNewShoppingListItem(clickedItem)
        : addAmountToItem(clickedItem);
    };

    const handleClickEmptyCart = () => {
      this.setState({ shoppingCartItems: [] });
    };

    return (
      <div className="container">
        <div className="groceries-list groceries">
          <h1>Groceries</h1>
          <GroceryList
            handleClickItem={handleClickItem}
            addGrocery={addGrocery}
            items={this.state.groceryItems}
          />
        </div>
        <div className="groceries-list shopping-cart">
          <h1>Shopping Cart</h1>
          <ShoppingCart
            handleClickEmptyCart={handleClickEmptyCart}
            items={this.state.shoppingCartItems}
            onDelete={deleteItem}
          />
        </div>
      </div>
    );
  }
}
