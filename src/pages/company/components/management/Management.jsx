import React from 'react';
import './index.scss';
import laptop from '../../../../assets/images/laptop.png';

export default function Management() {
  return (
    <div className="management-container">
      <div className="management-container__section">
        <h2>
          We provide a complete software platform for managing subscription
          services
        </h2>
        <div className="management-container__section__description">
          <div className="management-container__section__description__image">
            <img src={laptop} alt="Laptop" />
          </div>
          <div className="management-container__section__description__text">
            <h4>
              We are experts in our field and are able to transform and provide
              subscription services , integrated payment methods and wide range
              of subscription management.
            </h4>
            <p>
              Over the past decade, Flex has expanded its offerings to address
              the complexities of Recurring billing and Subscription Management.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
