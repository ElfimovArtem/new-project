import { registration } from '../constants';

export const registrationBtnHandler = (el) => {
  registration.auth = el.id === registration.signInId;
};
