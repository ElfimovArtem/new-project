import { AUTHORIZATION_CHECK, registration } from '../constants';

export const authCheck = (el) => {
  return {
    type: AUTHORIZATION_CHECK,
    payload: {
      auth: (el.id === registration.signInId)
    }
  }
};
