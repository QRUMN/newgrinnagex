import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { FeatureHighlight } from '../components/sections/FeatureHighlight';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { ContactSection } from '../components/sections/ContactSection';
import { AIChat } from '../components/chat/AIChat';
import { VoiceDemo } from '../components/demo/VoiceDemo';

export const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeatureHighlight />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <AIChat />
      <VoiceDemo />
    </Layout>
  );
};