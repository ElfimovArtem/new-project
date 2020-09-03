import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../input';
import { onChangeInputHandler } from '../../utils';
import { signUpAction } from '../../redux';
import './sign-up-block-styles.scss';

export const SignUpBlock = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleSignUp = () => dispatch(signUpAction({ email, password, confirmPassword, firstName }));

  return (
    <section className="sign-up-block">
      <h3 className="sign-up-block__title">Sign up</h3>
      <Input
        className="sign-up-block__input"
        placeholder="First name"
        name={firstName}
        onChange={onChangeInputHandler(setFirstName)}
      />
      <Input
        className="sign-up-block__input"
        placeholder="E-mail"
        name={email}
        onChange={onChangeInputHandler(setEmail)}
      />
      <Input
        className="sign-up-block__input"
        placeholder="Password"
        name={password}
        onChange={onChangeInputHandler(setPassword)}
      />
      <Input
        className="sign-up-block__input"
        placeholder="Confirm password"
        name={confirmPassword}
        onChange={onChangeInputHandler(setConfirmPassword)}
      />
      <button
        type="button"
        className="sign-up-block__btn"
        onClick={handleSignUp}
      >Sign up</button>
    </section>
  );
};
