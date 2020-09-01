import React from 'react';
import { inputCreator } from '../../utils';
import './sign-in-block-styles.scss';

export const SignInBlock = () => (
  <section className="sign-in-block">
    <h3 className="sign-in-block__title">Sign in</h3>
    {inputCreator("sign-in-block__input", "E-mail")}
    {inputCreator("sign-in-block__input", "Password")}
    <button
      type="button"
      className="sign-up-block__btn"
    >Sign in</button>
  </section>
);
