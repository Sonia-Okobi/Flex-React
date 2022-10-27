import React from 'react';
import DefaultLayout from '../../ui/layout/DefaultLayout';
import AboutUs from './components/aboutUs/AboutUs';
import CompanyHero from './components/companyhero/CompanyHero';
import ImageSlider from './components/imageSlider/ImageSlider';
import Management from './components/management/Management';
import Performance from './components/performance/Performance';

export default function Company() {
  return (
    <div>
      <DefaultLayout>
        <CompanyHero />
        <Management />
        <Performance />
        <AboutUs/>
        <ImageSlider/>
      </DefaultLayout>
    </div>
  );
}
