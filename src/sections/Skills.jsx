import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { SKILLS } from '../data/content';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-dark/50">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Tech Stack"
          title="The Arsenal"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="glass-card p-8 border-t-2 border-t-accent-cyan/20"
            >
              <h3 className="text-xl font-space font-bold mb-8 text-gradient inline-block">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, color: '#00f5ff' }}
                    className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-sm font-medium transition-all"
                  >
                    <skill.icon className="text-lg" />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
