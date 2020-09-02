import { signUpBtnClick } from '../redux/actions';

export const signUpBtnHandler = (values, setters, dispatch) => {
  dispatch(signUpBtnClick(
    values[0],
    values[1],
    values[2],
    values[3],
    ));
  setters.forEach(setter => setter(''));
};
