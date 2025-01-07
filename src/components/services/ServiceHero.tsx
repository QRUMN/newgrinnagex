import React from 'react';
import { Shield } from 'lucide-react';
import { Container } from '../common/Container';

export const ServiceHero = () => {
  return (
    <div className="py-20 bg-dark-900 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-16 h-16 text-[#56e39f] mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">Professional Pest Control Services</h1>
          <p className="text-xl text-gray-300">
            Comprehensive pest management solutions for residential and commercial properties
          </p>
        </div>
      </Container>
    </div>
  );
};