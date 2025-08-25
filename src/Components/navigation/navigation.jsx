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
  ];

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-slate-200/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center">
        {/* Logo with Accent Background */}
       <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="logo.jpg" 
            alt="HatuaTech Logo" 
            className="h-12 lg:h-15 w-auto" 
          />
        
        </Link>
      </div>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                location.pathname === item.path
                  ? 'text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#fc6506] hover:bg-[#fc6506]/85 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Navigation - Simplified */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile CTA Button */}
          
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-[#fc6506] hover:bg-[#fc6506]/85 text-white rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-slate-900 bg-amber-50 font-semibold border-l-4 border-[#fc6506]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Menu Footer */}
            <div className="pt-4 mt-4 border-t border-slate-200">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full bg-[#fc6506] hover:bg-[#fc6506]/85 text-white font-semibold px-4 py-3 rounded-xl shadow-md transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;