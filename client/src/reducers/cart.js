import { UPDATE_CART_ITEM_COUNT, ADD_ITEM_TO_CART } from '../actions/types';

const initialState = {
  items: [],
  cartItemCount: 0
};

// @TODO
// 1. TAKE OUT ADD_ITEM_TO_CART
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, payload]
      };
    case UPDATE_CART_ITEM_COUNT:
      return {
        ...state,
        cartItemCount: payload
      };
    default:
      return state;
  }
}
