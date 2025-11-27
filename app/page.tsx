'use client';

import React, { useState } from 'react';
import { Home, Briefcase } from 'lucide-react';
import Header from './components/Header';
import Body from './components/body';
import Footer from './components/footer';

const PortfolioPage = () => {
  // Track which section is currently active
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen border-t border-t-gray-800  text-gray-900">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
<div className='sm:w-150 mx-auto'>


      <Header />
      
      <Body activeSection={activeSection} />
      
      <Footer />
</div>
      {/* Btm Nav */}
      <nav className="sticky bottom-1 flex shadow-2xl  z-50 backdrop-blur-sm border-t border-gray-800">
        <div className="w-md mx-auto px-4">
          <div className="flex items-center justify-around py-1">
            
            {/* Home Btn */}
            <button
              onClick={() => setActiveSection('home')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                activeSection === 'home'
                  ? 'text-white bg-white/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-xs font-medium">Home</span>
            </button>


            {/* Project Btn */}
            <button
              onClick={() => setActiveSection('projects')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                activeSection === 'projects'
                  ? 'text-white bg-white/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span className="text-xs font-medium">Projects</span>
            </button>

            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PortfolioPage;