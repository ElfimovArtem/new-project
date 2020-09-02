import React from 'react';
import { registrationBlockSelection } from '../../utils';
import { useSelector } from 'react-redux';

export const RegistrationBlock = () => {
  const auth = useSelector(state => state.authData.auth);

  return (
    <section className="registration-block" id="registration-block">
      { registrationBlockSelection(auth) }
    </section>
  );
};

