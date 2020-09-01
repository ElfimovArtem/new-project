import React from 'react';
import { RegistrationBtn } from '../registration-btn/registration-btn';
import './registration-control-styles.scss';

export const RegistrationControl = () => (
  <section className="registration-page__control">
    <RegistrationBtn text="Sign up" id="sign-up" />
    <RegistrationBtn text="Sign in" id="sign-in" />
  </section>
);
