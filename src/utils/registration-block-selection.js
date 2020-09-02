import React from 'react';
import { SignUpBlock, SignInBlock } from '../components';

export const registrationBlockSelection = (auth) => {
  if (auth) {
      return (<SignInBlock />)
    }
    return (<SignUpBlock />);
};
