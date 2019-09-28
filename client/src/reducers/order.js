import { GET_ORDERS, GET_ORDER } from '../actions/types';

const initialState = {
  orders: [],
  selectedOrder: null
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
    default:
      return state;
  }
}
