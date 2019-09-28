import axios from 'axios';
import { GET_ORDERS, GET_ORDER, GET_RECENT_ORDERS } from '../actions/types';

// Get all the orders
export const getOrders = () => async dispatch => {
  try {
    const res = await axios.get('/api/orders');
    dispatch({
      type: GET_ORDERS,
      payload: res.data
    });
  } catch (err) {
    console.log('error');
    // dispatch({

    // })
  }
};

// Get an order with id
export const getOrder = id => async dispatch => {
  try {
    const res = await axios.get(`/api/orders/${id}`);

    dispatch({
      type: GET_ORDER,
      payload: res.data
    });
  } catch (err) {
    console.log('error');
    // dispatch({
    //   type: SHOE_ERROR,
    //   payload: {
    //     status: err.response.status,
    //     statusText: err.response.statusText
    //   }
    // });
  }
};

export const getRecentOrders = email => async dispatch => {
  try {
    const res = await axios.get('/api/orders');
    dispatch({
      type: GET_RECENT_ORDERS,
      payload: res.data.filter(a => a.customerInfo.email === email)
    });
  } catch (err) {
    // change this later for better error catching
    console.log('error filtering');
  }
};
