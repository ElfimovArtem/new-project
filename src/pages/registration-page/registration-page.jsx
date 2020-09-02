import React from 'react';
import { RegistrationForm } from '../../components/registration-form';
import { RegistrationFormSwitch } from '../../components/registration-form-switch';
import './registration-page-styles.scss';

export const RegistrationPage = () => (
  <section className="registration-page">
    <h2 className="registration-page__title">ACCOUNT LOGIN</h2>
    <RegistrationFormSwitch />
    <RegistrationForm />
  </section>
);
