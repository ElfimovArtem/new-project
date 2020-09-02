import { combineReducers } from 'redux'
import { registrationControlReducer } from './registration-control-reducer';
import { signReducer } from './sign-reducer';

export const rootReducer = combineReducers({
  authData: registrationControlReducer,
  signData: signReducer
});
