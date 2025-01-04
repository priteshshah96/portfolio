import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed p-3 md:p-4 rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 hover:bg-blue-600 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        zIndex: 1000,
        bottom: '4rem', // Adjusted to stay above the footer
        right: '1.5rem',
      }}
      aria-label="Scroll to top"
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
    >
      <i className="fas fa-arrow-up"></i>
    </motion.button>
  );
};

export default ScrollToTopButton;
