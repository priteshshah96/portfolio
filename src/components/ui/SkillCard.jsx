import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const SkillCard = ({ IconComponent, title, level = 0 }) => {
  return (
    <GlassCard className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        {IconComponent ? (
          <div className="mb-4">
            <IconComponent size={48} className="text-primary-dark" />
          </div>
        ) : (
          <div className="mb-4">
            <span className="text-gray-500">No Icon</span>
          </div>
        )}

        {/* Title */}
        <h3 className="font-semibold mb-3">{title}</h3>

        {/* Skill Level Indicator */}
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>

        {/* Level Label */}
        <motion.p
          className="text-sm text-gray-600 dark:text-gray-400 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {level}% Proficiency
        </motion.p>
      </motion.div>
    </GlassCard>
  );
};
