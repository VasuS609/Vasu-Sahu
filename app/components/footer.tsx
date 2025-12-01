"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className=""> 
     <div className="mt-6 mb-8 pt-6 border-t border-red-100 text-center text-sm text-gray-200 hover:text-">
          © {new Date().getFullYear()} Vasu. Crafted with passion and coffee. <span className='text-amber-700 cursor-pointer'>
            <a href="https://github.com/VasuS609/Vasu-Sahu" target='_blank'>srcCode</a>
            </span>
        </div>
    
    </footer>
  );
};

export default Footer;
