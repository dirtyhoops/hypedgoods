import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import shoe from './shoe';
import cartAndFilter from './cartAndFilter';

export default combineReducers({
  alert,
  auth,
  shoe,
  cartAndFilter
});
