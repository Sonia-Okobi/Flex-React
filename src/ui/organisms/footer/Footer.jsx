import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/buttons/Button';
import Input from '../../atoms/input/Input';
import './index.scss';
import facebook from '../../../assets/icons/facebook.svg';
import twitter from '../../../assets/icons/twitter.svg';
import instagram from '../../../assets/icons/instagram.svg';
import linkedin from '../../../assets/icons/linkedin.svg';

export default function Footer() {
  return (
    <div className="footer app-container">
      <div className="app-container__section">
        <div className="footer__quicklinks">
          <h2>QUICK LINKS</h2>
          <ul className="footer__quicklinks__links">
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/how">How it Works</Link>
            </li>
            <li>
              <Link to="/company">About us</Link>
            </li>
            <li>
              <Link to="/partnership">Partnership</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contacts">Customer Support</Link>
            </li>
          </ul>
          <h4>Copyright © 2021 Flex</h4>
        </div>
        <div className="footer__newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe to our weekly newsletter</p>
          <Input
            className="footer__newsletter__input"
            placeholder="Enter email"
          />
          <Button className="submit">SUBMIT</Button>
        </div>
        <div className="footer__contact">
          <h2>Contact us</h2>
          <p className="footer-container__section__contact__email">
            Email: info@flex.com
          </p>
          <p>Tel: +234 800 123 5976, 700 125 7088</p>
          <div className="footer__contact__socials">
            <a href="/">
              <img src={facebook} alt="Facebook Icon" />
            </a>
            <a href="/">
              <img src={twitter} alt="Twitter Icon" />
            </a>
            <a href="/">
              <img src={instagram} alt="Instagram Icon" />
            </a>
            <a href="/">
              <img src={linkedin} alt="Linkedin Icon" />
            </a>
          </div>
          <h4>
            <a href="/terms">Terms & Conditions</a>
          </h4>
        </div>
      </div>
    </div>
  );
}
