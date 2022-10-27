import React from 'react';
import './index.scss';
import bloghero from '../../../../assets/images/blog-hero.png';
import avatar from '../../../../assets/images/Avatar@2x.png';

export default function BlogHero() {
  return (
    <div className="blog-hero app-container">
      <div className="app-container__section">
        <h1 className='blog-hero__header'>The news that surrounds us is collected here</h1>
        <p className='blog-hero__description'>
          Read watch and absorb the content that we publish in our news blog.
          Also leave comments and communicate with other users.
        </p>
        <div className="base-card blog-hero__card">
          <div className="blog-hero__card__text">
            <h1>Omdia forecasts cloud gaming to nudge $12bn by 2026</h1>
            <p>
              Subscription services such as Xbox Game Pass Ultimate and
              PlayStation Now will be the primary force driving cloud gaming,
              helping to generate $3.7bn in total in 2021.
            </p>
            <div className="author">
              <img className='author__avatar' src={avatar} alt="Avatar" />
              <h4>Tina Lawal</h4>
              <h5>02 Dec</h5>
            </div>
          </div>
          <div className="blog-hero__card__image">
            <img src={bloghero} alt="Blog" />
          </div>
        </div>
      </div>
    </div>
  );
}
