import React from 'react';

export const SocialLinks = () => (
    <div className="flex justify-center gap-6">
      <a href="https://linkedin.com/in/pritesh96" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/priteshshah96" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
        <i className="fab fa-github"></i>
      </a>
      <a href="mailto:priteshshahwork@gmail.com" className="text-2xl hover:text-primary">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
);