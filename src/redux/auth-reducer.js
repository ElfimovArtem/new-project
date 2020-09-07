import {
  SIGN_IN,
  SIGN_UP,
  SIGN_UP_STORE_KEY,
  SIGN_IN_STORE_KEY
} from './constants';

const authInitialState = {};

export const authReducer = (state = authInitialState, { type, payload }) => {
  switch(type) {
    case SIGN_UP:
      return {
        ...state,
        [SIGN_UP_STORE_KEY]: {...payload}
      };
    case SIGN_IN:
      return {
        ...state,
        [SIGN_IN_STORE_KEY]: {...payload}
      };
    default:
      return state;
  }
};
