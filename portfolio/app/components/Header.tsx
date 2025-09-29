import React, { useState, useEffect } from 'react';
import { MapPin, Clock, FileText, Github, Linkedin, Twitter } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false  // i do love 24 hour format 😅
      });
      setCurrentTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900/95' : 'bg-black/95'
      } backdrop-blur-sm border-b ${
        darkMode ? 'border-gray-800' : 'border-red-500/20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-red-400'}`}>
              <MapPin className="w-4 h-4" />
              <span>Earth</span>
            </div>
            <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-red-400'}`}>
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>
          </div>
          <a 
            href="/resume.pdf" 
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md transition-all duration-200 ${
              darkMode 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span className="font-medium">Resume</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <header className='flex items-center justify-center py-32 pt-36 relative'>
        <div className='text-center max-w-3xl px-4 relative z-10'>
          <div className={`inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold ${
            darkMode 
              ? 'bg-white/10 text-white' 
              : 'bg-red-500/10 text-red-600 border border-red-500/20'
          }`}>
            Full Stack Developer
          </div>
          <h1 className={`text-6xl md:text-7xl font-black mb-6 transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Hi, I'm <span className={darkMode ? 'text-white' : 'text-red-500'}>Vasu</span>
          </h1>
          <p className={`text-xl md:text-2xl font-medium mb-6 transition-colors duration-500 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Building digital experiences that make a difference
          </p>
          <p className={`text-base mb-8 transition-colors duration-500 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            WebDev • Web3 • DevOps • Open Source Contributor • Graphic Designer
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com/VasuS609" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-black hover:bg-gray-800 text-white'
              }`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vasu-sahu-s2ep7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-black hover:bg-gray-800 text-white'
              }`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/_Vasu_609" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-black hover:bg-gray-800 text-white'
              }`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;