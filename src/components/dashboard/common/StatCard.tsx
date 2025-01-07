import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

export const StatCard = ({ label, value, icon, description }: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-dark-800 p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-sm text-dark-500 dark:text-dark-400">{label}</p>
          <p className="text-xl font-semibold text-dark-900 dark:text-white mt-1">{value}</p>
        </div>
        {icon}
      </div>
      {description && (
        <p className="text-sm text-dark-600 dark:text-dark-300">{description}</p>
      )}
    </div>
  );
};