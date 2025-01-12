import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const ProjectCard = ({ 
  title, 
  description, 
  tags = [], 
  icon: Icon, 
  projectUrl 
}) => {
  return (
    <GlassCard className="flex flex-col h-full bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 shadow-md">
      <motion.div className="h-full flex flex-col">
        {/* Icon Section */}
        <div
          className="flex items-center justify-center h-16 w-16 mx-auto mb-4 
                     bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
                     rounded-full shadow-md"
        >
          {Icon && <Icon size={32} className="text-primary-dark dark:text-primary-light" />}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-center text-primary-dark dark:text-primary-light mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 
                         text-blue-700 dark:text-blue-300 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Learn More Button */}
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-dark dark:text-primary-light text-center hover:underline"
          >
            Learn More →
          </a>
        )}
      </motion.div>
    </GlassCard>
  );
};
