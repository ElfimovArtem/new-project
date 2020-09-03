import { SIGN_IN, SIGN_UP } from './constants';

export const signUpAction = (signUpData) => ({
  type: SIGN_UP,
  payload: signUpData,
});

export const signInAction = (signInData) => ({
  type: SIGN_IN,
  payload: signInData,
});
