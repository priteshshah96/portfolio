import React from 'react';

export const Footer = () => (
  <footer className="bg-card-bg border-t border-border py-8 mt-16">
    <div className="container mx-auto px-4 text-center">
      <p className="text-secondary-text">
        © {new Date().getFullYear()} Pritesh Shah. All rights reserved.
      </p>
    </div>
  </footer>
);