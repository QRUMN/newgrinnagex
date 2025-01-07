import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Settings } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';
import { ThemeToggle } from '../../layout/ThemeToggle';

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-dark-900 dark:text-white">
              Welcome, {user?.fullName}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => navigate('/dashboard/settings')}
              className="p-2 text-dark-500 hover:text-dark-700 dark:text-dark-400 dark:hover:text-dark-200"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 text-dark-500 hover:text-dark-700 dark:text-dark-400 dark:hover:text-dark-200"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};