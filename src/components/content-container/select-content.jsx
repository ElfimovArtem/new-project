import React from 'react';
import { CardsContainer } from '../cards-container';
import { CreditsContainer } from '../credits-container';

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
      <p>888</p>
    );
  default:
    return (
      <CardsContainer />
    );
  }
};
