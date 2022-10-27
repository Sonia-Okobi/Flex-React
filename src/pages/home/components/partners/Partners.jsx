import React from 'react';
import './index.scss';
import partners from '../../../../assets/images/partners.png';
import Button from '../../../../ui/atoms/buttons/Button';

export default function Partners() {
  return (
    <div className="partners app-container">
      <div className="app-container__section">
        <div className="partners__image">
          <img src={partners} alt="Partners" />
        </div>
        <div className="partners__text">
          <h1>Our Partners</h1>
          <p>
            We build trust and confidence with our partners by being one of the
            first brands to create a well secured payment platform with some of
            the best companys recognized globally.
          </p>
          <Button>BECOME A PARTNER</Button>
        </div>
      </div>
    </div>
  );
}
