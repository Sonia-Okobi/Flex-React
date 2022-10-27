import React from 'react';
import './index.scss';
import partners from '../../../../assets/images/partners.png';

export default function PartnershipHero() {
  return (
    <div className="partnership-hero app-container">
      <div className="app-container__section">
        <div className="partnership-hero__text">
          <h1>Learn more about our partners</h1>
          <div className="dots">
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
            <div className="dots__dot"></div>
          </div>
        </div>
        <div className="partnership-hero__image">
          <img src={partners} alt="Partners" />
        </div>
      </div>
    </div>
  );
}
