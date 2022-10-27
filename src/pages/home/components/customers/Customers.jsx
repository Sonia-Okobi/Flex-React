import React from 'react';
import './index.scss';
import map from '../../../../assets/images/map.png';
import avatar from '../../../../assets/images/face-card.png';
import quote from '../../../../assets/images/quote.svg';

export default function Customers() {
  return (
    <div className="customers app-container">
      <div className="app-container__section">
        <h1>Love from customers</h1>
        <p>
          Learn why over 1000 people trust Flex to power their complex billing
          and financial operations.
        </p>
        <div className="customers__map">
          <img src={map} alt="Map" />
        </div>
        <div className="base-card customers__card">
          <div className="customers__card__avatar">
            <img src={avatar} alt="Avatar" />
          </div>
          <img className="customers__card__quote" src={quote} alt="Quote" />
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
