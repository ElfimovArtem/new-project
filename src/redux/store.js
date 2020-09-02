import { createStore, compose, applyMiddleware } from 'redux';
import { registrationReducer } from './registration-reducer';
import thunk from 'redux-thunk';

export const store = createStore(registrationReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
