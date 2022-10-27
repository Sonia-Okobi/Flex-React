import React from 'react';
import './index.scss';
import quality from '../../../../assets/icons/quality-icon.svg';

export default function Qualities() {
  return (
    <div className="qualities app-container">
      <div className="app-container__section">
        <h2>A few reasons why you should join us!!!</h2>
        <div className="qualities__cards">
          <div className="qualities__cards__card">
            <img src={quality} alt="Icon" />
            <h3>Collaboration</h3>
            <p>
              Collaboration is the process of two or more people or
              organizations working together to complete a task or achieve a
              goal.{' '}
            </p>
          </div>
          <div className="qualities__cards__card">
            <img src={quality} alt="Icon" />
            <h3>Transparency</h3>
            <p>
              Transparency, as used in science is operating in such a way that
              it is easy for others to see what actions are performed.
            </p>
          </div>
          <div className="qualities__cards__card">
            <img src={quality} alt="Icon" />
            <h3>Trust</h3>
            <p>
              Trust will help us foster a positive and productive environment
              that delivers value to our users and customers.{' '}
            </p>
          </div>
          <div className="qualities__cards__card">
            <img src={quality} alt="Icon" />
            <h3>Integrity</h3>
            <p>
              Integrity is the practice of showing a consistent and
              uncompromising adherence to strong moral and ethical principles.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
