import React from 'react';
import { Link } from 'react-router-dom';
import { Bug, Menu, X, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { LoginModal } from '../auth/LoginModal';
import { useLoginModal } from '../../hooks/useLoginModal';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useLoginModal();

  const handleSchedule = () => {
    navigate('/onboarding');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg border-b border-dark-200/20 dark:border-dark-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bug className="w-8 h-8 text-mint-500" />
            <span className="text-xl font-bold">Grinnage Extermination</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-dark-600 hover:text-mint-500 transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-dark-600 hover:text-mint-500 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-dark-600 hover:text-mint-500 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <button 
              onClick={openModal}
              className="flex items-center px-4 py-2 text-mint-500 hover:text-mint-600 transition-colors"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </button>
            <button 
              onClick={handleSchedule}
              className="px-6 py-2 bg-mint-500 text-white rounded-lg hover:bg-mint-600 transition-colors"
            >
              Schedule Service
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/services" className="block px-3 py-2 text-dark-600 hover:text-mint-500">
              Services
            </Link>
            <Link to="/about" className="block px-3 py-2 text-dark-600 hover:text-mint-500">
              About
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-dark-600 hover:text-mint-500">
              Contact
            </Link>
            <button
              onClick={openModal}
              className="flex items-center w-full px-3 py-2 text-dark-600 hover:text-mint-500"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </button>
            <div className="px-3 py-2">
              <ThemeToggle />
            </div>
            <button 
              onClick={handleSchedule}
              className="w-full px-6 py-2 bg-mint-500 text-white rounded-lg hover:bg-mint-600 transition-colors"
            >
              Schedule Service
            </button>
          </div>
        </div>
      )}

      <LoginModal isOpen={isOpen} onClose={closeModal} />
    </header>
  );
};