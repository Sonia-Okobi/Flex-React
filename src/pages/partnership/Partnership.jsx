import React from 'react';
import DefaultLayout from '../../ui/layout/DefaultLayout';
import Form from './components/form/Form';
import Integration from './components/integration/Integration';
import PartnershipHero from './components/partnershipHero/PartnershipHero';

export default function Partnership() {
  return (
    <DefaultLayout>
      <PartnershipHero />
      <Integration />
      <Form />
    </DefaultLayout>
  );
}
