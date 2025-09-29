'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Home, User, Briefcase, Mail } from 'lucide-react';
import Header from './components/Header';
import Body from './components/body';
import Footer from './components/footer';


const PortfolioPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Bottom Navigation Component
  const BottomNav = () => {
    const navItems = [
      { id: 'home', icon: Home, label: 'Home' },
      { id: 'about', icon: User, label: 'About' },
      { id: 'projects', icon: Briefcase, label: 'Projects' },
      { id: 'Contact', icon: Mail, label: 'Contact' },
    ];

    return (
      <nav className={`fixed bottom-0 left-0 right-0 z-50 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900/95' : 'bg-black/95'
      } backdrop-blur-sm border-t ${
        darkMode ? 'border-gray-800' : 'border-red-500/20'
      }`}>
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? darkMode
                      ? 'text-white bg-white/10'
                      : 'text-red-500 bg-red-500/10'
                    : darkMode
                    ? 'text-gray-400 hover:text-white'
                    : 'text-red-300 hover:text-red-500'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? 'text-gray-400 hover:text-white'
                  : 'text-red-300 hover:text-red-500'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span className="text-xs font-medium">Theme</span>
            </button>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className={`w-full h-full ${
          darkMode 
            ? 'bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)]'
        } bg-[size:40px_40px]`}></div>
      </div>

      <Header darkMode={darkMode} />
      <Body darkMode={darkMode} activeSection={activeSection} />
      <Footer darkMode={darkMode} />
      <BottomNav />
    
    </div>
  );
};

export default PortfolioPage;