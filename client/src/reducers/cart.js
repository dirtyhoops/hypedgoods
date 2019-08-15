import { GET_CART, ADD_ITEM_TO_CART } from '../actions/types';

const initialState = {
  items: []
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
    default:
      return state;
  }
}
