export const registration = {
  signUpId: 'sign-up',
  signInId: 'sign-in',
};

export const initialState = {
  auth: false,
  user: {
    firstName: '',
    email: '',
    password: ''
  }
};

export const AUTHORIZATION_CHECK = 'AUTHORIZATION_CHECK';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
