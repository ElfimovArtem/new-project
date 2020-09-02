import { authInitialState, AUTHORIZATION_CHECK } from '../constants';

export const registrationControlReducer = (state = authInitialState, { type, payload }) => {
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
