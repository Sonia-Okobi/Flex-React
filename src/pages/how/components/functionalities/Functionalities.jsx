import React from 'react';
import './index.scss';
import functionality from '../../../../assets/images/functionality.png';
import feature from '../../../../assets/icons/feature.svg';

export default function Functionalities() {
  return (
    <div className="functionalities app-container">
      <div className="app-container__section">
        <div className="functionalities__functionality1">
          <div className="functionalities__functionality1__image">
            <img src={functionality} alt="Laptop" />
          </div>
          <div className="functionalities__functionality1__text">
            <h1>Our Featured Functionalities</h1>
            <p>Here’re some of the features Flex has to offer.</p>
            <div className="functionalities__functionality1__text__feature">
              <img src={feature} alt="icon" />
              <h3>Marketing tools & Discounts and promos</h3>
            </div>
            <div className="functionalities__functionality1__text__feature">
              <img src={feature} alt="icon" />
              <h3>Flexible charging schemes</h3>
            </div>
          </div>
        </div>
        <div className="functionalities__functionality2">
          <div className="functionalities__functionality1__image">
            <img src={functionality} alt="Laptop" />
          </div>
          <div className="functionalities__functionality1__text">
            <h1>Our Featured Functionalities</h1>
            <p>Here’re some of the features Flex has to offer.</p>
            <div className="functionalities__functionality1__text__feature">
              <img src={feature} alt="icon" />
              <h3>Managing telecommunication services.</h3>
            </div>
            <div className="functionalities__functionality1__text__feature">
              <img src={feature} alt="icon" />
              <h3>Managing subscription services.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
