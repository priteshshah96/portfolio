import React from 'react';

export const About = () => (
  <section id="about" className="section py-20 bg-card-bg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Currently pursuing an MS in Applied Data Science at Indiana University, Indianapolis.
          Passionate about solving complex problems using data-driven approaches.
        </p>
        <a 
          href="/assets/cv/Pritesh_Shah_CV.pdf" 
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  </section>
);