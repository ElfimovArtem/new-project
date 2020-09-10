import React from 'react';

export const NavigationItem = ({ children, handler }) => (
  <li
    className="main-menu__navigation-item"
    onClick={handler}
  >
    {children}
  </li>
);
