import React from 'react';
import { inputCreator } from '../../utils';
import './sign-up-block-styles.scss';

export const SignUpBlock = () => (
  <section className="sign-up-block">
    <h3 className="sign-up-block__title">Sign up</h3>
    {inputCreator("sign-up-block__input", "First name")}
    {inputCreator("sign-up-block__input", "E-mail")}
    {inputCreator("sign-up-block__input", "Password")}
    {inputCreator("sign-up-block__input", "Confirm password")}
    <button
      type="button"
      className="sign-up-block__btn"
    >Sign up</button>
  </section>
);
