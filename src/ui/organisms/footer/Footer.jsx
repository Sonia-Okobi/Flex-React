import React from 'react';
import Button from '../../atoms/buttons/Button';
import Input from '../../atoms/input/Input';
import './index.scss';
import facebook from '../../../assets/icons/facebook.svg'
import twitter from '../../../assets/icons/twitter.svg'
import instagram from '../../../assets/icons/instagram.svg'
import linkedin from '../../../assets/icons/linkedin.svg'

export default function Footer() {
  return (
   <div className="footer-container">
     <div className="footer-container__section">
      <div className="footer-container__section__quicklinks">
        <h2>QUICK LINKS</h2>
        <ul className='footer-container__section__quicklinks__links'>
          <li>
            <a href="/">Company</a>
          </li>
          <li>
            <a href="/">How it Works</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Partnership</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
          <li>
            <a href="/">Customer Support</a>
          </li>
        </ul>
        <h4>Copyright © 2021 Flex</h4>
      </div>
      <div className="footer-container__section__newsletter">
        <h2>Newsletter</h2>
        <p>Subscribe to our weekly newsletter</p>
        <Input className='footer-container__section__newsletter__input' placeholder="Enter Email"/>
        <Button>SUBMIT</Button>
      </div>
      <div className="footer-container__section__contact">
            <h2>Contact us</h2>
            <p className='footer-container__section__contact__email'>Email: info@flex.com</p>
            <p>Tel: +234 800 123 5976, 700 125 7088</p>
            <div className="footer-container__section__contact__socials">
                <a href="/"><img src={facebook} alt="Facebook Icon" /></a>
                <a href="/"><img src={twitter} alt="Twitter Icon" /></a>
                <a href="/"><img src={instagram} alt="Instagram Icon" /></a>
                <a href="/"><img src={linkedin} alt="Linkedin Icon" /></a>
            </div>
            <h4><a href="/terms">Terms & Conditions</a></h4>
        </div>
    </div>
   </div>
  );
}
