import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  
    // Add useEffect to sync theme on initial load
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    };
  
    return { theme, toggleTheme };
};