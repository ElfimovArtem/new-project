import React from 'react';
import './user-card-styles.scss';

export const UserCard = ({ text, number, balance }) => (
  <section className="user-card">
    <div className="user-card__label">
      <p className="user-card__label-text">{text}</p>
      <p className="user-card__label-number">**{number}</p>
    </div>
    <p className="user-card__balance">{balance}</p>
    <div className="user-card__options">
      <i className="fa fa-cogs user-card__options-icon" />
    </div>
  </section>
);
