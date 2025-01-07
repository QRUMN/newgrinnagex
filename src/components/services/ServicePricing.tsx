import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: 99,
    features: [
      "Quarterly inspections",
      "Common pest treatment",
      "Free re-service",
      "Basic warranty"
    ]
  },
  {
    name: "Advanced",
    price: 199,
    features: [
      "Monthly inspections",
      "All pest treatment",
      "Priority service",
      "Extended warranty",
      "Preventive treatments"
    ]
  }
];

export const ServicePricing = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-dark-900 dark:text-white">
        Service Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="p-8 bg-white dark:bg-dark-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">{plan.name}</h3>
            <p className="text-3xl font-bold text-[#56e39f] mb-6">${plan.price}/mo</p>
            <ul className="space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-dark-600 dark:text-dark-300">
                  <Check className="w-5 h-5 text-[#56e39f] mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};