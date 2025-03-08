
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, LogOut, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'Academy', path: '/academy' },
    { name: 'Mission', path: '/#mission' },
  ];

  const navClasses = cn(
    'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <Shield className="h-8 w-8 text-guardian-600" />
            <span className="font-bold text-xl text-guardian-800">Guardian IO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-guardian-700 hover:text-guardian-900 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-l border-guardian-200 h-6" />
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-guardian-100 overflow-hidden">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-guardian-200 text-guardian-700">
                        {user?.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-guardian-600 capitalize">{user?.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    to="/dashboard"
                    className="px-4 py-2 rounded-md bg-guardian-100 text-guardian-700 hover:bg-guardian-200 transition-colors font-medium"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded-md hover:bg-guardian-100 text-guardian-700 transition-colors"
                    aria-label="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/auth"
                  className="px-4 py-2 rounded-md hover:bg-guardian-100 text-guardian-700 transition-colors font-medium"
                >
                  Log In
                </Link>
                <Link
                  to="/auth?tab=register"
                  className="px-4 py-2 rounded-md bg-guardian-600 text-white hover:bg-guardian-700 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-guardian-100 text-guardian-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 inset-x-0 bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="py-2 text-guardian-700 hover:text-guardian-900 font-medium"
            >
              {item.name}
            </Link>
          ))}
          
          <div className="border-t border-guardian-200 my-3" />
          
          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-guardian-100 overflow-hidden">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-guardian-200 text-guardian-700">
                      <User size={16} />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-guardian-600 capitalize">{user?.role}</p>
                </div>
              </div>
              <Link
                to="/dashboard"
                className="py-2 px-4 rounded-md bg-guardian-100 text-guardian-700 hover:bg-guardian-200 transition-colors font-medium text-center mb-2"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="py-2 px-4 rounded-md border border-guardian-200 text-guardian-700 hover:bg-guardian-100 transition-colors font-medium w-full flex items-center justify-center gap-2"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth"
                className="py-2 px-4 rounded-md bg-guardian-100 text-guardian-700 hover:bg-guardian-200 transition-colors font-medium text-center mb-2"
              >
                Log In
              </Link>
              <Link
                to="/auth?tab=register"
                className="py-2 px-4 rounded-md bg-guardian-600 text-white hover:bg-guardian-700 transition-colors font-medium text-center"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
