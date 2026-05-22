import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { PROJECTS } from '../data/content';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Portfolio"
          title="Featured Work"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                  <a href={project.github} className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a href={project.demo} className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all">
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest text-accent-cyan font-bold bg-accent-cyan/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-6">
                  {project.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:text-accent-cyan transition-colors"
                >
                  View Case Study <span className="text-xl">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
