import React from 'react';
import logo from '../../../assets/images/logo.png';
import './index.scss';

export default function Logo() {
  return (
    <div className="app-logo">
      <a href="/">
        <img src={logo} alt="App logo" />
      </a>
    </div>
  );
}
