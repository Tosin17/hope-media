import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer/auth-reducer';

export default combineReducers({
  auth: authReducer
});
