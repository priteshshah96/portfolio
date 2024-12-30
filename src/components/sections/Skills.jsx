import React from 'react';
import { SkillCard } from '../ui/SkillCard';

export const Skills = () => (
  <section id="skills" className="section py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <SkillCard icon="fa-code" title="Python" />
        <SkillCard icon="fa-database" title="SQL" />
        <SkillCard icon="fa-brain" title="ML" />
        <SkillCard icon="fa-chart-line" title="Data Analysis" />
        <SkillCard icon="fa-comment-dots" title="NLP" />
        <SkillCard icon="fa-cloud" title="AWS" />
      </div>
    </div>
  </section>
);