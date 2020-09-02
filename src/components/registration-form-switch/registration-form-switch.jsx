import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../button';
import { registrationBtnHandler } from './registartion-form-switch-utils';
import './registration-form-switch-styles.scss';

export const RegistrationFormSwitch = () => {
  const dispatch = useDispatch();

  const handleFormSwitch = (ev) => {
    registrationBtnHandler(ev.target, dispatch)
  };

  return (
    <section className="registration-page__control">
      <Button onClick={handleFormSwitch} id="sign-up">Sign up</Button>
      <Button onClick={handleFormSwitch} id="sign-in">Sign in</Button>
    </section>
  );
};
