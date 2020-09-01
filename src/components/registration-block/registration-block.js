import React from 'react';
import { registrationBlockSelection } from '../../utils';

export const RegistrationBlock = () => (
  <section className="registration-block" id="registration-block">
    { registrationBlockSelection() }
  </section>
);

