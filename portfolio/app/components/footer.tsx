import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-red-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          
          <nav className="flex gap-8 font-medium text-gray-300 transition-colors">
           <Link href="/" className='hover:text-teal-300' >
              Home
            </Link>
            <Link href="/about" className='hover:text-teal-300' >
              About
            </Link>
            <Link href="/projects" className='hover:text-teal-300'>
              Projects
            </Link>
            <Link href="/contact" className=' hover:text-teal-300'>
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-red-100 text-center text-sm text-gray-500 hover:text-">
          © {new Date().getFullYear()} Vasu. Crafted with passion and coffee ☕
        </div>
      </div>
    </footer>
  );
};

export default Footer;
