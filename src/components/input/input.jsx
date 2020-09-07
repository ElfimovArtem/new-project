import React from 'react';

export const Input = ({ className, placeholder, value, onChange, type, ...rest }) => (
  <input
    {...rest}
    className={className}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
