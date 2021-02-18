import React, { Component } from "react";
import GroceryList from "./containers/GroceryList";
import ShoppingCart from "./containers/ShoppingCart";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingItems: [
        { type: "Itemlist", id: 1, title: "Appels" },
        { type: "Itemlist", id: 2, title: "Pak melk" },
        { type: "Itemlist", id: 3, title: "Chocolade" },
      ],
      shoppingCartItems: [
        { type: "Shoppinglist", id: 1, title: "Bananen", amount: 5 },
        { type: "Shoppinglist", id: 2, title: "Ice Tea", amount: 1 },
      ],
    };
  }

  render() {
    const addNewShoppingListItem = itemTitle => {
      const newShoppingItem = {
        type: "Shoppinglist",
        id: this.state.shoppingCartItems.length + 1,
        title: itemTitle,
        amount: 1,
      };

      this.setState(prevState => {
        const newList = prevState.shoppingCartItems.concat(newShoppingItem);
        return {
          shoppingCartItems: newList,
        };
      });
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

    const addNewItem = grocery => {
      const item = {
        type: "Itemlist",
        id: this.state.shoppingItems.length + 1,
        title: grocery,
      };
      this.setState({ shoppingItems: this.state.shoppingItems.concat(item) });
    };

    return (
      <div className="container">
        <div className="groceries-list groceries">
          <h1>Groceries</h1>
          <GroceryList
            handleClickItem={handleClickItem}
            addNewItem={addNewItem}
            items={this.state.shoppingItems}
          />
        </div>
        <div className="groceries-list shopping-cart">
          <h1>Shopping Cart</h1>
          <ShoppingCart
            handleClickEmptyCart={handleClickEmptyCart}
            items={this.state.shoppingCartItems}
          />
        </div>
      </div>
    );
  }
}

export default Container;