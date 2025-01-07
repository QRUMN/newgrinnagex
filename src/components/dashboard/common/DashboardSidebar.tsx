import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, CreditCard, FileText, Settings } from 'lucide-react';

const navItems = [
  { icon: <Home className="w-5 h-5" />, label: 'Overview', path: '/dashboard' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Appointments', path: '/dashboard/appointments' },
  { icon: <CreditCard className="w-5 h-5" />, label: 'Billing', path: '/dashboard/billing' },
  { icon: <FileText className="w-5 h-5" />, label: 'Documents', path: '/dashboard/documents' },
  { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/dashboard/settings' }
];

export const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-dark-800 border-r border-gray-200 dark:border-dark-700 min-h-screen">
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center px-4 py-3 rounded-lg text-sm font-medium
              ${isActive 
                ? 'bg-mint-50 text-mint-500 dark:bg-mint-900/20 dark:text-mint-400' 
                : 'text-dark-600 hover:bg-gray-50 dark:text-dark-400 dark:hover:bg-dark-700'
              }
            `}
            end={item.path === '/dashboard'}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};