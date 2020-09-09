import React from 'react';
import { NavigationItem } from '../navigation-item';
import './main-menu-styles.scss';

export const MainMenu = () => (
  <nav className="main-menu">
    <ul className="main-menu__navigation">
      <NavigationItem>Main</NavigationItem>
      <NavigationItem>Credits</NavigationItem>
      <NavigationItem>Deposits</NavigationItem>
      <NavigationItem>Payments</NavigationItem>
    </ul>
  </nav>
);
