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
export const saveCustomerInfo =
  (firstname, lastname, email, phone) => async dispatch => {
    dispatch({
      type: SAVE_CUSTOMERINFO,
      payload: { firstname, lastname, email, phone }
    });
  };

// Saves the sub total of all the products
export const saveSubtotal = subtotal => async dispatch => {
  dispatch({
    type: SAVE_SUBTOTAL,
    payload: subtotal
  });
};

// Saves the shipping price
export const saveShippingPrice = shippingPrice => async dispatch => {
  dispatch({
    type: SAVE_SHIPPING_PRICE,
    payload: shippingPrice
  });
};

// Saves the tax total amount. right now it's fixed at 9%
export const saveTaxTotal = taxTotal => async dispatch => {
  dispatch({
    type: SAVE_TAX_TOTAL,
    payload: taxTotal
  });
};

// Saves the total amount of the order
export const saveTotal = total => async dispatch => {
  dispatch({
    type: SAVE_TOTAL,
    payload: total
  });
};

// Changes the 'form', just a String that decides what part of checkout the user is on
export const changeForm = form => async dispatch => {
  dispatch({
    type: CHANGE_FORM,
    payload: form
  });
};

// Just enable to click the 'Next' button
export const enableButton = () => async dispatch => {
  dispatch({
    type: ENABLE_BUTTON
  });
};

// Saves all the product from localstorage to redux so we can just copy the whole object and save it to mongodb
export const saveProduct =
  (
    variant_id,
    brand,
    name,
    colorway,
    retail_price,
    price,
    size,
    image,
    shoe_id,
    variant_quantity,
    shoe_total_quantity
  ) =>
  async dispatch => {
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
        shoe_id,
        variant_quantity,
        shoe_total_quantity
      }
    });
  };

// Process order
export const processOrder =
  ({
    customerInfo,
    subtotal,
    taxTotal,
    shipping,
    total,
    shippingAddress,
    billingAddress,
    products
  }) =>
  async dispatch => {
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

      // check if the order is a success, right now it's all success because we dont have to check for credit card validity
      dispatch({
        type: PROCESS_ORDER_SUCCESS
      });

      // just to check if it's working.
      console.log(res.data.msg);
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        console.log('processing got errors: ');
        errors.forEach(error => console.log(error));
      }

      console.log(err);
    }
  };
