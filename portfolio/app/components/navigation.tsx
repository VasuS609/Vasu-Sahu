import React from 'react';
import pfp from './hd.png'; // or '../assets/hd.png' depending on your folder structure

const Navigation = () => {
  return (
    <div >
      <header className='flex items-center justify-center '>
        <div className=' text-center '>
          <h1 className='mt-20 text-5xl font-black shadow-2xl shadow-amber-200 relative'>
            Hi, I'm Vasu 👺
          </h1>
          <p className='mt-10 font-bold text-2xl'>
            Coding Enthusiast, Open Source Contributor
          </p>
          <p className='mt-2 text-gray-600'>
            WebDev • Web3 • DevOps
          </p> 
        </div>
        <img 
          src={typeof pfp === 'string' ? pfp : pfp.src} 
          alt="profile picture" 
          className='mt-8 ml-20 w-30 h-30 rounded-full object-cover'
        />
      </header>
      <section>
      <h4 className='mt-15 flex justify-center font-semibold font-stretch-semi-condensed'>
        <a href="/">Home</a>
        <a className='ml-10' href="/about">About</a>
        <a className='ml-10' href="/projects">Projects</a>
        <a className='ml-10' href="/contact">Contact</a>
         </h4>
         </section>
    </div>
  );
};

export default Navigation;