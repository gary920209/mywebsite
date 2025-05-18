import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

// Sample research papers - replace with your actual papers
const papers = [
  {
    id: 1,
    title: 'TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling',
    authors: 'Liang-Hsuan Tseng, Yi-Chang Chen, Kuan-Yi Lee, Da-Shan Shiu, Hung-yi Lee',
    conference: 'NeurIPS 2025(Under Review)',
    abstract: 'We introduce Text-Aligned Speech Tokenization and Embedding (TASTE), a method that directly addresses the modality gap by aligning speech token with the corresponding text transcription during the tokenization stage.',
    paper_link:"https://arxiv.org/abs/2504.07053",
    code_link: "https://github.com/mtkresearch/TASTE-SpokenLM",
    page_link: "https://mtkresearch.github.io/TASTE-SpokenLM.github.io/",
    tags: ['Speech Processing', 'Machine Learning'],
    image: '/mywebsite/images/Taslm.png',
  },
  {
    id: 2,
    title: 'Signatures of lower respiratory tract microbiome in children with severe community-acquired pneumonia using shotgun metagenomic sequencing',
    authors: 'Ting-Yu Yen, Ching Hsu, Ni-Chung Lee, Chao-Szu Wu, Hsin Wang, Kuan-Yi Lee , Chia-Ray Lin, Chun-Yi Lu, Mo-Li Tsai, Tzu-Yu Liu, Che Lin, Chien-Yu Chen, Luan-Yin Chang, Feipei Lai, Li-Min Huang',
    conference: 'Journal of Microbiology, Immunology and Infection',
    abstract: 'We conducted a prospective cohort study to recruit children under 18 who required admission to an intensive care unit for community-acquired pneumonia between December 2019 and February 2022.',
    paper_link:"https://www.sciencedirect.com/science/article/pii/S1684118224002172",
    code_link: "",
    page_link: "",
    tags: ['Data Science', 'Bioinformatics'],
    image: '/mywebsite/images/JMII.png',
  },
];

interface PaperCardProps {
  paper: typeof papers[0];
}

const PaperCard: React.FC<PaperCardProps> = ({ paper }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={paper.image} 
          alt={paper.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex flex-wrap gap-2">
            {paper.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-600/90 text-white text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
          {paper.title}
        </h4>
        
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          {paper.authors}
        </p>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 italic">
          {paper.conference}
        </p>
        
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-40' : 'max-h-0'}`}>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {paper.abstract}
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
          >
            {expanded ? (
              <>
                <ChevronUp size={16} />
                Hide Abstract
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                Show Abstract
              </>
            )}
          </button>
          
          <div className="flex items-center gap-3">
            <a
              href={paper.paper_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
            >
              View Paper
              <ExternalLink size={16} />
            </a>
            <a
              href={paper.code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
            >
              View Code
              <ExternalLink size={16} />
            </a>
            <a
              href={paper.page_link} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
            >
              View DemoPage
              <ExternalLink size={16} />
            </a>
          </div>
        </div>       
      </div>
    </div>
  );
};

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Research Papers
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-gray-700 dark:text-gray-300">
              Explore my published research papers across various domains of machine learning and data science.
            </p>
          </div>
          
          <div className="space-y-6">
            {papers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="https://scholar.google.com/citations?hl=zh-TW&user=dIA6CAgAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View publications on Google Scholar
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;