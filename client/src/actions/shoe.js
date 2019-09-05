import {
  GET_SHOES,
  GET_SHOE,
  SHOE_ERROR,
  GET_SHOES_SAME_MODEL,
  CLEAR_SELECTED_SHOE,
  ADD_PRODUCT_SHOES_SUCCESS,
  GET_SHOES_VARIANTS,
  ADD_SHOES_VARIANTS_SUCCESS,
  EDIT_SHOES_VARIANTS,
  DONE_LOADING_SHOES,
  DONE_DELETING_SHOES
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

// just to change the 'loading' to true
export const doneLoading = () => async dispatch => {
  dispatch({
    type: DONE_LOADING_SHOES,
    payload: true
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

// Delete the selected shoes
export const deleteShoes = shoes_id => async dispatch => {
  try {
    const res = await axios.delete(`/api/shoes/${shoes_id}`);

    dispatch({
      type: CLEAR_SELECTED_SHOE
    });

    dispatch({
      type: DONE_DELETING_SHOES,
      payload: true
    });

    dispatch(
      setAlert('Shoes and its variants are successfully deleted', 'success')
    );

    // dispatch(setAlert(msg, 'sucess')));
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
      `/api/shoes/variants${variant_id}/${shoes_id}`
    );
    dispatch(setAlert('Shoes variant is successfully deleted', 'success'));
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// 'variants/:variant_id/:shoes_id'

// Add shoe variant (size)
export const addShoesVariants = ({ formData }, shoes_id) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(
      `/api/shoes/${shoes_id}/variants`,
      formData,
      config
    );

    dispatch({
      type: ADD_SHOES_VARIANTS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
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
    dispatch(setAlert('Shoes is successfully added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
