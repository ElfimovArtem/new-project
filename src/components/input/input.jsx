import React from 'react';

export const Input = ({ className, placeholder, value, onChangeHandler, ...rest }) => (
  <input
    {...rest}
    className={className}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChangeHandler}
  />
);
