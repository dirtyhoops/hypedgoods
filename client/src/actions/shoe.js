import { GET_SHOES, GET_SHOE, SHOE_ERROR, GET_SHOES_SAME_MODEL } from './types';

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
