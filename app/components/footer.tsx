import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=""> 
     <div className="mt-6 mb-8 pt-6 border-t border-red-100 text-center text-sm text-gray-200 hover:text-">
          © {new Date().getFullYear()} Vasu. Crafted with passion and coffee.
        </div>
      <div className="">
       
      </div>
    </footer>
  );
};

export default Footer;
