import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-dark-900 dark:text-white">
        Contact Information
      </h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-[#56e39f] mr-3" />
          <div>
            <p className="font-medium text-dark-900 dark:text-white">Phone</p>
            <p className="text-dark-600 dark:text-dark-300">1-800-PEST-CONTROL</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 text-[#56e39f] mr-3" />
          <div>
            <p className="font-medium text-dark-900 dark:text-white">Email</p>
            <p className="text-dark-600 dark:text-dark-300">contact@grinnage-extermination.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-[#56e39f] mr-3" />
          <div>
            <p className="font-medium text-dark-900 dark:text-white">Address</p>
            <p className="text-dark-600 dark:text-dark-300">123 Pest Control Street</p>
            <p className="text-dark-600 dark:text-dark-300">City, State 12345</p>
          </div>
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-[#56e39f] mr-3" />
          <div>
            <p className="font-medium text-dark-900 dark:text-white">Hours</p>
            <p className="text-dark-600 dark:text-dark-300">Mon-Fri: 8am - 6pm</p>
            <p className="text-dark-600 dark:text-dark-300">24/7 Emergency Service Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};