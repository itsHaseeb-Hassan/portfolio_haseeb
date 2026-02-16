import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileImage from "../assets/profile.jpg"
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: '#',
      color: 'hover:text-sky-400'
    },
    { 
      name: 'Instagram', 
      icon: '📷', 
      url: '#',
      color: 'hover:text-pink-500'
    },
    { 
      name: 'GitHub', 
      icon: '🐙', 
      url: '#',
      color: 'hover:text-gray-400'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: '#',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <footer className="bg-gray-900 relative overflow-hidden border-t border-gray-800">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-sky-900/10"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center space-x-3 cursor-pointer group mb-4"
              onClick={() => navigate('/')}
            >
              <img 
                src={ProfileImage} 
                alt="My Profile" 
                className="w-12 h-12 rounded-full border-2 border-purple-500 group-hover:border-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"

              />
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
                DarkVibe Studio
              </h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Crafting exceptional digital experiences that push boundaries and inspire. 
              We turn ideas into reality with creativity and cutting-edge technology.
            </p>
            
            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white transition-all duration-300"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <span className="text-purple-400">📍</span>
                <span>123 Creative Street, Digital City, DC 12345</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <span className="text-purple-400">📧</span>
                <a href="mailto:hello@darkvibe.studio" className="hover:text-purple-400 transition-colors">
                  hello@darkvibe.studio
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <span className="text-purple-400">📱</span>
                <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125`}
                  aria-label={social.name}
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} DarkVibe Studio. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Crafted with ❤️ by the DarkVibe Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;