import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const ProjectCard = ({ 
  title, 
  description, 
  tags = [], 
  imageUrl, 
  projectUrl,
  demoUrl // New prop for live demo
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GlassCard 
      className="overflow-hidden group cursor-pointer"
      hover={false}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        className="h-full"
      >
        {/* Project Image with Overlay */}
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <motion.img 
            src={imageUrl || '/api/placeholder/400/300'} 
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Hover Icons */}
          <motion.div
            className="absolute bottom-4 left-4 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {projectUrl && (
              <a 
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <i className="fab fa-github text-white text-xl" />
              </a>
            )}
            {demoUrl && (
              <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <i className="fas fa-external-link-alt text-white text-xl" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 
                          text-blue-700 dark:text-blue-300 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* View Details Button */}
          <motion.button
            className="mt-2 text-primary-dark dark:text-primary-light hover:text-primary 
                     dark:hover:text-primary-light/80 transition-colors flex items-center gap-2"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <i className="fas fa-arrow-right" />
          </motion.button>
        </div>
      </motion.div>
    </GlassCard>
  );
};