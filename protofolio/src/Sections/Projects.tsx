// src/sections/Projects.tsx
import React from 'react';
//import Section from '../components/Section';
import Section from '../components/sections';
import type { Project } from '../types';

// Updated Project type to include an image URL
interface ProjectWithImage extends Project {
  imageUrl: string;
  imageAlt?: string;
}

// Temporary placeholder data with images
const projectsData: ProjectWithImage[] = [
  {
    id: 1,
    title: 'Dynamic Landing Page with Context API & Hooks',
    description: 'This project is a fully responsive landing page built in React that demonstrates state management and component reusability.',
    techStack: ['React', 'Tailwind CSS', 'React Context API', 'React Icons & Lucide Icons'],
    githubUrl: 'https://github.com/fofoumwari/landing-page.git',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/018/815/472/non_2x/landing-page-design-modern-landing-page-templates-landing-page-design-templates-free-free-vector.jpg',
    imageAlt: 'Landing page design'
  },
  {
    id: 2,
    title: 'Team Task Tracker-Project Management Dashboard',
    description: 'The Team Task Tracker is a simple yet powerful project management dashboard built to streamline task organization within a team.',
    techStack: ['React', 'React Hooks', 'Tailwind CSS', 'CRUD operations'],
    githubUrl: 'https://github.com/fofoumwari/task-tracker.git',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.vMZ70BPd0HlXjsrC0NMiDgHaFQ?pid=Api&P=0&h=220',
    imageAlt: 'Task management interface'
  },
  {
    id: 3,
    title: 'Product CRUD Integration with Axios & DummyJSON API',
    description: 'This project is a product management platform that integrates seamlessly with the DummyJSON Products API.',
    techStack: ['React', 'Axios', 'Tailwind CSS', 'DummyJSON Products API', 'React Hooks'],
    githubUrl: 'https://github.com/fofoumwari/Assignment-CRUD.git',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.m4wNzCdpYeI5VG2p3alcbgAAAA?pid=Api&P=0&h=220',
    imageAlt: 'Product management dashboard'
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects" subtitle="A selection of my recent work" className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
            {/* Project Image */}
            <div className="h-48 overflow-hidden relative">
              <div 
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
                aria-label={project.imageAlt || project.title}
              />
              <div className="absolute inset-0 bg-blue bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
            
            {/* Project Content */}
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project Links */}
            <div className="px-6 pb-4 mt-auto flex space-x-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;