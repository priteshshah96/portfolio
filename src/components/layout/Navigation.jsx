import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Navigation = ({ onThemeToggle, isDarkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ];

  return (
    <nav className="fixed w-full top-10 z-40">
      <div className="container mx-auto px-4">
        <div className="glass-card backdrop-blur-lg">
          <div className="flex justify-between items-center p-4">
            {/* Logo */}
            <motion.a 
              href="#"
              className="text-xl font-bold text-primary-dark"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary-dark transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={onThemeToggle}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {isDarkTheme ? (
                  <i className="fas fa-sun text-yellow-400"></i>
                ) : (
                  <i className="fas fa-moon text-gray-600"></i>
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col p-4 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary-dark transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <motion.button
                  onClick={onThemeToggle}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors w-fit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                >
                  {isDarkTheme ? (
                    <i className="fas fa-sun text-yellow-400"></i>
                  ) : (
                    <i className="fas fa-moon text-gray-600"></i>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};