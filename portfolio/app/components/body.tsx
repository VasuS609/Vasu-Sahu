import React, { useState } from 'react';
import { Code, Award, Coffee, Briefcase, Mail, MapPin, Send } from 'lucide-react';

interface BodyProps {
  darkMode: boolean;
  activeSection: string;
}

const Body: React.FC<BodyProps> = ({ darkMode, activeSection }) => {
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
      
      {/* About Section */}
      {activeSection === 'about' && (
        <section id="about" className="mb-16 animate-fadeIn">
          <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                : 'bg-white border border-red-100 hover:shadow-xl hover:border-red-300'
            }`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                darkMode ? 'bg-white/10' : 'bg-red-500'
              }`}>
                <Code className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-white'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                My Journey
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Started coding at 15, fell in love with building things that solve real problems. Now I specialize in creating full-stack applications with modern technologies, contributing to open source, and mentoring aspiring developers.
              </p>
            </div>

            <div className={`p-6 rounded-xl transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                : 'bg-white border border-red-100 hover:shadow-xl hover:border-red-300'
            }`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                darkMode ? 'bg-white/10' : 'bg-red-500'
              }`}>
                <Award className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-white'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                Achievements
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• 500+ contributions on GitHub</li>
                <li>• Winner of 3 hackathons</li>
                <li>• Contributor to 10+ open source projects</li>
                <li>• Mentored 50+ students in web development</li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                : 'bg-white border border-red-100 hover:shadow-xl hover:border-red-300'
            }`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                darkMode ? 'bg-white/10' : 'bg-red-500'
              }`}>
                <Coffee className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-white'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                When I'm Not Coding
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                You'll find me exploring design trends, writing technical blogs, contributing to open source communities, or experimenting with new technologies. I believe in continuous learning and sharing knowledge.
              </p>
            </div>

            <div className={`p-6 rounded-xl transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                : 'bg-white border border-red-100 hover:shadow-xl hover:border-red-300'
            }`}>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                What Drives Me
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Building products that improve people's lives. Whether it's a simple tool that saves time or a complex platform that solves business problems, I'm passionate about creating meaningful digital experiences.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section id="projects" className="mb-16 animate-fadeIn">
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
              I'm currently curating my best projects to showcase here. Each will include live demos, source code, and detailed case studies. Stay tuned!
            </p>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section id="contact" className="mb-16 animate-fadeIn">
          <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                Let's Work Together
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Mail className="w-5 h-5" />
                  <span>vasu.developer@example.com</span>
                </div>
                <div className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <MapPin className="w-5 h-5" />
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white border border-red-100'
            }`}>
              <div className="mb-4">
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-white/5 border border-white/10 text-white focus:border-white/30' 
                      : 'bg-gray-50 border border-gray-200 text-black focus:border-red-500'
                  } focus:outline-none`}
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-white/5 border border-white/10 text-white focus:border-white/30' 
                      : 'bg-gray-50 border border-gray-200 text-black focus:border-red-500'
                  } focus:outline-none`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-white/5 border border-white/10 text-white focus:border-white/30' 
                      : 'bg-gray-50 border border-gray-200 text-black focus:border-red-500'
                  } focus:outline-none resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                  darkMode 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Skills Section - Only show on home */}
      {activeSection === 'home' && (
        <div className="flex flex-col gap-6">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            Technical Skills
          </h2>
          
          {/* Programming Languages */}
          <details className={`group transition-all duration-300 rounded-lg border ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:bg-white/10' 
              : 'bg-white border-red-100 hover:shadow-xl hover:border-red-300'
          }`}>
            <summary className={`cursor-pointer text-lg font-semibold p-5 transition-colors duration-150 flex items-center justify-between ${
              darkMode ? 'hover:bg-white/5' : 'hover:bg-red-50'
            }`}>
              Programming Languages
              <span className={`text-sm group-open:rotate-180 transition-transform duration-200 ${
                darkMode ? 'text-gray-400' : 'text-red-400'
              }`}>▼</span>
            </summary>
            <div className={`px-5 pb-5 border-t ${darkMode ? 'border-white/10' : 'border-red-100'}`}>
              <div className="flex flex-wrap gap-2 pt-4">
                {['TypeScript', 'JavaScript', 'C', 'C++'].map((lang, idx) => (
                  <span key={idx} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    darkMode ? 'bg-white/10 text-white' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>{lang}</span>
                ))}
              </div>
            </div>
          </details>

          {/* Frontend */}
          <details className={`group transition-all duration-300 rounded-lg border ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:bg-white/10' 
              : 'bg-white border-red-100 hover:shadow-xl hover:border-red-300'
          }`}>
            <summary className={`cursor-pointer text-lg font-semibold p-5 transition-colors duration-150 flex items-center justify-between ${
              darkMode ? 'hover:bg-white/5' : 'hover:bg-red-50'
            }`}>
              Frontend Development
              <span className={`text-sm group-open:rotate-180 transition-transform duration-200 ${
                darkMode ? 'text-gray-400' : 'text-red-400'
              }`}>▼</span>
            </summary>
            <div className={`px-5 pb-5 border-t ${darkMode ? 'border-white/10' : 'border-red-100'}`}>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Next.js', 'React', 'TailwindCSS', 'shadCN UI', 'GitHub', 'Version Control', 'ESLint'].map((tech, idx) => (
                  <span key={idx} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    darkMode ? 'bg-white/10 text-white' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>{tech}</span>
                ))}
              </div>
            </div>
          </details>

          {/* Backend */}
          <details className={`group transition-all duration-300 rounded-lg border ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:bg-white/10' 
              : 'bg-white border-red-100 hover:shadow-xl hover:border-red-300'
          }`}>
            <summary className={`cursor-pointer text-lg font-semibold p-5 transition-colors duration-150 flex items-center justify-between ${
              darkMode ? 'hover:bg-white/5' : 'hover:bg-red-50'
            }`}>
              Backend Development
              <span className={`text-sm group-open:rotate-180 transition-transform duration-200 ${
                darkMode ? 'text-gray-400' : 'text-red-400'
              }`}>▼</span>
            </summary>
            <div className={`px-5 pb-5 border-t ${darkMode ? 'border-white/10' : 'border-red-100'}`}>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Node.js', 'Express.js', 'HTTP', 'REST APIs', 'API', 'JWT', 'OAuth', 'NEXT-Auth', 'SHA256', 'CORS', 'WebSocket'].map((tech, idx) => (
                  <span key={idx} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    darkMode ? 'bg-white/10 text-white' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>{tech}</span>
                ))}
              </div>
            </div>
          </details>

          {/* Database */}
          <details className={`group transition-all duration-300 rounded-lg border ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:bg-white/10' 
              : 'bg-white border-red-100 hover:shadow-xl hover:border-red-300'
          }`}>
            <summary className={`cursor-pointer text-lg font-semibold p-5 transition-colors duration-150 flex items-center justify-between ${
              darkMode ? 'hover:bg-white/5' : 'hover:bg-red-50'
            }`}>
              Database Management
              <span className={`text-sm group-open:rotate-180 transition-transform duration-200 ${
                darkMode ? 'text-gray-400' : 'text-red-400'
              }`}>▼</span>
            </summary>
            <div className={`px-5 pb-5 border-t ${darkMode ? 'border-white/10' : 'border-red-100'}`}>
              <div className="flex flex-wrap gap-2 pt-4">
                {['MongoDB', 'PostgreSQL', 'MySQL', 'Neon DB'].map((db, idx) => (
                  <span key={idx} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    darkMode ? 'bg-white/10 text-white' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>{db}</span>
                ))}
              </div>
            </div>
          </details>

          {/* DevOps */}
          <details className={`group transition-all duration-300 rounded-lg border ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:bg-white/10' 
              : 'bg-white border-red-100 hover:shadow-xl hover:border-red-300'
          }`}>
            <summary className={`cursor-pointer text-lg font-semibold p-5 transition-colors duration-150 flex items-center justify-between ${
              darkMode ? 'hover:bg-white/5' : 'hover:bg-red-50'
            }`}>
              DevOps & Cloud
              <span className={`text-sm group-open:rotate-180 transition-transform duration-200 ${
                darkMode ? 'text-gray-400' : 'text-red-400'
              }`}>▼</span>
            </summary>
            <div className={`px-5 pb-5 border-t ${darkMode ? 'border-white/10' : 'border-red-100'}`}>
              <div className="flex flex-wrap gap-2 pt-4">
                {['AWS', 'Azure', 'DigitalOcean', 'Ubuntu', 'Docker', 'GitHub', 'GitLab', 'HTTP', 'SSH', 'Vercel', 'Kubernetes'].map((tool, idx) => (
                  <span key={idx} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    darkMode ? 'bg-white/10 text-white' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>{tool}</span>
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