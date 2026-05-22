import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { SOCIALS } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <SectionHeader 
                subtitle="Get in Touch"
                title="Let's build something intelligent"
              />
              <p className="text-gray-400 mb-12 text-lg">
                I'm always open to discussing innovative projects, AI collaborations, or new opportunities.
              </p>
              
              <div className="space-y-6">
                {SOCIALS.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    className="flex items-center gap-4 text-gray-400 hover:text-accent-cyan transition-all group"
                  >
                    <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:border-accent-cyan group-hover:scale-110 transition-all">
                      <social.icon className="text-xl" />
                    </div>
                    <span className="font-space font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-space text-gray-400 uppercase tracking-widest">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-cyan outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-space text-gray-400 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-cyan outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-space text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-cyan outline-none transition-all"></textarea>
                </div>
                <button className="btn-primary w-full py-4 text-lg">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
