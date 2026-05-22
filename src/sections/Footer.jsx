import React from 'react';
import { NAV_LINKS, SOCIALS } from '../data/content';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-glass-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-space font-bold">
            MEHUL<span className="text-accent-cyan">.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-accent-cyan transition-colors"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mehul Gaikwad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
