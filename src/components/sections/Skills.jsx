import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from '../ui/SkillCard';
import {
  FaPython,
  FaJs,
  FaDatabase,
  FaAws,
  FaCloud,
  FaTable,
} from 'react-icons/fa'; // Use FontAwesome icons
import { AiOutlineCode } from 'react-icons/ai'; // Use for generic coding
import { BiData } from 'react-icons/bi'; // Use for data-related skills

export const Skills = () => {
  const skills = [
    // Programming Languages
    { IconComponent: FaPython, title: 'Python', level: 90, categories: ['Programming'] },
    { IconComponent: FaJs, title: 'JavaScript', level: 85, categories: ['Programming'] },
    { IconComponent: AiOutlineCode, title: 'R', level: 80, categories: ['Programming'] },

    // Databases
    { IconComponent: FaDatabase, title: 'MySQL', level: 85, categories: ['Databases'] },
    { IconComponent: FaDatabase, title: 'MongoDB', level: 80, categories: ['Databases'] },
    { IconComponent: FaDatabase, title: 'SQLite', level: 75, categories: ['Databases'] },

    // Data Science & Analysis
    { IconComponent: BiData, title: 'Scikit-learn', level: 85, categories: ['Data Science'] },
    { IconComponent: BiData, title: 'Pandas', level: 88, categories: ['Data Science'] },
    { IconComponent: BiData, title: 'NumPy', level: 88, categories: ['Data Science'] },
    { IconComponent: FaTable, title: 'Tableau', level: 80, categories: ['Data Science'] },
    { IconComponent: FaCloud, title: 'Streamlit', level: 75, categories: ['Data Science'] },

    // Machine Learning & AI
    { IconComponent: AiOutlineCode, title: 'Machine Learning', level: 85, categories: ['AI/ML'] },
    { IconComponent: AiOutlineCode, title: 'NLP (Natural Language Processing)', level: 82, categories: ['AI/ML'] },

    // Cloud & Deployment
    { IconComponent: FaAws, title: 'AWS (SageMaker, ECS, Lambda, S3)', level: 75, categories: ['Cloud & Deployment'] },
    { IconComponent: FaCloud, title: 'MLflow & Hydra', level: 70, categories: ['Cloud & Deployment'] },
  ];

  const categories = ['All', ...new Set(skills.flatMap(skill => skill.categories))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter(skill => skill.categories.includes(selectedCategory));

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard
                IconComponent={skill.IconComponent}
                title={skill.title}
                level={skill.level}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
