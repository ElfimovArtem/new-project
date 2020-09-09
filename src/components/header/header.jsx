import React from 'react';
import LogoIcon from '../../assets/logo.png';
import { Button } from '../button';
import './header.scss';

export const Header = () => (
  <section className="header">
    <div className="header__logo">
      <img
        src={LogoIcon}
        className="header__logo-icon"
        alt="logo-icon"
      />
    </div>
    <div className="header__info">
      <p className="header__info-phone">8-800-000-11-00</p>
      <p className="header__info-address">24 Cedar Avenue, Arcadia Bay</p>
    </div>
    <div className="header__cabinet">
      <i className="fa fa-user header__cabinet-icon" />
      <Button className="header__cabinet-button">Billy Milligan</Button>
    </div>
  </section>
);
