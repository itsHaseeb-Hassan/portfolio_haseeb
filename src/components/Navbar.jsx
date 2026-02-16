import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ProfileImage from "../assets/profile.jpg"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className={`bg-gray-900 p-4 sticky top-0 z-50 shadow-lg border-b border-sky-600 transition-all duration-300 ${
      isScrolled ? 'bg-opacity-95 backdrop-blur-md' : ''
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => navigate('/')}
        >
         
          <h1 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500 group-hover:from-purple-500 group-hover:to-sky-500 transition-all duration-300">
            Portfolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  nav-link text-lg relative px-3 py-2 transition-all duration-300
                  hover:text-purple-500 hover:scale-110 hover:rotate-3
                  ${isActive ? 'text-purple-500 after:w-full after:left-0' : 'text-white'}
                `}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-sky-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <ul className="bg-gray-800 rounded-lg p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `
                  block px-4 py-2 rounded-lg transition-all duration-300
                  hover:bg-gradient-to-r hover:from-sky-500 hover:to-purple-500 hover:text-white
                  ${isActive ? 'bg-gradient-to-r from-sky-500 to-purple-500 text-white' : 'text-gray-300'}
                `}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;