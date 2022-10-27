import React from 'react';
import './index.scss';
import forwardarrow from '../../../../assets/icons/forward-arrow.svg';
import howlaptop from '../../../../assets/images/how-laptop.png';
import Button from '../../../../ui/atoms/buttons/Button';

export default function HowHero() {
  return (
    <div className="how app-container">
      <div className="app-container__section">
        <h1>
          We Focus on <span>Structured</span> and Sustainable <br />{' '}
          Subscription Management.
        </h1>
        <div className="how__information">
          <div className="how__information__text">
            <hr />
            <h3>
              "A Platform you can trust to give you seamless and stress-free
              experience all day everyday.”
            </h3>
            <p>
              You want to know how flex works? We’ve got you. <br /> Take a
              quick tour around Flex and see how it works. Sign up to get
              started!
            </p>
            <Button icon={forwardarrow}>WATCH VIDEO</Button>
          </div>
          <div className="how__information__image">
            <img src={howlaptop} alt="Laptop" />
          </div>
        </div>
      </div>
    </div>
  );
}
