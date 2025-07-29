// src/Components/Navigation/Navigation.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Solutions', path: 'solutions' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
              <img
                src="logo.png"
                alt="HatuaTech Logo"
                className="h-10 w-auto"
              />
            </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map(item => (
            <button
              key={item.path}
              onClick={() => setCurrentPage(item.path)}
              className={`font-medium transition-colors ${
                currentPage === item.path
                  ? 'text-orange-600'
                  : 'text-slate-700 hover:text-orange-600'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-orange-400 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-800 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-700"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Items */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t mt-2 py-4 px-6 md:hidden">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => {
                  setCurrentPage(item.path);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 font-medium ${
                  currentPage === item.path
                    ? 'text-orange-600'
                    : 'text-slate-700 hover:text-orange-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage('contact');
                setIsMenuOpen(false);
              }}
              className="w-full bg-orange-700 text-white px-4 py-2 mt-2 rounded-md hover:bg-orange-800"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
