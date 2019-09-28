import {
  GET_ORDERS,
  GET_ORDER,
  GET_RECENT_ORDERS,
  RESET_RECENT_ORDERS_LOADING
} from '../actions/types';

const initialState = {
  orders: [],
  selectedOrder: null,
  recentOrders: [],
  loadingRecentOrders: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload
      };
    case GET_ORDER:
      return {
        ...state,
        selectedOrder: payload
      };
    case GET_RECENT_ORDERS:
      return {
        ...state,
        recentOrders: payload,
        loadingRecentOrders: false
      };
    case RESET_RECENT_ORDERS_LOADING:
      return {
        ...state,
        loadingRecentOrders: true
      };
    default:
      return state;
  }
}
