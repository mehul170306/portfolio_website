import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { ABOUT_CONTENT } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <SectionHeader 
              subtitle="The Vision"
              title="Architecting Intelligence"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 leading-relaxed mb-8"
            >
              {ABOUT_CONTENT.text}
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 flex flex-col justify-center items-center text-center">
                    <span className="text-3xl text-accent-cyan font-space font-bold">10+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-widest">Projects</span>
                </div>
                <div className="glass-card p-6 flex flex-col justify-center items-center text-center">
                    <span className="text-3xl text-accent-purple font-space font-bold">AI</span>
                    <span className="text-sm text-gray-500 uppercase tracking-widest">Specialist</span>
                </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {ABOUT_CONTENT.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 group hover:bg-white/5 transition-all"
              >
                <card.icon className="text-4xl text-accent-cyan mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
