import React from 'react';
import { registrationBtnHandler } from '../../utils';
import './registration-btn-styles.scss';

export const RegistrationBtn = ({ text, id, dispatch }) => (
  <button
    className="control__registration-btn"
    type="button"
    id={id}
    onClick={(ev) => registrationBtnHandler(ev.target, dispatch)}
  >{text}</button>
);
