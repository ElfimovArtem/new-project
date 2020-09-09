import React from 'react';
import './footer-styles.scss';

export const Footer = () => (
  <footer className="footer">
    <p className="footer__text">Copyright © 2020</p>
    <div className="footer__social">
      <i className="fa fa-vk footer__icon" />
      <i className="fa fa-github footer__icon" />
      <i className="fa fa-envelope footer__icon" />
    </div>
  </footer>
);
