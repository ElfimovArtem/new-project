import React from 'react';
import { CardsContainer } from '../cards-container';
import { CreditsContainer } from '../credits-container';
import { PaymentsContainer } from '../payments-container';

export const selectContent = (btn) => {
  switch (btn) {
    case 'credits':
      return (
        <CreditsContainer />
      );
    case 'deposits':
      return (
        <p>Depos</p>
      );
    case 'payments':
      return (
        <PaymentsContainer />
      );
    default:
      return (
        <CardsContainer />
      );
  }
};
