import {
  SAVE_SHIPPINGADDRESS,
  SAVE_CUSTOMERINFO,
  SAVE_BILLINGADDRESS,
  SAVE_SUBTOTAL,
  CHANGE_FORM,
  SAVE_SHIPPING_PRICE,
  ENABLE_BUTTON
} from './types';

// Saves the shipping address that the customer provided
export const saveShippingAddress = shippingFormData => async dispatch => {
  dispatch({
    type: SAVE_SHIPPINGADDRESS,
    payload: shippingFormData
  });
};

// Saves the shipping address that the customer provided
export const saveBillingAddress = billingFormData => async dispatch => {
  dispatch({
    type: SAVE_BILLINGADDRESS,
    payload: billingFormData
  });
};

// Saves the customer information
export const saveCustomerInfo = (
  firstname,
  lastname,
  email,
  phone
) => async dispatch => {
  dispatch({
    type: SAVE_CUSTOMERINFO,
    payload: { firstname, lastname, email, phone }
  });
};

export const saveSubtotal = subtotal => async dispatch => {
  dispatch({
    type: SAVE_SUBTOTAL,
    payload: subtotal
  });
};

export const saveShippingPrice = shippingPrice => async dispatch => {
  dispatch({
    type: SAVE_SHIPPING_PRICE,
    payload: shippingPrice
  });
};

export const changeForm = form => async dispatch => {
  dispatch({
    type: CHANGE_FORM,
    payload: form
  });
};

export const enableButton = () => async dispatch => {
  dispatch({
    type: ENABLE_BUTTON
  });
};
