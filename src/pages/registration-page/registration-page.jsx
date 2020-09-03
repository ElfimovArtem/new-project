import React from 'react';
import { RegistrationForm } from '../../components/registration-form';
import './registration-page-styles.scss';

export const RegistrationPage = () => (
  <section className="registration-page">
    <h2 className="registration-page__title">ACCOUNT LOGIN</h2>
    <RegistrationForm />
  </section>
);
