import { initialState, AUTHORIZATION_CHECK } from '../constants';

export const registrationReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case AUTHORIZATION_CHECK:
      return {
        ...state,
        auth: payload.auth
      };
    default:
      return state;
  }
};
