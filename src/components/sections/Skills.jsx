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
  FaNetworkWired,
  FaBrain,
  FaRobot,
} from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';
import { BiData, BiBrain } from 'react-icons/bi';
import { TbBrandPython } from 'react-icons/tb';
import { SiPytorch } from 'react-icons/si';

export const Skills = () => {
  const skills = [
    // Programming Languages
    { IconComponent: FaPython, title: 'Python', level: 'Advanced', categories: ['Programming'] },
    { IconComponent: FaJs, title: 'JavaScript', level: 'Advanced', categories: ['Programming'] },
    { IconComponent: AiOutlineCode, title: 'R', level: 'Intermediate', categories: ['Programming'] },

    // Databases
    { IconComponent: FaDatabase, title: 'MySQL', level: 'Intermediate', categories: ['Databases'] },
    { IconComponent: FaDatabase, title: 'MongoDB', level: 'Advanced', categories: ['Databases'] },
    { IconComponent: FaDatabase, title: 'SQLite', level: 'Advanced', categories: ['Databases'] },
    { IconComponent: FaNetworkWired, title: 'Vector Database', level: 'Advanced', categories: ['Databases'] },

    // Data Science & Analysis
    { IconComponent: BiData, title: 'Scikit-learn', level: 'Advanced', categories: ['Data Science'] },
    { IconComponent: BiData, title: 'Pandas', level: 'Advanced', categories: ['Data Science'] },
    { IconComponent: BiData, title: 'NumPy', level: 'Advanced', categories: ['Data Science'] },
    { IconComponent: FaTable, title: 'Tableau', level: 'Advanced', categories: ['Data Science'] },
    { IconComponent: FaCloud, title: 'Streamlit', level: 'Advanced', categories: ['Data Science'] },

    // Machine Learning & AI
    { IconComponent: AiOutlineCode, title: 'Machine Learning', level: 'Advanced', categories: ['AI/ML'] },
    { IconComponent: AiOutlineCode, title: 'NLP', level: 'Advanced', categories: ['AI/ML'] },
    { IconComponent: SiPytorch, title: 'PyTorch', level: 'Advanced', categories: ['AI/ML'] },

    // AI Agents & Frameworks
    { IconComponent: FaRobot, title: 'CrewAI', level: 'Intermediate', categories: ['AI Frameworks'] },
    { IconComponent: BiBrain, title: 'LangChain', level: 'Intermediate', categories: ['AI Frameworks'] },
    { IconComponent: FaBrain, title: 'LangGraph', level: 'Intermediate', categories: ['AI Frameworks'] },
    { IconComponent: FaNetworkWired, title: 'LlamaIndex', level: 'Intermediate', categories: ['AI Frameworks'] },

    // Cloud & Deployment
    { IconComponent: FaAws, title: 'AWS', level: 'Intermediate', categories: ['Cloud & Deployment'] },
    { IconComponent: FaCloud, title: 'MLflow & Hydra', level: 'Intermediate', categories: ['Cloud & Deployment'] },
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