import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { JOURNEY } from '../data/content';

const Journey = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Evolution"
          title="Technical Journey"
          center
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent hidden md:block" />

          <div className="space-y-12">
            {JOURNEY.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-5/12" />
                
                <div className="z-20 flex items-center justify-center w-12 h-12 rounded-full glass-card border-2 border-accent-cyan shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                  <div className="w-3 h-3 rounded-full bg-accent-cyan animate-ping" />
                </div>

                <div className="w-full md:w-5/12 glass-card p-8 mt-6 md:mt-0 relative group hover:border-accent-cyan transition-colors">
                    <span className="text-3xl font-space font-bold text-white opacity-20 absolute top-4 right-4 group-hover:opacity-100 transition-opacity">
                        {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-4 text-accent-cyan">{item.year}</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {item.event}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
