import React from 'react';
import Button from '../../../../ui/atoms/buttons/Button';
import './index.scss';
import girl from '../../../../assets/images/Girl.png';
import partnersicon from '../../../../assets/images/partners-icons.png';

export default function HomeHero() {
  return (
    <div className="home-hero app-container">
      <div className="app-container__section">
        <div className="home-hero__text">
          <h1>Subscription Management Made Easy!</h1>
          <p>
            Flex is a susbscription management platform that allows you to
            manage multiple susbscription plans. It gives you the freedom to
            control and keep track of your expenses.
          </p>
          <div className="home-hero__text__button">
            <Button variant="primary" className="register">
              REGISTER
            </Button>
            <Button variant="secondary" className="login">LOGIN</Button>
          </div>
          <img src={partnersicon} alt="Partners icons" />
        </div>
        <div className="home-hero__image">
          <img src={girl} alt="A girl" />
        </div>
      </div>
    </div>
  );
}
