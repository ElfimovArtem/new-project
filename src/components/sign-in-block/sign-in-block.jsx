import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onChangeInputHandler } from '../../utils';
import { signInAction } from '../../redux';
import { Input } from '../input';
import './sign-in-block-styles.scss';

export const SignInBlock = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignIn = () => dispatch(signInAction({ email, password })); //обнулить инпуты

  return (
    <section className="sign-in-block">
      <h3 className="sign-in-block__title">Sign in</h3>
      <Input
        className="sign-in-block__input"
        placeholder="E-mail"
        type="text"
        value={email}
        onChange={onChangeInputHandler(setEmail)}
      />
      <Input
        className="sign-in-block__input"
        placeholder="Password"
        type="password"
        value={password}
        onChange={onChangeInputHandler(setPassword)}
      />
      <button
        type="button"
        className="sign-up-block__btn"
        onClick={handleSignIn}
      >Sign in</button>
    </section>
  );
};
