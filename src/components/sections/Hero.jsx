import React from 'react';
import { SocialLinks } from '../ui/SocialLinks';

export const Hero = () => (
  <section className="hero min-h-screen flex items-center justify-center text-center py-20">
    <div className="container mx-auto px-4">
      <img 
        src="/api/placeholder/200/200"
        alt="Pritesh Shah"
        className="w-48 h-48 rounded-full mx-auto mb-8 shadow-lg"
        loading="lazy"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Pritesh Shah</h1>
      <p className="text-xl text-secondary-text max-w-2xl mx-auto mb-8">
        Data Science Graduate from Indiana University Indianapolis with expertise in 
        Machine Learning, NLP, and Data Analysis
      </p>
      <SocialLinks />
    </div>
  </section>
);