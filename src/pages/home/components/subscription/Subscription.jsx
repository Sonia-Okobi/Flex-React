import React from 'react';
import './index.scss';
import subscription from '../../../../assets/images/subscription.png';
import payment from '../../../../assets/images/payment.png';

export default function Subscription() {
  return (
    <div className=".subscriptions app-container">
      <div className="app-container__section">
        <div className="subscriptions__subscription">
          <div className="subscriptions__subscription__image">
            <img src={subscription} alt="Subscription" />
          </div>
          <div className="subscriptions__subscription__text">
            <h1>Operate on a single platform</h1>
            <p>
              Managing and keeping track of multiple subscriptions could be a
              bit tedious. With Flex, you need not worry about that as all
              subscriptions are easily managed on one platform.
            </p>
          </div>
        </div>
        <div className="subscriptions__payment">
          <div className="subscriptions__subscription__image">
            <img src={payment} alt="Payment" />
          </div>
          <div className="subscriptions__subscription__text">
            <h1>Take your subscription plan to another level</h1>
            <p>
              We provide our esteemed users with so much flexibility with our
              payment platforms. No need to worry about security because we have
              got you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
