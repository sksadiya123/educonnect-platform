import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, User, Heart, Building2 } from 'lucide-react';
import { UserType } from '../../App';

interface HeaderProps {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

const Header: React.FC<HeaderProps> = ({ userType, setUserType }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const getDashboardPath = () => {
    switch (userType) {
      case 'student': return '/student-dashboard';
      case 'volunteer': return '/volunteer-dashboard';
      case 'organization': return '/organization-dashboard';
      default: return '/';
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">EduConnect</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className={`${
                isActive('/courses') ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition-colors`}
            >
              Courses
            </Link>
            <Link
              to="/community"
              className={`${
                isActive('/community') ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition-colors`}
            >
              Community
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition-colors`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition-colors`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {userType && (
              <Link
                to={getDashboardPath()}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {userType === 'student' && <User className="h-4 w-4" />}
                {userType === 'volunteer' && <Heart className="h-4 w-4" />}
                {userType === 'organization' && <Building2 className="h-4 w-4" />}
                <span className="capitalize">Dashboard</span>
              </Link>
            )}
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/community"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;