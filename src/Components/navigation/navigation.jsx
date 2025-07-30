// Navigation.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="logo.png" alt="HatuaTech Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm px-5 py-2.5 rounded-xl shadow-md hover:from-slate-700 hover:to-slate-800 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-700"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-inner">
          <div className="px-6 py-4 space-y-3">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left text-sm font-medium py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm px-4 py-2.5 rounded-xl shadow hover:from-slate-700 hover:to-slate-800 transition-all text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navigation;
