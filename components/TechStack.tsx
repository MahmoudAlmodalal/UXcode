import React from 'react';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-10">Technologies We Master</h3>
        
        <div className="grid gap-10 md:gap-16">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {Object.entries(TECH_STACK).map(([category, techs]) => (
                    techs.map((tech) => (
                        <span key={tech} className="text-lg md:text-xl font-semibold text-gray-500 hover:text-primary cursor-default px-4">
                            {tech}
                        </span>
                    ))
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;