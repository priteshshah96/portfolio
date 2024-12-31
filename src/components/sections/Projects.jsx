import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects = () => {
  const projects = [
    {
      title: 'Haiku Generator',
      description: 'AI-powered haiku generator using LLaMa 2 and GPT-J 6B, featuring sentiment analysis and word cloud visualization.',
      tags: ['Python', 'NLP', 'Deep Learning', 'LLaMa 2'],
      imageUrl: '/assets/projects/haiku-generator.png',
      projectUrl: 'https://github.com/priteshshah96/haiku-generator'
    },
    {
      title: 'Workforce Scheduling',
      description: 'Comprehensive dashboards for shift duty scheduling and raw material procurement optimization using Tableau and Random Forest algorithms.',
      tags: ['Python', 'Machine Learning', 'Tableau', 'Optimization'],
      imageUrl: '/assets/projects/workforce-scheduling.png',
      projectUrl: 'https://github.com/priteshshah96/workforce-scheduling'
    },
    {
      title: 'Smart Energy Prediction',
      description: 'Time series forecasting model for energy consumption prediction using LSTM networks and weather data integration.',
      tags: ['Python', 'Deep Learning', 'Time Series', 'LSTM'],
      imageUrl: '/assets/projects/energy-prediction.png',
      projectUrl: 'https://github.com/priteshshah96/energy-prediction'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work in machine learning, data science, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://github.com/priteshshah96"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-dark hover:text-primary"
          >
            View More Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};