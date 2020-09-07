import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../input';
import { onChangeInputHandler } from '../../utils';
import { signUpAction } from '../../redux';
import './sign-up-block-styles.scss';

export const SignUpBlock = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
      dispatch(signUpAction({ email, password, confirmPassword, firstName }));
      setFirstName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
  }

  return (
    <section className="sign-up-block">
      <h3 className="sign-up-block__title">Sign up</h3>
      <Input
        className="sign-up-block__input"
        placeholder="First name"
        type="text"
        value={firstName}
        onChange={onChangeInputHandler(setFirstName)}
      />
      <Input
        className="sign-up-block__input"
        placeholder="E-mail"
        value={email}
        type="text"
        onChange={onChangeInputHandler(setEmail)}
      />
      <Input
        className="sign-up-block__input"
        placeholder="Password"
        value={password}
        type="password"
        onChange={onChangeInputHandler(setPassword)}
      />
      <Input
        className="sign-up-block__input"
        placeholder="Confirm password"
        value={confirmPassword}
        type="password"
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
