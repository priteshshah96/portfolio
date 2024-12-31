import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from '../ui/SkillCard';

export const Skills = () => {
  const skills = [
    { 
      icon: 'fa-python', 
      title: 'Python',
      level: 90,
      categories: ['Programming', 'Data Science']
    },
    { 
      icon: 'fa-database', 
      title: 'SQL',
      level: 85,
      categories: ['Database', 'Data Analysis']
    },
    { 
      icon: 'fa-brain', 
      title: 'Machine Learning',
      level: 85,
      categories: ['AI/ML', 'Data Science']
    },
    { 
      icon: 'fa-chart-line', 
      title: 'Data Analysis',
      level: 88,
      categories: ['Data Science', 'Statistics']
    },
    { 
      icon: 'fa-comment-dots', 
      title: 'NLP',
      level: 82,
      categories: ['AI/ML', 'Data Science']
    },
    { 
      icon: 'fa-cloud', 
      title: 'AWS',
      level: 80,
      categories: ['Cloud', 'DevOps']
    }
  ];

  const categories = [...new Set(skills.flatMap(skill => skill.categories))];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredSkills = selectedCategory === 'All' 
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
            <motion.button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'All' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            {categories.map((category) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard 
                icon={skill.icon} 
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