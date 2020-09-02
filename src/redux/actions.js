import {
  AUTHORIZATION_CHECK,
  registration,
  SIGN_IN,
  SIGN_UP
} from '../constants';

export const registrationControlCheck = (el) => {
  return {
    type: AUTHORIZATION_CHECK,
    payload: {
      auth: (el.id === registration.signInId)
    }
  }
};

export const signUpBtnClick = (firstName, email, password, confirmPassword) => {
  return {
    type: SIGN_UP,
    payload: {
      firstName,
      email,
      password,
      confirmPassword
    }
  }
};

export const signInBtnClick = (email, password) => {
  return {
    type: SIGN_IN,
    payload: {
      email,
      password
    }
  }
};
