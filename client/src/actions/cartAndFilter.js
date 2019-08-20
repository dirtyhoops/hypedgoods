import {
  SHOE_ERROR,
  UPDATE_CART_ITEM_COUNT,
  UPDATE_SHOES_PER_PAGE
} from './types';

import axios from 'axios';
import { setAlert } from './alert';

export const updateCartItemCount = itemCount => async dispatch => {
  try {
    dispatch({
      type: UPDATE_CART_ITEM_COUNT,
      payload: itemCount
    });
  } catch (err) {
    dispatch({
      type: SHOE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const updateShoesPerPage = shoesperpage => async dispatch => {
  try {
    dispatch({
      type: UPDATE_SHOES_PER_PAGE,
      payload: shoesperpage
    });
  } catch (err) {
    console.log('updating shoes error');
  }
};
