import { combineReducers } from 'redux'
import { AUTH_STORE_KEY } from './constants';
import { authReducer } from './auth-reducer';

export const rootReducer = combineReducers({
  [AUTH_STORE_KEY]: authReducer
});
