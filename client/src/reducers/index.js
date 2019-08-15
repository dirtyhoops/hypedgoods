import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import shoe from './shoe';
import cart from './cart';

export default combineReducers({
  alert,
  auth,
  shoe,
  cart
});
