import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from '../ui/ProjectCard';
import { allProjects } from '../data/projects';

export const FeaturedProjects = () => {
  const navigate = useNavigate();

  const featuredProjects = allProjects.slice(0, 3); // Get top 3 featured projects

  const handleSeeMore = () => {
    navigate('/all-projects'); // Navigate to the All Projects page
  };

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

        {/* Featured Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
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

        {/* See More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={handleSeeMore}
            className="inline-flex items-center text-primary-dark hover:text-primary"
          >
            See More Projects <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
