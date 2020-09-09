import React from 'react';
import './cards-container-styles.scss';
import { UserCard } from '../user-card';

export const CardsContainer = () => (
  <section className="cards-container">
    <UserCard
      text="Visa Classic"
      number="2200"
      balance="30 000 $"
    />
    <UserCard
      text="Master Card"
      number="9900"
      balance="80 000 $"
    />
  </section>
);
