import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navigation = ({ onThemeToggle, isDarkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Access the current path

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu
    }
  };

  const handlePortfolioClick = () => {
    if (location.pathname === '/') {
      // Scroll to top if already on the root path
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 h-16">
      <div className="container mx-auto px-4">
        <div className="glass-card backdrop-blur-lg">
          <div className="flex justify-between items-center p-4">
            {/* Portfolio Logo */}
            <Link
              to="/"
              onClick={handlePortfolioClick} // Scroll to top when clicked
              className="text-xl font-bold text-primary-dark"
            >
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                location.pathname === '/' ? (
                  // Smooth scroll on the main page
                  <a
                    key={link.name}
                    href={`#${link.href}`}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-primary-dark transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  // Navigate to the main page and handle scrolling
                  <Link
                    key={link.name}
                    to={`/#${link.href}`}
                    className="hover:text-primary-dark transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}
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
                {navLinks.map((link) =>
                  location.pathname === '/' ? (
                    <a
                      key={link.name}
                      href={`#${link.href}`}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="hover:text-primary-dark transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={`/#${link.href}`}
                      className="hover:text-primary-dark transition-colors"
                      onClick={() => setIsOpen(false)} // Close the menu
                    >
                      {link.name}
                    </Link>
                  )
                )}
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
