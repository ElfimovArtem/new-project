import React from 'react';
import { useSelector } from 'react-redux';
import { SignInBlock } from '../sign-in-block';
import { SignUpBlock } from '../sign-up-block';

export const RegistrationForm = () => {
  const auth = useSelector(state => state.authData.auth);

  return (
    <section className="registration-block">
      {
        auth ? <SignInBlock/> : <SignUpBlock/>
      }
    </section>
  );
};

