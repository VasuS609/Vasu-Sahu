"use client";

import React from "react";
import Image from "next/image";
import projectImg from "./img.jpg"; 
import projectImg2 from "./img2.png"

interface ProjectsProps {
  darkMode?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode = true }) => {
  return (
    <div
      className={` text-white rounded-xl`}>
      <section id="projects" className="mb-16">
        <div className="p-6 rounded-xl text-center bg-white/5 border border-white/10">
          <h3 className="text-2xl font-bold mb-3">Zenora AI  <a href="https://github.com/VasuS609/Zenora" target="_blank" className="text-amber-700 text-xs "> srcCode</a></h3>

          <div className="max-w-md mx-auto">
            <a href="https://zenoraai.vercel.app/" target="_blank">
              <Image
                src={projectImg}
                alt="Zenora AI" height={200} width={200}
                className="rounded-lg mx-auto"
              />
             
              <p> </p>
            </a>
          </div>
        </div>
      </section>

       <section id="projects" className="mb-16">
        <div className="p-6 rounded-xl text-center bg-white/5 border border-white/10">
          <h3 className="text-2xl font-bold mb-3">Personality Quiz  <a href="https://github.com/VasuS609/Sweets" target="_blank" className="text-amber-700 text-xs "> srcCode</a></h3>

          <div className="max-w-md mx-auto">
            <a href="https://zenoraai.vercel.app/" target="_blank">
              <Image
                src={projectImg2}
                alt="Zenora AI" height={200} width={200}
                className="rounded-lg mx-auto"
              />
             
              <p> </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
