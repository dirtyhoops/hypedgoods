import {
  UPDATE_CART_ITEM_COUNT,
  UPDATE_SHOES_PER_PAGE,
  FILTER_PRODUCTS_BY_BRANDS
} from '../actions/types';

const initialState = {
  cartItemCount: 0,
  shoesPerPage: 30,
  filteredItems: [],
  filteredItemsLoading: true,
  brands: ''
};

// @TODO
// 1. TAKE OUT ADD_ITEM_TO_CART
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_CART_ITEM_COUNT:
      return {
        ...state,
        cartItemCount: payload
      };
    case UPDATE_SHOES_PER_PAGE:
      return {
        ...state,
        shoesPerPage: payload
      };
    case FILTER_PRODUCTS_BY_BRANDS:
      return {
        ...state,
        filteredItems: payload.items,
        brands: payload.brands,
        filteredItemsLoading: false
      };
    default:
      return state;
  }
}
