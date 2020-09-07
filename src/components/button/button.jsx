import React from 'react';
import cn from 'classnames';
import './button-styles.scss';

export const Button = ({ children, ...rest}) => (
  <button {...rest} className={cn('button', rest.className)} type="button">
    {children}
  </button>
);
