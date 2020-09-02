export const signUpBtnHandler = (values, setters, dispatch, action) => {
  dispatch(action(
    values[0],
    values[1],
    values[2],
    values[3],
    ));
  setters.forEach(setter => setter(''));
};
