import React from 'react';
import Button from '../../../../ui/atoms/buttons/Button';
import './index.scss';
import girl from '../../../../assets/images/Girl.png';
import partnersicon from '../../../../assets/images/partners-icons.png'

export default function HomeHero() {
  return (
    <div className="hero-container">
      <div className="hero-container__section">
        <div className="hero-container__section__text">
          <h1>Subscription Management Made Easy!</h1>
          <p>
            Flex is a susbscription management platform that allows you to
            manage multiple susbscription plans. It gives you the freedom to
            control and keep track of your expenses.
          </p>
          <Button variant="primary" className="register">REGISTER</Button>
          <Button variant="secondary">LOGIN</Button>
          <img src={partnersicon} alt="Partners icons" />
        </div>
        <div className="hero-container__section__image">
          <img src={girl} alt="A girl" />
        </div>
      </div>
    </div>
  );
}
