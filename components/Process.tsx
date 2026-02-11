import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import SectionHeading from './SectionHeading';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="How We Work" 
          subtitle="A transparent, agile process designed to deliver excellence at speed."
        />

        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white p-6 md:pt-0"
              >
                <div className="flex md:flex-col items-center gap-4 md:gap-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-gray-100 group-hover:border-secondary flex items-center justify-center text-lg md:text-xl font-bold text-gray-400 group-hover:text-primary transition-all duration-300 shadow-sm z-10 relative">
                    {step.number}
                  </div>
                  <div className="md:text-center flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;