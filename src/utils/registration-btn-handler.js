import { authCheck } from '../redux';

export const registrationBtnHandler = (el, dispatch) => dispatch(authCheck(el));
