import React from 'react';

export const inputCreator = (className, placeholder, value, onChangeHandler) => (
  <input
    className={className}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChangeHandler}
  />
);
