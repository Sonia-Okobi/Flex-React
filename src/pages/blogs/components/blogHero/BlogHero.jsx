import React from 'react';
import './index.scss';
import bloghero from '../../../../assets/images/blog-hero.png';
import avatar from '../../../../assets/images/Avatar@2x.png';

export default function BlogHero() {
  return (
    <div className="blog-container">
      <div className="blog-container__section">
        <h1 className='blog-container__section__header'>The news that surrounds us is collected here</h1>
        <p className='blog-container__section__description'>
          Read watch and absorb the content that we publish in our news blog.
          Also leave comments and communicate with other users.
        </p>
        <div className="blog-container__section__card">
          <div className="blog-container__section__card__text">
            <h1>Omdia forecasts cloud gaming to nudge $12bn by 2026</h1>
            <p>
              Subscription services such as Xbox Game Pass Ultimate and
              PlayStation Now will be the primary force driving cloud gaming,
              helping to generate $3.7bn in total in 2021.
            </p>
            <div className="blog-container__section__card__text__author">
              <img src={avatar} alt="Avatar" />
              <h3>Tina Lawal</h3>
              <h4>02 Dec</h4>
            </div>
          </div>
          <div className="blog-container__section__card__image">
            <img src={bloghero} alt="Blog" />
          </div>
        </div>
      </div>
    </div>
  );
}
