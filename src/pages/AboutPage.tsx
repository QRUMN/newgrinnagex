import React from 'react';
import { Container } from '../components/common/Container';

export const AboutPage = () => {
  return (
    <div className="py-24 bg-white dark:bg-dark-900">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-white mb-6">
            About Grinnage Extermination
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300">
            Leading the industry in innovative and eco-friendly pest control solutions since 1998
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              To provide exceptional pest control services while maintaining the highest standards of safety, 
              environmental responsibility, and customer satisfaction. We believe in creating pest-free environments 
              without compromising the health of our planet or our communities.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Our Values
            </h2>
            <ul className="space-y-4 text-dark-600 dark:text-dark-300">
              <li>• Excellence in service delivery</li>
              <li>• Environmental stewardship</li>
              <li>• Customer-first approach</li>
              <li>• Innovation in pest control methods</li>
              <li>• Commitment to safety</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              With over 25 years of experience, our team of certified professionals brings unmatched expertise 
              in both residential and commercial pest control. We stay at the forefront of industry developments, 
              continuously updating our methods and technologies to provide the most effective solutions.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Our Commitment
            </h2>
            <p className="text-dark-600 dark:text-dark-300">
              We're committed to building long-lasting relationships with our clients through transparent 
              communication, reliable service, and guaranteed results. Our success is measured not just by 
              the pests we eliminate, but by the peace of mind we provide to our customers.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};