import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm an EECS student passionate about building innovative solutions.";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          {/* Pattern background */}
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgMEMxMy40MyAwIDAgMTMuNDMgMCAzMGMwIDE2LjU3IDEzLjQzIDMwIDMwIDMwIDE2LjU3IDAgMzAtMTMuNDMgMzAtMzBDNjAgMTMuNDMgNDYuNTcgMCAzMCAwem0wIDQ4Yy05LjktMC0xOC04LjEtMTgtMThzOC4xLTE4IDE4LTE4IDE4IDguMSAxOCAxOC04LjEgMTgtMTggMTh6Ij48L3BhdGg+PC9zdmc+')]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in">
            <span className="block">Hello, I'm Gary Lee</span>
          </h1>
          
          <div className="h-24">
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              {typedText}
              <span className="inline-block w-1 h-5 ml-1 bg-blue-600 dark:bg-blue-400 animate-blink"></span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
            <a 
              href="/resume.pdf" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/gary920209" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kuan-yi-gary-lee/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-gray-700 dark:text-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;