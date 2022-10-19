import React from 'react';
import './index.scss';

export default function CompanyHero() {
  return (
    <div className="company-hero">
      <div className="company-hero__section">
        <div className="company-hero__section__text">
          <h1>Learn more about us at Flex</h1>
          <div className="company-hero__section__text__dots">
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
            <div className="company-hero__section__text__dots__dot"></div>
          </div>
        </div>
        <div className="company-hero__section__image">
          <p>
            For over 10 years, Flex has enabled thousands of businesses to
            manage the recurring revenue lifecycle. Our vision is to become
            recognized by our customers as the indispensable system for running
            a subscription business.
          </p>
        </div>
      </div>
    </div>
  );
}
