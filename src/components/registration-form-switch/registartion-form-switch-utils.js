import { registrationControlCheck } from '../../redux';

export const registrationBtnHandler = (el, dispatch) => dispatch(registrationControlCheck(el));
