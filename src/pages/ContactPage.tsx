import React from 'react';
import { Container } from '../components/common/Container';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactMap } from '../components/contact/ContactMap';

export const ContactPage = () => {
  return (
    <div className="py-24 bg-white dark:bg-dark-900">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300">
            Get in touch with our pest control experts today
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-12">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </Container>
    </div>
  );
};