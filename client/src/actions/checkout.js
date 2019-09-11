import {
  SAVE_SHIPPINGADDRESS,
  SAVE_CUSTOMERINFO,
  SAVE_BILLINGADDRESS,
  SAVE_SUBTOTAL,
  CHANGE_FORM
} from './types';

// Saves the shipping address that the customer provided
export const saveShippingAddress = shippingFormData => async dispatch => {
  try {
    dispatch({
      type: SAVE_SHIPPINGADDRESS,
      payload: shippingFormData
    });
  } catch (err) {
    console.log('cant save shipping address... fix this later');
  }
};

// Saves the customer information
export const saveCustomerInfo = (
  firstname,
  lastname,
  email,
  phone
) => async dispatch => {
  try {
    dispatch({
      type: SAVE_CUSTOMERINFO,
      payload: { firstname, lastname, email, phone }
    });
  } catch (err) {
    console.log(
      'cant save customer info, fix this later, have a dispatch for errors'
    );
  }
};

export const saveSubtotal = subtotal => async dispatch => {
  try {
    dispatch({
      type: SAVE_SUBTOTAL,
      payload: subtotal
    });
  } catch (err) {
    console.log(
      'cant save subtotal, research if try and catch is a must everytime'
    );
  }
};

export const changeForm = form => async dispatch => {
  try {
    dispatch({
      type: CHANGE_FORM,
      payload: form
    });
  } catch (err) {
    console.log(
      'cant save subtotal, research if try and catch is a must everytime'
    );
  }
};
