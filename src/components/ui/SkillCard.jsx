import React from 'react';

export const SkillCard = ({ icon, title }) => (
    <div className="skill-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
      <i className={`fas ${icon} text-3xl text-primary mb-4`}></i>
      <h3 className="font-semibold">{title}</h3>
    </div>
);