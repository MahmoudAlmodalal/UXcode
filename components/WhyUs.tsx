import React from 'react';
import { motion } from 'framer-motion';
import { DIFFERENTIATORS } from '../constants';
import SectionHeading from './SectionHeading';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-secondary blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Why Partner With UXCode" 
          subtitle="We don't just write code. We build business assets."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIATORS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-secondary mb-4">
                <item.icon size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;