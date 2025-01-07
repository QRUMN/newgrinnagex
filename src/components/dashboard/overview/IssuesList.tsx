import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface Issue {
  id: string;
  title: string;
  location: string;
  status: 'active' | 'resolved';
  date: string;
}

export const IssuesList = () => {
  const issues: Issue[] = [
    {
      id: '1',
      title: 'Ant activity in kitchen',
      location: 'Kitchen',
      status: 'active',
      date: '2024-03-01'
    },
    {
      id: '2',
      title: 'Rodent signs in garage',
      location: 'Garage',
      status: 'active',
      date: '2024-03-02'
    }
  ];

  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b dark:border-dark-700">
        <h3 className="font-medium text-dark-900 dark:text-white">Active Issues</h3>
      </div>
      <div className="divide-y dark:divide-dark-700">
        {issues.map((issue) => (
          <div key={issue.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="font-medium text-dark-900 dark:text-white">{issue.title}</p>
                <p className="text-sm text-dark-500">{issue.location} • {issue.date}</p>
              </div>
            </div>
            <span className="text-sm text-yellow-500 font-medium">Active</span>
          </div>
        ))}
      </div>
    </div>
  );
};