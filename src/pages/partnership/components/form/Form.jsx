import React from 'react';
import './index.scss';
import FormInput from '../../../../ui/molecules/formInput/FormInput';
import FormTextArea from '../../../../ui/molecules/formTextArea/FormTextArea';
import Button from '../../../../ui/atoms/buttons/Button';
import message from '../../../../assets/icons/message.svg'

export default function Form() {
  return (
    <div className="form app-container">
      <div className="app-container__section">
        <h2>Ready to be our partner?</h2>
        <form>
          <div className="forminput">
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
            <FormInput
              label="Resume *"
              type="file"
              id="file"
              placeholder="Choose file"
            />
          </div>
          <FormTextArea
            label="Tell us a bit about you *"
            name="about"
            id="about"
            placeholder="Let us know"
          />
          <p>
            By submitting this form you agree to our terms and conditions and
            our Privacy Policy.
          </p>
          <Button className="form-button">
            <span>
              <img src={message} alt="Message icon" />
            </span>
            APPLY NOW
          </Button>
        </form>
      </div>
    </div>
  );
}
