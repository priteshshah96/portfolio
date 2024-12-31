import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

export const About = () => {
  const highlights = [
    {
      title: 'Education',
      icon: 'fa-graduation-cap',
      content: 'MS in Applied Data Science, Indiana University Indianapolis'
    },
    {
      title: 'Research',
      icon: 'fa-microscope',
      content: 'Focus on Machine Learning and Natural Language Processing'
    },
    {
      title: 'Industry',
      icon: 'fa-briefcase',
      content: 'Experience in Data Analysis and ML Model Development'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="max-w-3xl mx-auto">
            <GlassCard className="mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Currently pursuing an MS in Applied Data Science at Indiana University, 
                Indianapolis. Passionate about leveraging data-driven approaches to solve 
                complex problems. My research interests include machine learning, natural 
                language processing, and deep learning applications.
              </p>
            </GlassCard>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <GlassCard className="text-center h-full">
                    <i className={`fas ${item.icon} text-3xl text-primary-dark mb-4`}></i>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};