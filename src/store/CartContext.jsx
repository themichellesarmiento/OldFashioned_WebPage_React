import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item => { }),
  removeItem: (id => { }),
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingCartItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItem > -1) {
      const existingItem = state.items[existingCartItem];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItem] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existinCartItem = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existinCartItem];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existinCartItem, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existinCartItem] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
}


export const CartContextProvider = ({ children }) => {
  const [cart, dispatchAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item => {
    dispatchAction({ type: 'ADD_ITEM', item });
  })

  const removeItem = (id => {
    dispatchAction({ type: 'REMOVE_ITEM', id });
  })

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem
  }

  return <CartContext value={cartContext}>{children}</CartContext>
}

export default CartContext;