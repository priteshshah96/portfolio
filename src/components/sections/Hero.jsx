import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from '../ui/SocialLinks';

export const Hero = ({ isDarkTheme }) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Profile Image with Circles */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-8">
            {/* Outer rotating circle */}
            <motion.div
              className={`absolute inset-0 rounded-full border-2 ${
                isDarkTheme ? 'border-blue-500/20' : 'border-slate-500/20'
              }`}
              animate={{ scale: [1, 1.1, 1], rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Middle rotating circle */}
            <motion.div
              className={`absolute inset-0 rounded-full border-2 ${
                isDarkTheme ? 'border-blue-500/30' : 'border-slate-500/30'
              }`}
              animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner rotating circle */}
            <motion.div
              className={`absolute inset-0 rounded-full border-2 ${
                isDarkTheme ? 'border-blue-500/40' : 'border-slate-500/40'
              }`}
              animate={{ scale: [1.05, 0.95, 1.05], rotate: 180 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            {/* Profile image container */}
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-blue-500/50 ring-offset-4 ring-offset-slate-950"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/assets/images/photo.png"
                alt="Pritesh Shah"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${
              isDarkTheme ? 'text-white' : 'text-slate-900'
            }`}>
              Pritesh Shah
            </h1>
            <p className={`text-lg sm:text-xl ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-700'
            } max-w-2xl mx-auto mb-8 px-4`}>
              Data Science Graduate from Indiana University Indianapolis with expertise in 
              Machine Learning, NLP, and Data Analysis
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4">
              <motion.a
                href="mailto:priteshshahwork@gmail.com"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reach Out
              </motion.a>
              <motion.a
                href="/assets/cv/Pritesh_Shah_CV.pdf"
                className={`bg-transparent px-8 py-3 rounded-lg font-medium border-2 ${
                  isDarkTheme
                    ? 'text-white border-blue-500/50 hover:border-blue-500'
                    : 'text-slate-900 border-slate-500 hover:border-slate-700'
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </motion.a>
            </div>

            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
