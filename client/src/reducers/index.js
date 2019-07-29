import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import shoe from './shoe';

export default combineReducers({
  alert,
  auth,
  shoe
});
