import React from 'react';

export const ProjectCard = ({ title, description }) => (
    <div className="project-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-secondary-text">{description}</p>
    </div>
);