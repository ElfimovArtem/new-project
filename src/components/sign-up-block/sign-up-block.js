import React, { useState } from 'react';
import { inputCreator, onChangeInputHandler, signUpBtnHandler } from '../../utils';
import { signInitialState } from '../../constants';
import { useDispatch } from 'react-redux';
import { signUpBtnClick } from '../../redux';
import './sign-up-block-styles.scss';

export const SignUpBlock = () => {
  const signDispatch = useDispatch();
  const [firstName, setFirstName] = useState(signInitialState.userSignUp.firstName);
  const [email, setEmail] = useState(signInitialState.userSignUp.email);
  const [password, setPassword] = useState(signInitialState.userSignUp.password);
  const [confirmPassword, setConfirmPassword] = useState(signInitialState.userSignUp.confirmPassword);

  return (
    <section className="sign-up-block">
      <h3 className="sign-up-block__title">Sign up</h3>
      {inputCreator(
        "sign-up-block__input",
        "First name",
        firstName,
        (ev) => onChangeInputHandler(ev, setFirstName)
      )}
      {inputCreator(
        "sign-up-block__input",
        "E-mail",
        email,
        (ev) => onChangeInputHandler(ev, setEmail)
      )}
      {inputCreator(
        "sign-up-block__input",
        "Password",
        password,
        (ev) => onChangeInputHandler(ev, setPassword)
      )}
      {inputCreator(
        "sign-up-block__input",
        "Confirm password",
        confirmPassword,
        (ev) => onChangeInputHandler(ev, setConfirmPassword)
      )}
      <button
        type="button"
        className="sign-up-block__btn"
        onClick={() => signUpBtnHandler(
          [
            firstName,
            email,
            password,
            confirmPassword
          ],
          [setFirstName, setEmail, setPassword, setConfirmPassword],
          signDispatch,
          signUpBtnClick
        )}
      >Sign up</button>
    </section>
  );
};
