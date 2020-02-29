import * as actions from "./actions";
import { addItemToCart, removeItemFromCart } from "./utils";
const initialState = {
  hidden: true,
  cartItems: []
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case actions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    case actions.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== payload.id)
      };
    case actions.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};
