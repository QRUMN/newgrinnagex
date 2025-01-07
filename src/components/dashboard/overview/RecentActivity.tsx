import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Activity {
  id: string;
  type: 'service' | 'issue' | 'payment';
  title: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'scheduled';
}

export const RecentActivity = () => {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'service',
      title: 'Monthly inspection completed',
      timestamp: '2024-02-28',
      status: 'completed'
    },
    {
      id: '2',
      type: 'payment',
      title: 'March service payment processed',
      timestamp: '2024-02-15',
      status: 'completed'
    },
    {
      id: '3',
      type: 'issue',
      title: 'New issue reported: Kitchen',
      timestamp: '2024-02-01',
      status: 'pending'
    }
  ];

  const getIcon = (type: Activity['type'], status: Activity['status']) => {
    if (status === 'completed') return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (status === 'pending') return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    return <Clock className="w-5 h-5 text-mint-500" />;
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b dark:border-dark-700">
        <h3 className="font-medium text-dark-900 dark:text-white">Recent Activity</h3>
      </div>
      <div className="divide-y dark:divide-dark-700">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getIcon(activity.type, activity.status)}
              <div>
                <p className="font-medium text-dark-900 dark:text-white">{activity.title}</p>
                <p className="text-sm text-dark-500">{activity.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};