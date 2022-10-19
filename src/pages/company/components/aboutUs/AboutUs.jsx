import React from 'react';
import './index.scss';
import founder from '../../../../assets/images/Founder.png';
import customer from '../../../../assets/images/Customer.png';
import cofounder from '../../../../assets/images/Co-Founder.png';
import finance from '../../../../assets/images/Finance.png';
import global from '../../../../assets/images/Global.png';

export default function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-container__section">
        <div className="about-container__section__text">
          <h2>About Us</h2>
          <p>
            Flex combines great technology, subscription expertise, and a
            customer service ethos to solve real-world problems and is committed
            to becoming the operating system for your subscription business.{' '}
            <br /> <br /> We provide a complete software platform for managing
            telecommunication services, subscription services and billing
            process.
          </p>
        </div>
        <div className="about-container__section__image">
          <div className="about-container__section__image__team1">
            <div className="about-container__section__image__team1__member">
              <img src={founder} alt="Founder" />
              <h4>Jiro Ejobe</h4>
              <p>Managing Director (Founder)</p>
            </div>
            <div className="about-container__section__image__team1__member">
              <img src={customer} alt="President, Customer success" />
              <h4>Omowunmi Ikazoboh</h4>
              <p>President, Customer success</p>
            </div>
            <div className="about-container__section__image__team1__member">
              <img src={cofounder} alt="Co-Founder" />
              <h4>Naomi Saliu–Lawal</h4>
              <p>Co - Founder</p>
            </div>
          </div>
          <div className="about-container__section__image__team2">
            <div className="about-container__section__image__team2__member">
              <img src={finance} alt="President, Finance" />
              <h4>Tijani Nwadei </h4>
              <p>President of Finance</p>
            </div>
            <div className="about-container__section__image__team2__member">
              <img src={global} alt="President, Global Sales" />
              <h4>Tunde Salimonu</h4>
              <p>President, Global sales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
