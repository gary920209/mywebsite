import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

// Sample data - replace with your actual experience
const experiences = [
  {
    id: 1,
    role: 'Deep Learning Engineer Intern',
    company: 'MediaTek Research',
    companyUrl: 'https://www.mediatek.com/',
    location: 'Taipei, Taiwan',
    period: 'Oct 2024 - May 2025',
    advisors: [
      {
        name: 'Dr. Hung-yi Lee',
        url: 'https://speech.ee.ntu.edu.tw/~hylee/index.php',
      },
    ],
    description: 'Research in Spoken LLM.',
    logo: 'images/MTK.jpg',
  },
  {
    id: 2,
    role: 'AI Engineer Intern',
    company: 'NXP Semiconductors',
    companyUrl: 'https://www.nxp.com//',
    location: 'Taipei, Taiwan / Sigapore',
    period: 'Jul 2024 - Oct 2024',
    advisors: [
      {
        name: 'Dennis Wee',
        url: 'https://www.linkedin.com/in/dennis-wee-8b80165/',
      },
      {
        name: 'Li-Fong Tseng',
        url: 'https://www.linkedin.com/in/li-fong-tseng-8318696/',
      },
    ],
    description: 'Build a local-run LLM chatbot with autogen studio for NXP product engineering wafer defect analysis case.',
    logo: 'images/NXP.png',
  },
  {
    id: 3,
    role: 'CEO Office Intern',
    company: 'LeadBest Consulting Group',
    companyUrl: 'https://www.leadbestgroup.com/',
    location: 'Taipei, Taiwan',
    period: 'Mar 2023 - May 2023',
    advisors: [
      {
        name: 'CEO Chia-Hsien Lee',
        url: 'https://www.linkedin.com/in/chiahsienlee/',
      },
    ],
    description: 'Developed payroll conversion pipeline and researched OpenKM. Also, assist the marketing team in surveying industry research related to digital transformers, NFTs, and Web3.',
    logo: 'images/LCG.png',

  },
];

// Sample education data - replace with your actual education
const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Electrical Engineering',
    institution: 'National Taiwan University',
    institutionUrl: 'https://www.ntu.edu.tw/',
    location: 'Taipei, Taiwan',
    period: '2021 - Present',
    description: 'Focus on advanced topics in machine learning, computer vision, and digital IC.',
    logo: 'images/NTU.jpg',
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience & Education
          </h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div 
                  key={exp.id} 
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="w-28 h-28 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <div className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
                          <Building size={16} />
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <span>{exp.company}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                                            {exp.advisors && exp.advisors.length > 0 && (
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                          Advisor:{" "}
                          {exp.advisors.map((advisor, index) => (
                            <span key={advisor.name}>
                              <a
                                href={advisor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {advisor.name}
                              </a>
                              {index < exp.advisors.length - 1 && ', '}
                            </span>
                          ))}
                        </p>
                      )}                    
                      <p className="text-gray-700 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu) => (
                <div 
                  key={edu.id} 
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={edu.logo} 
                        alt={edu.institution}
                        className="w-28 h-28 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
                          <Building size={16} />
                          {edu.institutionUrl ? (
                            <a
                              href={edu.institutionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {edu.institution}
                            </a>
                          ) : (
                            <span>{edu.institution}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;