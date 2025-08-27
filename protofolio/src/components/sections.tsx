// src/components/Section.tsx
import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-20 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;