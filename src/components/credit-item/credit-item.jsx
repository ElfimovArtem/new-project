import React from 'react';
import './credit-item-styles.scss';

export const CreditItem = ({ title, percent, text }) => (
  <section className="payment-item">
    <div className="payment-item__name">
      <p className="payment-item__name-title">{title}</p>
      <p className="payment-item__name-percent">{percent}</p>
    </div>
    <div className="payment-item__description">
      <p className="payment-item__description-text">{text}</p>
    </div>
    <div className="payment-item__request">
      <p className="payment-item__request-label">Send request</p>
      <i className="fa fa-handshake-o payment-item__request-icon" />
    </div>
  </section>
);
