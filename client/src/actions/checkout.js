import axios from 'axios';

import {
  SAVE_SHIPPINGADDRESS,
  SAVE_CUSTOMERINFO,
  SAVE_BILLINGADDRESS,
  SAVE_SUBTOTAL,
  CHANGE_FORM,
  SAVE_SHIPPING_PRICE,
  SAVE_TAX_TOTAL,
  SAVE_TOTAL,
  SAVE_PRODUCT,
  ENABLE_BUTTON,
  PROCESS_ORDER_SUCCESS
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

export const saveTaxTotal = taxTotal => async dispatch => {
  dispatch({
    type: SAVE_TAX_TOTAL,
    payload: taxTotal
  });
};

export const saveTotal = total => async dispatch => {
  dispatch({
    type: SAVE_TOTAL,
    payload: total
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

export const saveProduct = (
  variant_id,
  brand,
  name,
  colorway,
  retail_price,
  price,
  size,
  image,
  shoe_id
) => async dispatch => {
  dispatch({
    type: SAVE_PRODUCT,
    payload: {
      variant_id,
      brand,
      name,
      colorway,
      retail_price,
      price,
      size,
      image,
      shoe_id
    }
  });
};

// Process order
export const processOrder = ({
  customerInfo,
  subtotal,
  taxTotal,
  shipping,
  total,
  shippingAddress,
  billingAddress,
  products
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      '/api/orders',
      {
        customerInfo,
        subtotal,
        taxTotal,
        shipping,
        total,
        shippingAddress,
        billingAddress,
        products
      },
      config
    );

    // check if the order is a success, right now it's all success because we dontr have to check for credit card validity
    dispatch({
      type: PROCESS_ORDER_SUCCESS
    });

    // dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    // }

    console.log(err);
  }
};
