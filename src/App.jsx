import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Banner } from './components/layout/Banner';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { BackgroundVisualization } from './components/ui/BackgroundVisualization';
import { useTheme } from './hooks/useTheme';
import { useCountdown } from './hooks/useCountdown';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const countdown = useCountdown('2025-01-13T00:00:00');
  const isDarkTheme = theme === 'dark';

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className={`app min-h-screen ${theme}`}>
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <BackgroundVisualization isDarkTheme={isDarkTheme} />
      </div>

      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500"
        style={{ width: `${scrollProgress}%`, zIndex: 100 }}
      />

      {/* Main Content */}
      <div className="relative flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Banner countdown={countdown} />
          <div className="h-2" />
          <Navigation onThemeToggle={toggleTheme} isDarkTheme={isDarkTheme} />
        </div>

        <AnimatePresence mode="wait">
          <motion.main
            key="main"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex-1 pt-32"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Hero isDarkTheme={isDarkTheme} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <About />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Skills />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Projects />
              </motion.div>
            </div>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

export default App;
