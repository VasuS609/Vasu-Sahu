import React from 'react';


const Navigation = () => {
  return (
    <div >
      <header className='flex items-center justify-center '>
        <div className=' text-center '>
          <h1 className='mt-20 text-5xl font-black shadow-2xl shadow-amber-200 relative'>
            Hi, I'm Vasu 👺
          </h1>
          <p className='mt-10 font-bold text-2xl'>
            Coding Enthusiast, Open Source Contributor, <br/> Graphic Designer
          </p>
          <p className='mt-2 text-gray-600'>
            WebDev • Web3 • DevOps
          </p> 
        </div>
       
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