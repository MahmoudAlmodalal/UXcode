import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Solutions" 
          subtitle="Comprehensive technical and strategic services tailored to your growth."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-neutral-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">0{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <Check size={18} className="text-secondary shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;