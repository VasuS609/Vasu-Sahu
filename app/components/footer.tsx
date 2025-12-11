"use client"
import React from 'react';
import { PixelatedCanvas } from './ui/pixelated-canvas';
import img from "./download.png"
import img2 from "./download2.jpg"
import img3 from "./download3.jpg"

const Footer = () => {
  return (
    <footer className=""> 
    <div className='flex w-[32]  overflow-x-auto gap-4 justify-center'>
    
        <div className="mt-8 flex items-center justify-center flex-shrink-0">
      <PixelatedCanvas
        src={img.src}
        width={300}
        height={300}
        cellSize={3}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.1}
        interactive
        distortionStrength={0.1}
        distortionRadius={200}
        distortionMode="repel"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={1}
        sampleAverage
        className="rounded-xl shadow-lg"
      />
    </div>
        <div className="mt-8 flex items-center justify-center flex-shrink-0">
      <PixelatedCanvas
        src={img2.src}
        width={300}
        height={300}
        cellSize={3}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.1}
        interactive
        distortionStrength={0.1}
        distortionRadius={200}
        distortionMode="repel"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={1}
        sampleAverage
        className="rounded-xl shadow-lg"
      />
    </div>
     <div className="mt-8 flex items-center justify-center flex-shrink-0">
      <PixelatedCanvas
        src={img3.src}
        width={300}
        height={300}
        cellSize={3}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.1}
        interactive
        distortionStrength={0.1}
        distortionRadius={200}
        distortionMode="repel"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={1}
        sampleAverage
        className="rounded-xl shadow-lg"
      />
    </div>


    </div>
     <div className="mt-6 mb-8 pt-6 border-t border-red-100 text-center text-sm text-gray-200 hover:text-">
          © {new Date().getFullYear()} Vasu. Crafted with passion and coffee. <span className='text-amber-700 cursor-pointer'>
            <a href="https://github.com/VasuS609/Vasu-Sahu" target='_blank'>srcCode</a>
            </span>
        </div>
    
    </footer>
  );
};

export default Footer;
