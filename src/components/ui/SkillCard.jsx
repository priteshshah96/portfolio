import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const SkillCard = ({ IconComponent, title, level }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-violet-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <GlassCard className="text-center h-48 flex flex-col justify-between">
      <motion.div
        className="flex flex-col h-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon Section */}
        {IconComponent ? (
          <div className="flex justify-center items-center mb-2">
            <IconComponent size={40} className="text-blue-500" />
          </div>
        ) : (
          <div className="mb-2">
            <span className="text-gray-500">No Icon</span>
          </div>
        )}

        {/* Title Section */}
        <h3 className="font-semibold text-lg mb-auto">{title}</h3>

        {/* Proficiency Badge - Bottom */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm text-white ${getLevelColor(level)}`}>
            {level}
          </span>
        </motion.div>
      </motion.div>
    </GlassCard>
  );
};