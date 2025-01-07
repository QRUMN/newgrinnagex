import React from 'react';
import { Search, ClipboardCheck, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Inspection",
    description: "Thorough assessment of your property"
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Treatment Plan",
    description: "Customized solution for your needs"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Treatment",
    description: "Professional pest control application"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Follow-up",
    description: "Monitoring and maintenance"
  }
];

export const ServiceProcess = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-dark-900 dark:text-white">
        Our Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="text-[#56e39f] mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white">{step.title}</h3>
            <p className="text-dark-600 dark:text-dark-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};