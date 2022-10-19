import React from 'react';
import './index.scss';
import partners from '../../../../assets/images/partners.png'

export default function PartnershipHero() {
  return (
    <div className="partnership-contaiiner">
      <div className="partnership-container__section">
        <div className="partnership-container__section__text">
            <h1>Learn more about our partners</h1>
        </div>
        <div className="partnership-container__section__image">
            <img src={partners} alt="Partners" />
        </div>
      </div>
    </div>
  );
}
