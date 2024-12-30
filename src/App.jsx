import React, { useState, useEffect } from 'react';
import { Banner } from './components/layout/Banner';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { NeuralBackground } from './components/ui/NeuralBackground';
import { useTheme } from './utils/theme';
import { useCountdown } from './utils/countdown';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const countdown = useCountdown('2025-01-13T00:00:00');
  
  return (
    <div className="app" data-theme={theme}>
      <NeuralBackground />
      <Banner countdown={countdown} />
      <Navigation onThemeToggle={toggleTheme} isDarkTheme={theme === 'dark'} />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;