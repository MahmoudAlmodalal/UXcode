import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from './Button';
import { HERO_STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                Now accepting new projects
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI & Technical Excellence</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                We deliver cutting-edge AI solutions and technical expertise that drive measurable results for forward-thinking companies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                  View Our Solutions
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                {HERO_STATS.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Abstract Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:block h-full min-h-[500px]"
          >
            <div className="relative w-full h-full bg-gradient-to-br from-primary to-blue-900 rounded-2xl shadow-2xl overflow-hidden p-8 flex flex-col justify-between text-white">
               {/* Abstract UI Elements Mockup */}
               <div className="space-y-4 opacity-90">
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                     <div className="text-xs font-mono text-blue-200">system_status: active</div>
                  </div>
                  <div className="space-y-3 font-mono text-sm text-blue-100">
                    <div className="flex gap-4">
                      <span className="text-secondary">&gt;</span>
                      <span>Initializing AI Model...</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-secondary">&gt;</span>
                      <span>Analyzing Data Streams...</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-secondary">&gt;</span>
                      <span>Optimizing Architecture...</span>
                    </div>
                     <div className="p-4 bg-white/10 rounded-lg mt-8 backdrop-blur-sm border border-white/10">
                        <div className="h-2 w-24 bg-secondary rounded mb-2"></div>
                        <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                        <div className="h-2 w-1/2 bg-white/20 rounded mt-2"></div>
                     </div>
                     <div className="p-4 bg-white/10 rounded-lg mt-2 backdrop-blur-sm border border-white/10 translate-x-4">
                        <div className="h-2 w-24 bg-accent rounded mb-2"></div>
                        <div className="h-2 w-2/3 bg-white/20 rounded"></div>
                     </div>
                  </div>
               </div>
               
               <div className="absolute bottom-0 right-0 p-8">
                  <div className="w-32 h-32 bg-secondary/30 rounded-full blur-2xl absolute bottom-4 right-4"></div>
               </div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ChevronRight size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Efficiency Up</p>
                  <p className="text-xs text-gray-500">Last 30 days</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">+145%</div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2">
                <div className="bg-green-500 h-1.5 rounded-full w-[70%]"></div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;