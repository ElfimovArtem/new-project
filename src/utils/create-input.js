import React from 'react';

export const inputCreator = (className, placeholder) => (
  <input
    className={className}
    type="text"
    placeholder={placeholder}
  />
);
