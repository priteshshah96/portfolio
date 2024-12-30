import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects = () => (
  <section id="projects" className="section py-20 bg-card-bg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard 
          title="Haiku Generator"
          description="AI-powered haiku generator using LLaMa 2 and GPT-J 6B, featuring sentiment analysis and word cloud visualization."
        />
        <ProjectCard
          title="Workforce Scheduling"
          description="Comprehensive dashboards for shift duty scheduling and raw material procurement optimization using Tableau and Random Forest algorithms."
        />
      </div>
    </div>
  </section>
);