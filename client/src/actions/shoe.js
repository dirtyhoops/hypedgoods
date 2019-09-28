import {
  GET_SHOES,
  GET_SHOE,
  SHOE_ERROR,
  GET_SHOES_SAME_MODEL,
  CLEAR_SELECTED_SHOE,
  ADD_PRODUCT_SHOES_SUCCESS,
  GET_SHOES_VARIANTS,
  ADD_SHOES_VARIANTS_SUCCESS,
  DONE_LOADING_SHOES,
  DONE_DELETING_SHOES,
  DONE_DELETING_VARIANT
} from './types';

import axios from 'axios';
import { setAlert } from './alert';

// Get all the shoes
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

// just to change the 'loading' to true
export const doneLoading = () => async dispatch => {
  dispatch({
    type: DONE_LOADING_SHOES
  });
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
      payload: {
        status: err.response.status,
        statusText: err.response.statusText
      }
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

    // It just clears the error whenever the variant with valid ID loads
    dispatch({
      type: SHOE_ERROR,
      payload: null
    });
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: {
        msg: err.response.data.msg,
        status: err.response.status,
        statusText: err.response.statusText
      }
    });
  }
};

// Delete the selected shoes
export const deleteShoes = shoes_id => async dispatch => {
  try {
    const res = await axios.delete(`/api/shoes/${shoes_id}`);

    dispatch({
      type: CLEAR_SELECTED_SHOE
    });

    dispatch({
      type: DONE_DELETING_SHOES
    });

    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteVariant = (variant_id, shoes_id) => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/shoes/variants/${variant_id}/${shoes_id}`
    );

    dispatch({
      type: DONE_DELETING_VARIANT
    });

    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add shoe variant (size)
export const addShoesVariants = ({ formData }, shoes_id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/shoes/${shoes_id}/variants`,
      formData,
      config
    );

    dispatch({
      type: ADD_SHOES_VARIANTS_SUCCESS
    });

    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Add product
export const addProductShoes = ({ formData }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/shoes', formData, config);

    dispatch({
      type: ADD_PRODUCT_SHOES_SUCCESS
    });

    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
