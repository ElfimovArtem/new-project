import React from 'react';

export const Input = ({ className, placeholder, value, onChange, ...rest }) => (
  <input
    {...rest}
    className={className}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
