import {
  SAVE_SHIPPINGADDRESS,
  SAVE_BILLINGADDRESS,
  SAVE_CUSTOMERINFO,
  SAVE_SUBTOTAL,
  CHANGE_FORM,
  SAVE_SHIPPING_PRICE
} from '../actions/types';

const initialState = {
  shippingAddress: null,
  billingAddress: null,
  products: [],
  customerInfo: null,
  // change currentFormtto shippingform
  currentForm: 'shippingform',
  subtotal: 0,
  total: 0,
  tax: 0,
  shipping: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SAVE_SHIPPINGADDRESS:
      return {
        ...state,
        shippingAddress: payload,
        currentForm: 'shippingoption'
      };
    case SAVE_CUSTOMERINFO:
      return {
        ...state,
        customerInfo: payload
      };
    case SAVE_SUBTOTAL:
      return {
        ...state,
        subtotal: payload
      };
    case SAVE_SHIPPING_PRICE:
      return {
        ...state,
        shipping: payload
      };
    case CHANGE_FORM:
      return {
        ...state,
        currentForm: payload
      };

    default:
      return state;
  }
}
