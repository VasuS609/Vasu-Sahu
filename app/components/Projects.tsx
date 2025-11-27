import React from 'react';
import { Briefcase } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <section id="projects" className="mb-16">
      <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
        Projects
      </h2>
      <div className={`p-12 rounded-xl text-center ${
        darkMode 
          ? 'bg-white/5 border border-white/10' 
          : 'bg-white border border-red-100'
      }`}>
        <Briefcase className={`w-16 h-16 mx-auto mb-4 ${
          darkMode ? 'text-gray-600' : 'text-red-300'
        }`} />
        <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
          Coming Soon
        </h3>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-md mx-auto`}>
          I&apos;m currently curating my best projects to showcase here. Each will include live demos, source code, and detailed case studies. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default Projects;