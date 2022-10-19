import React from 'react';
import './index.scss';
import forwardarrow from '../../../../assets/icons/forward-arrow.svg';
import howlaptop from '../../../../assets/images/how-laptop.png';
import Button from '../../../../ui/atoms/buttons/Button';

export default function HowHero() {
  return (
    <div className="how-container">
      <div className="how-container__section">
        <h1>
          We Focus on <span>Structured</span> and Sustainable <br />{' '}
          Subscription Management.
        </h1>
        <div className="how-container__section__information">
          <div className="how-container__section__information__text">
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
            <Button className='how-container__section__information__text__button' icon={forwardarrow}>WATCH VIDEO</Button>
          </div>
          <div className="how-container__section__information__image">
            <img src={howlaptop} alt="Laptop" />
          </div>
        </div>
      </div>
    </div>
  );
}
