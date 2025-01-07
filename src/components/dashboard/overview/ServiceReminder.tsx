import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServiceReminder = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-mint-50 dark:bg-mint-900/20 border border-mint-200 dark:border-mint-800 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-mint-500" />
          <div>
            <h3 className="font-medium text-dark-900 dark:text-white">Upcoming Service</h3>
            <p className="text-sm text-dark-600 dark:text-dark-400">Monthly inspection on March 15</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/dashboard/appointments')}
          className="flex items-center text-mint-500 hover:text-mint-600 text-sm font-medium"
        >
          View Schedule
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};