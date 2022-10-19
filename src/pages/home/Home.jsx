import React from 'react';
import DefaultLayout from '../../ui/layout/DefaultLayout';
import Blog from './components/blog/Blog';
import Customers from './components/customers/Customers';
import HomeHero from './components/homeHero/HomeHero';
import Partners from './components/partners/Partners';
import Subscription from './components/subscription/Subscription';

export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <HomeHero />
        <Subscription />
        <Partners />
        <Customers />
        <Blog/>
      </DefaultLayout>
    </div>
  );
}
