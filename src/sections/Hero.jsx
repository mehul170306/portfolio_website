import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../data/content';

const Hero = () => {
  return (
    <section id="home" className="relative min-vh-100 flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
              {HERO_CONTENT.name.split(' ')[0]} <span className="text-gradient">{HERO_CONTENT.name.split(' ')[1]}</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-accent-cyan font-space mb-8 tracking-wide uppercase text-sm"
            >
              <span className="w-8 h-[1px] bg-accent-cyan" />
              {HERO_CONTENT.title}
              <span className="w-8 h-[1px] bg-accent-cyan" />
            </motion.div>

            <p className="text-lg md:text-xl text-gray-400 mx-auto max-w-2xl mb-10 leading-relaxed">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
