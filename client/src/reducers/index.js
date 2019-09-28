import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import shoe from './shoe';
import cartAndFilter from './cartAndFilter';
import checkout from './checkout';
import order from './order';

export default combineReducers({
  alert,
  auth,
  shoe,
  cartAndFilter,
  checkout,
  order
});
