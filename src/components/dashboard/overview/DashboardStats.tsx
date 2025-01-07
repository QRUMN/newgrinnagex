import React from 'react';
import { Calendar, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { StatCard } from '../common/StatCard';

export const DashboardStats = () => {
  const stats = [
    {
      label: "Next Service",
      value: "Mar 15",
      icon: <Calendar className="w-6 h-6 text-mint-400" />,
      description: "Scheduled inspection"
    },
    {
      label: "Active Issues",
      value: "2",
      icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
      description: "Pending resolution"
    },
    {
      label: "Last Service",
      value: "Feb 28",
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      description: "Completed"
    },
    {
      label: "Treatment Status",
      value: "Active",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      description: "Protection active"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          {...stat}
        />
      ))}
    </div>
  );
};