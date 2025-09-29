import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`mt-16 border-t ${
      darkMode ? 'border-gray-800' : 'border-red-100'
    }`}>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
            Vasu<span className={darkMode ? 'text-white' : 'text-red-500'}>.</span>
          </div>
          <nav className='flex gap-8'>
            <a 
              href="/" 
              className={`font-medium transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Home
            </a>
            <a 
              href="/about" 
              className={`font-medium transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              About
            </a>
            <a 
              href="/projects" 
              className={`font-medium transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Projects
            </a>
            <a 
              href="/contact" 
              className={`font-medium transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Contact
            </a>
          </nav>
        </div>
        <div className={`mt-6 pt-6 border-t text-center text-sm ${
          darkMode ? 'border-gray-800 text-gray-500' : 'border-red-100 text-gray-500'
        }`}>
          © {new Date().getFullYear()} Vasu. Crafted with passion and coffee ☕
        </div>
      </div>
    </footer>
  );
};

export default Footer;