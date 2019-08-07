import {
  GET_SHOES,
  GET_SHOE,
  SHOE_ERROR,
  GET_SHOES_SAME_MODEL,
  CLEAR_SELECTED_SHOE,
  ADD_PRODUCT_SHOES_SUCCESS,
  GET_SHOES_VARIANTS
} from './types';

import axios from 'axios';
import { setAlert } from './alert';

export const getShoes = () => async dispatch => {
  try {
    const res = await axios.get('/api/shoes');

    dispatch({
      type: GET_SHOES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getShoe = id => async dispatch => {
  try {
    const res = await axios.get(`/api/shoes/${id}`);

    dispatch({
      type: GET_SHOE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const clearSelectedShoe = () => dispatch => {
  dispatch({
    type: CLEAR_SELECTED_SHOE
  });
};

export const getShoeModel = model => async dispatch => {
  try {
    const res = await axios.get(`/api/shoes/model/${model}`);

    dispatch({
      type: GET_SHOES_SAME_MODEL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getShoesVariants = shoes_id => async dispatch => {
  try {
    const res = await axios.get(`/api/shoes/${shoes_id}/variants`);

    dispatch({
      type: GET_SHOES_VARIANTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add product
export const addProductShoes = ({ formData }) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/shoes', formData, config);

    dispatch({
      type: ADD_PRODUCT_SHOES_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
