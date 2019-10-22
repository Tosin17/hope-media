import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth-reducer/auth-reducer';
import { streamsReducer } from '../reducers/stream-reducers';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
});
