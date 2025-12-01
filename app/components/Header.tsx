"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, FileText, Github, Linkedin, Twitter} from 'lucide-react';
import { Matrix} from "@/components/ui/matrix"


const Header = () => {
  


  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      setCurrentTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='pb-48'>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500    border-gray-800
      }`}>
        <div className="max-w-7xl mx-auto w-150 px-4 py-3 flex items-center backdrop-blur-sm justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 text-gray-300 `}>
              <MapPin className="w-4 h-4" />
              <span>Earth</span>
            </div>
            <div className={`flex items-center gap-2 text-gray-300`}>
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>
          </div>
          <a 
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md transition-all duration-200
                bg-white/10 hover:bg-white/20 text-white                
            }`}
          >
            
            <FileText className="w-4 h-4" />
         
           </a>
        </div>
      </div>

      {/* Hero Section */}
      <header className='flex items-center justify-center  pt-40 relative overflow-hidden'>
        <div className='text-center max-w-3xl px-4 relative z-10'>
          <div className={`inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white
              }`}>
            2nd Year CSE Student
          </div>
          <h1 className={`text-6xl md:text-7xl font-black mb-6 transition-colors duration-500 
           text-white
          `}>
            Hi, I&apos;m <span className={'text-teal-300'}  >Vasu</span>
          </h1>
         
          <p className={`text-lg mb-8 transition-colors duration-500  text-gray-200 
          `}>
            MERN Stack Learner • Open Source Enthusiast
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com/VasuS609"
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 
              bg-white/10 hover:bg-white/20 text-white                 
              `}
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vasu-sahu-s2ep7/"
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 
               bg-white/10 hover:bg-white/20 text-white`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/_Vasu_609"
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 
               bg-white/10 hover:bg-white/20 text-white`}
            >
              <Twitter className="w-5 h-5" />
            </a>
            
          
            
          </div>
      
        </div> 
        
      </header>
      <div className="relative pt-10 mt-25 z-0 shadow-cyan-400">
                <Matrix rows={15} cols={35} size={7} gap={1} ariaLabel="..." />
            </div>
        
    </div>
  );
};

export default Header;