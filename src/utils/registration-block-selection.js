import React from 'react';
import { registration } from '../constants';
import { SignUpBlock, SignInBlock } from '../components';

export const registrationBlockSelection = () => {
  if (registration.auth) {
      return (<SignInBlock />)
    }
    return (<SignUpBlock />);
};
