import React from 'react';

export const ContactMap = () => {
  return (
    <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-dark-900 dark:text-white">
        Our Location
      </h2>
      <div className="aspect-video bg-gray-100 dark:bg-dark-700 rounded-lg">
        {/* Map iframe would go here - placeholder for now */}
        <div className="w-full h-full flex items-center justify-center text-dark-600 dark:text-dark-300">
          Map View
        </div>
      </div>
    </div>
  );
};