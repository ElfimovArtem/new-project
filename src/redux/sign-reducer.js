import {
  SIGN_IN,
  SIGN_UP,
  signInitialState
} from '../constants';

export const signReducer = (state = signInitialState, { type, payload }) => {
  switch(type) {
    case SIGN_UP:
      return {
        ...state,
        userSignUp: {
          firstName: payload.firstName,
          email: payload.email,
          password: payload.password,
          confirmPassword: payload.confirmPassword
        }
      };
    case SIGN_IN:
      return {
        ...state,
        userSignIn: {
          email: payload.email,
          password: payload.password
        }
      };
    default:
      return state;
  }
};
