import React from 'react';
import './index.scss';
import line from '../../assets/images/Line.png';
import FormInput from '../../ui/molecules/formInput/FormInput';
import FormTextArea from '../../ui/molecules/formTextArea/FormTextArea';
import Button from '../../ui/atoms/buttons/Button';
import arrow from '../../assets/icons/forward-arrow.svg';
import DefaultLayout from '../../ui/layout/DefaultLayout';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';
import twitter from '../../assets/icons/twitter copy.svg';
import facebook from '../../assets/icons/facebook copy.svg';
import instagram from '../../assets/icons/instagram copy.svg';
import background from '../../assets/icons/bg.svg';

export default function Contacts() {
  return (
    <DefaultLayout>
      <div className="contacts app-container">
        <div className="app-container__section">
          <h1>We are here to help</h1>
          <img className="line" src={line} alt="Line" />
          <p className="contacts__description">
            Contact us if you have any questions about our company or products.
            We will try to provide an answer within a few days.
          </p>
          <div className="contacts__form">
            <div className="contacts__form__information">
              <h4>Our Contact Information</h4>
              <p className="contacts__form__information__description">
                Fill up the form and our team will get in touch and we'll be
                happy to assist you
              </p>
              <div className="contacts__form__information__phone">
                <img src={phone} alt="phone" />
                <p>+234 800 123 5976</p>
              </div>
              <div className="contacts__form__information__email">
                <img src={email} alt="email" />
                <p>support@flex.com</p>
              </div>
              <div className="contacts__form__information__socials">
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
              </div>
              <div className="contacts__form__information__background">
                <img src={background} alt="vector" />
              </div>
            </div>
            <div className="contacts__form__input">
              <FormInput
                label="Full name *"
                type="text"
                id="fullname"
                placeholder="Enter name"
              />
              <FormInput
                label="Contact email *"
                type="email"
                id="email"
                placeholder="you@example.com"
              />
              <FormInput
                label="Subject *"
                type="text"
                id="subject"
                placeholder="Enter subject here"
              />
              <FormTextArea
                label="Message *"
                name="message"
                id="message"
                placeholder="How can we help you"
              />
              <Button className="contacts-button" icon={arrow}>
                SEND MESSAGE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
