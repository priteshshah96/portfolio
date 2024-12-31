import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/pritesh96' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/priteshshah96' },
    { name: 'Email', icon: 'envelope', url: 'mailto:priteshshahwork@gmail.com' }
  ];

  return (
    <footer className="mt-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                aria-label={link.name}
              >
                <i className={`fab fa-${link.icon}`}></i>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div 
            className="text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p>© {new Date().getFullYear()} Pritesh Shah. All rights reserved.</p>
          </motion.div>

          {/* Back to Top */}
          <motion.a
            href="#"
            className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};