import { SHOE_ERROR, ADD_ITEM_TO_CART, GET_CART } from './types';

import axios from 'axios';
import { setAlert } from './alert';

// @TOGO:
// 1. TAKE OUT addItemToCart later
export const addItemToCart = id => async dispatch => {
  try {
    const res = await axios.get(`/api/shoes/variants/${id}`);
    console.log('additemtocart triggered up to api', id);

    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
