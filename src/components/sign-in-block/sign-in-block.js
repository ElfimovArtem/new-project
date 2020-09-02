import React, {useState} from 'react';
import {inputCreator, onChangeInputHandler, signUpBtnHandler} from '../../utils';
import { signInitialState } from '../../constants';
import { useDispatch } from 'react-redux';
import { signInBtnClick } from '../../redux';
import './sign-in-block-styles.scss';

export const SignInBlock = () => {
  const signDispatch = useDispatch();
  const [email, setEmail] = useState(signInitialState.userSignIn.email);
  const [password, setPassword] = useState(signInitialState.userSignIn.password);

  return (
    <section className="sign-in-block">
      <h3 className="sign-in-block__title">Sign in</h3>
      {inputCreator(
        "sign-in-block__input",
        "E-mail",
        email,
        (ev) => onChangeInputHandler(ev, setEmail)
      )}
      {inputCreator(
        "sign-in-block__input",
        "Password",
        password,
        (ev) => onChangeInputHandler(ev, setPassword)
      )}
      <button
        type="button"
        className="sign-up-block__btn"
        onClick={() => signUpBtnHandler(
          [
            email,
            password,
          ],
          [setEmail, setPassword],
          signDispatch,
          signInBtnClick
        )}
      >Sign in</button>
    </section>
  );
};
