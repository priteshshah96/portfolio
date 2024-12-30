import React from 'react';

export const Navigation = ({ onThemeToggle, isDarkTheme }) => (
  <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 top-[3rem]">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#" className="nav-logo text-xl font-bold">Portfolio</a>
      <div className="nav-links hidden md:flex items-center gap-8">
        <a href="#about" className="hover:text-primary">About</a>
        <a href="#skills" className="hover:text-primary">Skills</a>
        <a href="#projects" className="hover:text-primary">Projects</a>
        <button 
          onClick={onThemeToggle}
          className="theme-switch p-2 rounded-full"
          aria-label="Toggle theme"
        >
          <i className={`fas ${isDarkTheme ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
    </div>
  </nav>
);