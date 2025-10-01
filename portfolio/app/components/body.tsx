"use client";
import React, { useState } from 'react';
import { Code, Award, Coffee, Briefcase, Mail, MapPin, Send } from 'lucide-react';

interface BodyProps {
  activeSection: string;
}

const Body: React.FC<BodyProps> = ({ activeSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 pb-24">
      
     

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section id="projects" className="mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>
          <div className="p-12 rounded-xl text-center bg-white/5 border border-white/10">
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <h3 className="text-2xl font-bold mb-3 text-white">Coming Soon</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              I'm currently curating my best projects to showcase here. Each will include live demos, source code, and detailed case studies. Stay tuned!
            </p>
          </div>
        </section>
      )}

     

      {/* Skills Section - Home */}
      {activeSection === 'home' && (
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold mb-4 text-white">Technical Skills</h2>
          
          {/* Programming Languages */}
          <details className="group transition-all duration-300 rounded-lg border bg-white/5 border-white/10 hover:bg-white/10">
            <summary className="cursor-pointer text-lg font-semibold p-5 flex items-center justify-between hover:bg-white/5">
              Programming Languages
              <span className="text-sm group-open:rotate-180 transition-transform duration-200 text-gray-400">▼</span>
            </summary>
            <div className="px-5 pb-5 border-t border-white/10">
              <div className="flex flex-wrap gap-2 pt-4">
                {['TypeScript', 'JavaScript', 'C', 'C++'].map((lang, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-md text-sm font-medium bg-white/10 text-white hover:scale-105 transition-all duration-200">{lang}</span>
                ))}
              </div>
            </div>
          </details>

          {/* Frontend */}
          <details className="group transition-all duration-300 rounded-lg border bg-white/5 border-white/10 hover:bg-white/10">
            <summary className="cursor-pointer text-lg font-semibold p-5 flex items-center justify-between hover:bg-white/5">
              Frontend Development
              <span className="text-sm group-open:rotate-180 transition-transform duration-200 text-gray-400">▼</span>
            </summary>
            <div className="px-5 pb-5 border-t border-white/10">
              <div className="flex flex-wrap gap-2 pt-4">
                {['Next.js', 'React', 'TailwindCSS', 'shadCN UI', 'GitHub', 'Version Control', 'ESLint'].map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-md text-sm font-medium bg-white/10 text-white hover:scale-105 transition-all duration-200">{tech}</span>
                ))}
              </div>
            </div>
          </details>

          {/* Backend */}
          <details className="group transition-all duration-300 rounded-lg border bg-white/5 border-white/10 hover:bg-white/10">
            <summary className="cursor-pointer text-lg font-semibold p-5 flex items-center justify-between hover:bg-white/5">
              Backend Development
              <span className="text-sm group-open:rotate-180 transition-transform duration-200 text-gray-400">▼</span>
            </summary>
            <div className="px-5 pb-5 border-t border-white/10">
              <div className="flex flex-wrap gap-2 pt-4">
                {['Node.js', 'Express.js', 'HTTP', 'REST APIs', 'API', 'JWT', 'OAuth', 'NEXT-Auth', 'SHA256', 'CORS', 'WebSocket'].map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-md text-sm font-medium bg-white/10 text-white hover:scale-105 transition-all duration-200">{tech}</span>
                ))}
              </div>
            </div>
          </details>

          {/* Database */}
          <details className="group transition-all duration-300 rounded-lg border bg-white/5 border-white/10 hover:bg-white/10">
            <summary className="cursor-pointer text-lg font-semibold p-5 flex items-center justify-between hover:bg-white/5">
              Database Management
              <span className="text-sm group-open:rotate-180 transition-transform duration-200 text-gray-400">▼</span>
            </summary>
            <div className="px-5 pb-5 border-t border-white/10">
              <div className="flex flex-wrap gap-2 pt-4">
                {['MongoDB', 'PostgreSQL', 'MySQL', 'Neon DB'].map((db, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-md text-sm font-medium bg-white/10 text-white hover:scale-105 transition-all duration-200">{db}</span>
                ))}
              </div>
            </div>
          </details>

          {/* DevOps */}
          <details className="group transition-all duration-300 rounded-lg border bg-white/5 border-white/10 hover:bg-white/10">
            <summary className="cursor-pointer text-lg font-semibold p-5 flex items-center justify-between hover:bg-white/5">
              DevOps & Cloud
              <span className="text-sm group-open:rotate-180 transition-transform duration-200 text-gray-400">▼</span>
            </summary>
            <div className="px-5 pb-5 border-t border-white/10">
              <div className="flex flex-wrap gap-2 pt-4">
                {['AWS', 'Azure', 'DigitalOcean', 'Ubuntu', 'Docker', 'GitHub', 'GitLab', 'HTTP', 'SSH', 'Vercel', 'Kubernetes'].map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-md text-sm font-medium bg-white/10 text-white hover:scale-105 transition-all duration-200">{tool}</span>
                ))}
              </div>
            </div>
          </details>
        </div>
      )}
    </main>
  );
};

export default Body;
