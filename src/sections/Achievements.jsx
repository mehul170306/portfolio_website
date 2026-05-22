import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/content';

const Achievements = () => {
  return (
    <section className="py-20 bg-accent-cyan/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:bg-white/10 transition-all border-b-4 border-b-accent-cyan/20 hover:border-b-accent-cyan"
            >
              <h3 className="text-sm font-space uppercase tracking-[0.3em] text-gray-500 mb-2">{item.title}</h3>
              <p className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
