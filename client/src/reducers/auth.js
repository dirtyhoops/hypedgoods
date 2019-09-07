import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  MAKE_ADMIN,
  ADD_ADDRESS_SUCCESS
} from '../actions/types';

//add isAdmin later to authenticate if the current user is an admin (maybe just check user.isAdmin once we get the user and put it in the state)
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
  isAdmin: false,
  isAddingAddressSuccess: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        isAdmin: false
      };
    case MAKE_ADMIN:
      return {
        ...state,
        isAdmin: true
      };
    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        isAddingAddressSuccess: true
      };
    default:
      return state;
  }
}
