import React from 'react';
import Logo from '../../atoms/logo/Logo';
import './index.scss';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar app-container">
      <nav className="app-container__section">
        <Logo />
        <ul className="navbar__links">
          <li>
            <NavLink className="nav-links" to="/company">
              Company
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/how">
              How it Works
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/partnership">
              Partnership
            </NavLink>
          </li>
          <li>
            <a className="base-button--primary" href="/contacts">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
