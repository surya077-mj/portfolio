import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4">
                Kannuri Deva Surya Vikas
              </div>
              <p className="text-slate-400 max-w-md">
                Computer Science student passionate about IoT, Machine Learning, and Frontend Development. 
                Building innovative solutions that bridge technology and real-world applications.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center md:items-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={scrollToTop}
                className="mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full border border-blue-400/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                aria-label="Scroll to top"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={20} />
              </motion.button>
              
              <div className="text-center md:text-right">
                <p className="text-slate-400 text-sm mb-2">
                  © {currentYear} Kannuri Deva Surya Vikas. All rights reserved.
                </p>
                <p className="text-slate-500 text-sm flex items-center justify-center md:justify-end gap-1">
                  Made with <Heart size={16} className="text-red-400" /> and lots of coffee
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 pt-8 border-t border-slate-700 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 text-sm">
              This portfolio was built with React, TypeScript, Tailwind CSS, and Framer Motion. 
              <br className="md:hidden" />
              Optimized for performance and modern web standards.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;