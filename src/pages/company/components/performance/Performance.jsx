import React from 'react';
import './index.scss';
import performance from '../../../../assets/images/performance.png';

export default function Performance() {
  return (
    <div className="performance app-container">
      <div className="app-container__section">
        <div className="performance__text">
          <h2>How we’re doing</h2>
          <p className="performance__text__description">
            Check out how Flex has been performing over the past decade.
          </p>
          <div className="performance__text__cards">
            <div className="performance__text__cards__card">
              <h3>10</h3>
              <p>Years of Experience</p>
            </div>
            <div className="performance__text__cards__card">
              <h3>27</h3>
              <p>Partners</p>
            </div>
            <div className="performance__text__cards__card">
              <h3>20</h3>
              <p>Smart Working People</p>
            </div>
            <div className="performance__text__cards__card">
              <h3>40k+</h3>
              <p>Subscriptions under management</p>
            </div>
          </div>
        </div>
        <div className="performance__image">
          <img src={performance} alt="Performance" />
          {/* <div className="performance-container__section__image__background"></div> */}
          <div className="performance__image__card security">
            Security
          </div>
          <div className="performance__image__card flexibility">
            Flexibility
          </div>
        </div>
      </div>
    </div>
  );
}
