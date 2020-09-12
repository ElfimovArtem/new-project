import React from 'react';
import { content } from '../../constants';
import { CreditItem } from '../credit-item';
import './credits-container.scss';

export const CreditsContainer = () => (
  <section className="payments-container">
    <CreditItem
      title="Consumer credit"
      percent="15%"
      text={content.consumerCreditText}
    />
    <CreditItem
      title="Mortgage"
      percent="8%"
      text={content.mortgageText}
    />
  </section>
);
