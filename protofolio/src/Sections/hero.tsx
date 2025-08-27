// src/sections/Hero.tsx
import React from 'react';
//import Section from '../components/Section';
import Section from '../components/sections';

const Hero: React.FC = () => {
  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-0">
      <div className="container mx-auto max-w-6xl text-center flex flex-col items-center mt-16">
        <div className="w-48 h-48 rounded-full bg-indigo-300 mb-8 overflow-hidden border-4 border-white shadow-xl">
          {/* Your profile photo */}
          <img 
            src={`/images/my image.jpg`} 
            alt="Florence Umwari" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          Florence Umwari
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
          <p className="mb-2">A passionate Electronics and Telecommunication Engineer,</p>
          <p>with a strong interest in technology, innovation, and problem-solving. I specialize in areas such as embedded systems, IoT, web development, and software design, and I enjoy building solutions that connect creativity with real-world impact.</p>
        </div>
       
        <div className="flex space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;