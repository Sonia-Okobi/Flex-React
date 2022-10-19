import React from 'react';
import './index.scss';
import overlay2 from '../../../../assets/images/Overlay-2.png';
import overlay3 from '../../../../assets/images/Overlay-3.png';
import overlay4 from '../../../../assets/images/Overlay-4.png';
import overlay5 from '../../../../assets/images/Overlay-5.png';
import overlay6 from '../../../../assets/images/Overlay-6.png';
import overlay7 from '../../../../assets/images/Overlay-7.png';
import overlay8 from '../../../../assets/images/Overlay-8.png';
import avatar from '../../../../assets/images/Avatar@2x.png';
import avatar2 from '../../../../assets/images/Avatar@2x-2.png';
import Cards from '../../../../ui/organisms/card/Cards';

export default function BlogPosts() {
  return (
    <div className="post-container">
      <div className="post-container__section">
        <div className="post-container__section__cards">
          <Cards
            image={overlay2}
            alternative="Overlay"
            header="Runaway Saas spend..."
            description="Just the management and insight alone got us a long way...."
            authorimage={avatar}
            authoralternative="Avatar"
            author="William Okafor"
            date="02 Dec"
          />
          <Cards
            image={overlay3}
            alternative="Overlay"
            header="Growth of SaaS industry"
            description="Subscription-based SaaS application and licensing makes utilizing...."
            authorimage={avatar}
            authoralternative="Avatar"
            author="Tina Lawal"
            date="02 Dec"
          />
          <Cards
            image={overlay4}
            alternative="Overlay"
            header="Subscription model"
            description="The subscription business model is a business model in which a customer...."
            authorimage={avatar}
            authoralternative="Avatar"
            author="Helen Afam"
            date="02 Dec"
          />
          <Cards
            image={overlay5}
            alternative="Overlay"
            header="Future of subscription"
            description="A lot of people don’t know the future
          of subscription businesses today...."
            authorimage={avatar}
            authoralternative="Avatar"
            author="Helen Afam"
            date="02 Dec"
          />
          <Cards
            image={overlay6}
            alternative="Overlay"
            header="Prime video channels"
            description="Prime Video Channels is launching with 8 different OTT services...."
            authorimage={avatar}
            authoralternative="Avatar"
            author="William Okafor"
            date="02 Dec"
          />
          <Cards
            image={overlay7}
            alternative="Overlay"
            header="Future of Learning"
            description="A constant ability to learn will be on the most crucial skills...."
            authorimage={avatar2}
            authoralternative="Avatar"
            author="Tina Lawal"
            date="02 Dec"
          />
        </div>
        <div className="post-container__section__card">
          <div className="post-container__section__card__image">
            <img src={overlay8} alt="overlay" />
          </div>
          <div className="post-container__section__card__text">
            <h3>Future of Work</h3>
            <p>
              Majority of peole will work in jobs that don’t exist today....
            </p>
            <div className="post-container__section__card__text__author">
              <img src={avatar} alt="Avatar" />
              <h4>William Okafor</h4>
              <h5>02 Dec</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
