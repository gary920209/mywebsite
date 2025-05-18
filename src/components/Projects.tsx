import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

// Sample projects - replace with your actual projects
const projects = [
  // {
  //   id: 1,
  //   title: 'Smart Home Automation System',
  //   description: 'A comprehensive IoT solution for home automation using Raspberry Pi and custom sensors.',
  //   image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   technologies: ['IoT', 'Python', 'Raspberry Pi', 'MQTT'],
  //   demoLink: '#',
  //   githubLink: '#',
  //   category: 'hardware',
  // },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'ai', name: 'AI & ML' },
  { id: 'hardware', name: 'Hardware' },
];

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 2).map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-600/90 text-white text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="px-2 py-1 bg-gray-800/90 text-white text-xs rounded-full">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 h-12 overflow-hidden">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
          >
            Live Demo
            <ExternalLink size={16} />
          </a>
          
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 text-sm"
          >
            Source Code
            <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Projects
          </h2>
          
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                Explore a selection of my projects that demonstrate my technical skills and problem-solving abilities.
              </p>
              
              <button 
                onClick={() => setIsFilterVisible(!isFilterVisible)}
                className="md:hidden bg-white dark:bg-gray-900 p-2 rounded-full shadow-md flex items-center gap-1 text-gray-700 dark:text-gray-300"
              >
                <Filter size={18} />
                {activeCategory !== 'all' && (
                  <span className="sr-only md:not-sr-only text-sm capitalize">
                    {activeCategory}
                  </span>
                )}
              </button>
            </div>
            
            <div className={`md:flex justify-center space-x-2 mb-8 ${isFilterVisible ? 'flex flex-wrap gap-2' : 'hidden md:flex'}`}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/gary920209" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View more projects on GitHub
              <Github className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;