import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { BackgroundVisualization } from './components/ui/BackgroundVisualization';
import { useTheme } from './hooks/useTheme';
import { ScrollProgress } from './components/ui/ScrollProgress';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

const App = () => {
  const { theme, toggleTheme } = useTheme();
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
        <BackgroundVisualization isDarkTheme={theme === 'dark'} />
      </div>

      {/* Header (Navigation Bar) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onThemeToggle={toggleTheme} isDarkTheme={theme === 'dark'} />
      </div>

      {/* Scroll Progress Indicator */}
      <div style={{ position: 'fixed', top: '4rem', left: 0, right: 0, zIndex: 40 }}>
        <ScrollProgress progress={scrollProgress} />
      </div>

      {/* Scroll-to-Top Button */}
      <ScrollToTopButton />

      {/* Main Content */}
      <div className="relative flex flex-col min-h-screen pt-16 pb-24">
        <AnimatePresence mode="wait">
          <motion.main
            key="main"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex-1 pt-8"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Hero isDarkTheme={theme === 'dark'} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <About />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Skills />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Projects />
              </motion.div>
            </div>
          </motion.main>
        </AnimatePresence>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;