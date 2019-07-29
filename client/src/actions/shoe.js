import { GET_SHOES, GET_SHOE, SHOE_ERROR } from './types';

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
