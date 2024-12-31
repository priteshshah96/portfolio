import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/pritesh96' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/priteshshah96' },
    { name: 'Email', icon: 'envelope', url: 'mailto:priteshshahwork@gmail.com' }
  ];

  // Reference for the audio element
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio
    }
    alert('Chips maang raha hai! 🍟');
  };

  return (
    <footer className="mt-20 bg-gray-50 dark:bg-gray-800/50 relative">
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

          {/* Made With Section */}
          <motion.div 
            className="text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              Made with <span className="text-primary">React</span> and{' '}
              <span className="text-primary">TailwindCSS</span>.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>© {new Date().getFullYear()} Pritesh Shah. All rights reserved.</p>
          </motion.div>
        </div>

        {/* Hidden Treasure Button */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            className="bg-transparent text-gray-400 dark:text-gray-600 text-xs py-1 px-2 rounded-full transition-opacity opacity-50 hover:opacity-100 focus:outline-none flex items-center gap-2"
            onClick={handleButtonClick}
            aria-label="Hidden Treasure Button"
            style={{ fontSize: '0.75rem', cursor: 'not-allowed' }}
          >
            <span>Don't click me!</span>
            <span>🍟</span>
          </button>
        </motion.div>

        {/* Audio Element */}
        <audio ref={audioRef} src="/assets/audio/chips.mp3" />
      </div>
    </footer>
  );
};
