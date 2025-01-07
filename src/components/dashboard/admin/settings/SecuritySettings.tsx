import React from 'react';
import { Shield, Key, Lock } from 'lucide-react';
import { DashboardCard } from '../../common/DashboardCard';

export const SecuritySettings = () => {
  return (
    <DashboardCard title="Security Settings">
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
          <div className="flex items-center space-x-3">
            <Key className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-500">Require 2FA for all admin users</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-[#56e39f] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#56e39f]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium">Password Policy</p>
              <p className="text-sm text-gray-500">Set minimum password requirements</p>
            </div>
          </div>
          <select className="rounded-lg border border-gray-300 dark:border-dark-700 focus:ring-2 focus:ring-[#56e39f]">
            <option value="medium">Medium Security</option>
            <option value="high">High Security</option>
            <option value="custom">Custom Policy</option>
          </select>
        </div>
      </div>
    </DashboardCard>
  );
};