import React from 'react';

const faqs = [
  {
    question: "How often should I schedule pest control?",
    answer: "We recommend quarterly treatments for most homes, but the frequency may vary based on your specific situation and pest problems."
  },
  {
    question: "Are your treatments safe for pets?",
    answer: "Yes, we use pet-friendly treatments that are safe for your family and pets when used as directed. We'll provide specific safety instructions for each treatment."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency pest control services for urgent situations."
  },
  {
    question: "What areas do you service?",
    answer: "We service residential and commercial properties throughout the metropolitan area. Contact us for specific coverage details."
  }
];

export const ServiceFAQ = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-dark-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white">
              {faq.question}
            </h3>
            <p className="text-dark-600 dark:text-dark-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};