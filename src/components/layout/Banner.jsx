import React from 'react';
import { motion } from 'framer-motion';

export const Banner = ({ countdown }) => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg z-50"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-center items-center gap-4 text-sm md:text-base">
          <span className="font-medium">The Website is currently in beta testing, Expected completion:</span>
          <div className="flex gap-3">
            {countdown !== 'Complete!' ? (
              <motion.div
                className="bg-white/20 rounded px-3 py-1 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {countdown}
              </motion.div>
            ) : (
              <motion.div
                className="font-bold text-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                Website Complete! 🎉
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};