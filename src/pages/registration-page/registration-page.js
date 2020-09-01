import React from 'react';
import { RegistrationBlock, RegistrationControl } from '../../components';
import './registration-page-styles.scss';

export const RegistrationPage = () => (
  <section className="registration-page">
    <h2 className="registration-page__title">ACCOUNT LOGIN</h2>
    <RegistrationControl />
    <RegistrationBlock />
  </section>
);
