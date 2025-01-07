import React from 'react';
import { Container } from '../components/common/Container';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServicesList } from '../components/services/ServicesList';
import { ServiceProcess } from '../components/services/ServiceProcess';
import { ServicePricing } from '../components/services/ServicePricing';
import { ServiceFAQ } from '../components/services/ServiceFAQ';

export const ServicesPage = () => {
  return (
    <div className="bg-white dark:bg-dark-900">
      <ServiceHero />
      <Container>
        <ServicesList />
        <ServiceProcess />
        <ServicePricing />
        <ServiceFAQ />
      </Container>
    </div>
  );
};