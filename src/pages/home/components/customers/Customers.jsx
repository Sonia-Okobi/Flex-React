import React from 'react';
import './index.scss';
import map from '../../../../assets/images/map.png';
import avatar from '../../../../assets/images/photo.png';
import quote from '../../../../assets/images/quote.svg';

export default function Customers() {
  return (
    <div className="customers-container">
      <div className="customers-container__section">
        <h1>Love from customers</h1>
        <p>
          Learn why over 1000 people trust Flex to power their complex billing
          and financial operations.
        </p>
        <img className='customers-container__section__map' src={map} alt="Map" />
        <div className="base-card customers-container__section__card">
          <img
            className="customers-container__section__card__avatar"
            src={avatar}
            alt="Avatar"
          />
          <img
            className="customers-container__section__card__quote"
            src={quote}
            alt="Quote"
          />
          <p>
            Now I don’t have to worry about missing my favourite shows. Thank
            you Flex.
          </p>
          <h4>- Ann Franks</h4>
        </div>
      </div>
    </div>
  );
}
