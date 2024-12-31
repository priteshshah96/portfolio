import React from 'react';
import { motion } from 'framer-motion';

export const SocialLinks = () => {
  const links = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/in/pritesh96',
      color: 'hover:text-[#0077B5]'
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/priteshshah96',
      color: 'hover:text-[#333]'
    },
    {
      name: 'Kaggle',
      icon: 'kaggle',
      url: 'https://kaggle.com/priteshshah96',  // Update with your Kaggle URL
      color: 'hover:text-[#20BEFF]'
    },
    {
      name: 'Email',
      icon: 'envelope',
      url: 'mailto:priteshshahwork@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <div className="flex justify-center gap-6">
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl text-gray-600 dark:text-gray-400 transition-colors ${link.color}`}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.name}
        >
          <i className={`${link.name === 'Email' ? 'fas' : 'fab'} fa-${link.icon}`}></i>
        </motion.a>
      ))}
    </div>
  );
};