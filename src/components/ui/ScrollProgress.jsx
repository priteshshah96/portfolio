import React from 'react';
import { motion } from 'framer-motion';

export const ScrollProgress = ({ progress }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-blue-500 origin-left z-50"
      style={{ transform: `scaleX(${progress / 100})` }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ ease: 'linear' }}
    />
  );
};
