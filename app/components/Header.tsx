"use client";
import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  FileText,
} from "lucide-react";
import { Matrix } from "@/components/ui/matrix";
import NavigationBar from "./ui/NavigationBar";
import { LayoutTextFlip } from "./ui/layout-text-flip";

const Header = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-48 relative">
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500    border-gray-800
      }`}
      >
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

      <div>
        <NavigationBar />
      </div>

      {/* Hero Section */}
      <header className="flex items-center justify-center  pt-15 relative overflow-hidden">
        <div className="text-center max-w-3xl px-4 relative z-10">
          <div
            className={`inline-block mb-10 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer hover:bg-white/5 bg-white/10 text-white
              }`}
          >
            2nd Year CSE Student
          </div>
          <h1
            className={`text-6xl md:text-7xl font-black mb-6 transition-colors duration-500 
           text-white
          `}
          >
            Hi, I&apos;m <span className={"text-teal-300"}>Vasu</span>
            
          </h1>

          <p
            className={`text-lg mb-15 transition-colors duration-500  text-gray-200 
          `}
          >
            <LayoutTextFlip 
              text={"I'm "}
              words={[
                "MERN Stack Learner",
                "OpenSource Contributor",
                "Graphic Designer",
                "C++ & DSA Practitioner",
              ]}
            />
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/VasuS609"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 
              bg-white/10 hover:bg-white/20 text-white                 
              `}
            >
              <div className="group relative">
                <button>
                  <svg
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 hover:scale-105 duration-200 hover:stroke-gray-500"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </button>
                <span
                  className="absolute -top-11 left-[50%] -translate-x-[50%]   z-20 origin-left scale-0 px-3 rounded-lg border   border-gray-100  py-1 text-sm font-bold   shadow-md transition-all duration-300 ease-in-out   group-hover:scale-100">
                  GitHub<span></span>
                </span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/vasu-sahu-s2ep7/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 
               bg-white/10 hover:bg-white/20 text-white`}
            >
              <div className="group relative">
                <button>
                  <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 hover:scale-105 duration-200 hover:stroke-gray-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
                <span className="absolute -top-11 left-[50%] -translate-x-[50%]   z-20 origin-left scale-0 px-3 rounded-lg border   border-gray-100  py-1 text-sm font-bold   shadow-md transition-all duration-300 ease-in-out   group-hover:scale-100">
                  LinkedIn
                </span>
              </div>
            </a>
            <a
              href="https://x.com/_Vasu_609"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 
               bg-white/10 hover:bg-white/20 text-white`}
            >
              <div className="group relative">
                <button>
                  <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 hover:scale-105 duration-200 hover:stroke-gray-500"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </button>
                <span className="absolute -top-11 left-[50%] -translate-x-[50%]   z-20 origin-left scale-0 px-3 rounded-lg border   border-gray-100  py-1 text-sm font-bold   shadow-md transition-all duration-300 ease-in-out   group-hover:scale-100">
                  Twitter
                </span>
              </div>
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
