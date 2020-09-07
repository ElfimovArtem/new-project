import React, { useState } from 'react';
import { Button } from '../button';
import { SignInBlock } from "../sign-in-block";
import { SignUpBlock } from "../sign-up-block";
import './registration-form-styles.scss';

export const RegistrationForm = () => {
  const [signIn, setSignIn] = useState(true);

  const handleFormSwitch = () => setSignIn(!signIn);

  return (
    <section>
      <section className="registration-page__control">
        <Button onClick={handleFormSwitch} id="sign-up">Sign up</Button>
        <Button onClick={handleFormSwitch} id="sign-in">Sign in</Button>
      </section>
      <section className="registration-block">
        {
          signIn ? <SignInBlock/> : <SignUpBlock/>
        }
      </section>
    </section>
  );
};
