import React from 'react';
import { RegistrationBtn } from '../registration-btn/registration-btn';
import { useDispatch } from 'react-redux';
import './registration-control-styles.scss';

export const RegistrationControl = () => {
  const dispatch = useDispatch();

  return (
    <section className="registration-page__control">
      <RegistrationBtn
        text="Sign up"
        dispatch={dispatch}
        id="sign-up"
      />
      <RegistrationBtn
        text="Sign in"
        dispatch={dispatch}
        id="sign-in"
      />
    </section>
  );
};
