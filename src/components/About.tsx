import React from 'react';
import { Code, Cpu, Database } from 'lucide-react';

const skills = [
  { name: 'Machine Learning', icon: <Code className="text-blue-600 dark:text-blue-400" size={20} /> },
  { name: 'Web Development', icon: <Cpu className="text-blue-600 dark:text-blue-400" size={20} /> },
  { name: 'Data Science', icon: <Database className="text-blue-600 dark:text-blue-400" size={20} /> },
  { name: 'Digital IC', icon: <Cpu className="text-blue-600 dark:text-blue-400" size={20} /> },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <img 
                  src="/images/Gary.jpg" 
                  alt="Gary Lee" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  I’m an undergraduate student in Electrical Engineering with a passion for solving complex problems through technology.  
                  My academic background has equipped me with a strong foundation in both electrical engineering 
                  and computer science principles, allowing me to approach challenges from multiple perspectives.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My recent work focuses on spoken language modeling and speech-based interfaces, 
                  and I’m particularly interested in applying AI to fields like education technology, 
                  data science, and human-computer interaction.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              My Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-md flex items-center gap-3 transform transition-transform duration-300 hover:-translate-y-1"
                >
                  {skill.icon}
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#experience"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View My Experience
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;