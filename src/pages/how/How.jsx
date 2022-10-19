import React from 'react';
import DefaultLayout from '../../ui/layout/DefaultLayout';
import Functionalities from './components/functionalities/Functionalities';
import HowHero from './components/howHero/HowHero';
import Qualities from './components/qualities/Qualities';

export default function How() {
  return (
    <DefaultLayout>
      <HowHero />
      <Functionalities />
      <Qualities />
    </DefaultLayout>
  );
}
