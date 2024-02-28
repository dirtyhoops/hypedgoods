import {
  SAVE_SHIPPINGADDRESS,
  SAVE_BILLINGADDRESS,
  SAVE_CUSTOMERINFO,
  SAVE_SUBTOTAL,
  CHANGE_FORM,
  SAVE_SHIPPING_PRICE,
  SAVE_TAX_TOTAL,
  SAVE_TOTAL,
  SAVE_PRODUCT,
  ENABLE_BUTTON,
  PROCESS_ORDER_SUCCESS
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
  taxPercent: 0.09,
  taxTotal: 0,
  shipping: 0,
  disableButton: true,
  orderSuccess: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SAVE_SHIPPINGADDRESS:
      return {
        ...state,
        shippingAddress: payload,
        currentForm: 'shippingoption'
      };
    case SAVE_BILLINGADDRESS:
      return {
        ...state,
        billingAddress: payload
        // currentForm: 'shippingoption'
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
    case SAVE_TAX_TOTAL:
      return {
        ...state,
        taxTotal: payload
      };
    case SAVE_TOTAL:
      return {
        ...state,
        total: payload
      };
    case CHANGE_FORM:
      return {
        ...state,
        currentForm: payload
      };
    case SAVE_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload]
      };
    case ENABLE_BUTTON:
      return {
        ...state,
        disableButton: false
      };
    case PROCESS_ORDER_SUCCESS:
      return {
        ...state,
        orderSuccess: true
      };

    default:
      return state;
  }
}
