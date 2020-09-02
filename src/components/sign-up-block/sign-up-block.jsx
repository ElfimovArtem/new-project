import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../input';
import { onChangeInputHandler, signUpBtnHandler } from '../../utils';
import { signInitialState } from '../../constants';
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
      <Input
        className="sign-up-block__input"
        placeholder="First name"
        name={firstName}
        onChange={(ev) => onChangeInputHandler(ev, setFirstName)}
      />
      <Input
        className="sign-up-block__input"
        placeholder="E-mail"
        name={email}
        onChange={(ev) => onChangeInputHandler(ev, setEmail)}
      />
      <Input
        className="sign-up-block__input"
        placeholder="Password"
        name={password}
        onChange={(ev) => onChangeInputHandler(ev, setPassword)}
      />
      <Input
        className="sign-up-block__input"
        placeholder="Confirm password"
        name={confirmPassword}
        onChange={(ev) => onChangeInputHandler(ev, setConfirmPassword)}
      />
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
