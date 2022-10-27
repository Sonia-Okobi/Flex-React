import React from 'react';
import Button from '../../../../ui/atoms/buttons/Button';
import './index.scss';
import avatar from '../../../../assets/images/Avatar@2x-2.png';
import avatar2 from '../../../../assets/images/Avatar@2x.png';
import overlay from '../../../../assets/images/Overlay-2.png';
import overlay2 from '../../../../assets/images/Overlay-3.png';
import overlay3 from '../../../../assets/images/Overlay-4.png';
import Card from '../../../../ui/organisms/card/Card';

export default function Blog() {
  return (
    <div className="blog app-container">
      <div className="app-container__section">
        <div className="blog__text">
          <Button className="blog__text__button">
            OUR BLOG
          </Button>
          <h1>Don’t miss our recent articles</h1>
          <p>
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand.
          </p>
        </div>
        <div className="blog__cards">
          <Card
            image={overlay}
            alternative="Blog Image"
            header="Runaway Saas spend..."
            description="Just the management and insight alone got us a long way..."
            authorimage={avatar2}
            author="William Okafor"
            date="02 Dec"
          />
          <Card
            image={overlay2}
            alternative="Blog Image"
            header="Growth of SaaS industry"
            description="Subscription-based SaaS application and licensing makes utilizing..."
            authorimage={avatar2}
            author="Tina Lawal"
            date="02 Dec"
          />
          <Card
            image={overlay3}
            alternative="Blog Image"
            header="Future of Learning"
            description="A constant ability to learn will be on the most crucial skills."
            authorimage={avatar}
            author="Helen Afam"
            date="02 Dec"
          />
        </div>
      </div>
    </div>
  );
}
