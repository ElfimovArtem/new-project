import React, { useState } from 'react';
import { NavigationItem } from '../navigation-item';
import { selectContent } from './select-content';
import './content-container-styles.scss';

export const ContentContainer = () => {
  const [navBtnName, setNavBtnName] = useState('cards');

  return (
    <section className="content-container">
      <nav className="main-menu">
        <ul className="main-menu__navigation">
          <NavigationItem handler={() => setNavBtnName('cards')}>Cards</NavigationItem>
          <NavigationItem handler={() => setNavBtnName('credits')}>Credits</NavigationItem>
          <NavigationItem handler={() => setNavBtnName('deposits')}>Deposits</NavigationItem>
          <NavigationItem handler={() => setNavBtnName('payments')}>Payments</NavigationItem>
        </ul>
      </nav>
      {
        selectContent(navBtnName)
      }
    </section>
  );
};
