import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Banner } from './components/layout/Banner';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { NeuralBackground } from './components/ui/NeuralBackground';
import { NetworkVisualization } from './components/ui/NetworkVisualization';
import { FloatingParticles } from './components/ui/FloatingParticles';
import { useTheme } from './hooks/useTheme';
import { useCountdown } from './hooks/useCountdown';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const countdown = useCountdown('2025-01-13T00:00:00');
  const isDarkTheme = theme === 'dark';

  // Handle initial page load animation
  useEffect(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.opacity = '1';
      document.body.style.transition = 'opacity 0.5s ease-in-out';
    }, 100);
  }, []);

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className={`app min-h-screen ${theme}`}>
      {/* Background Layers */}
      <div className="fixed inset-0 overflow-hidden">
        <NetworkVisualization isDarkTheme={isDarkTheme} />
        <NeuralBackground isDarkTheme={isDarkTheme} />
        <FloatingParticles isDarkTheme={isDarkTheme} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
      </div>

      {/* Page Structure */}
      <div className="relative flex flex-col min-h-screen">
        {/* Fixed Elements */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Banner countdown={countdown} />
          <div className="h-2" />
          <Navigation 
            onThemeToggle={toggleTheme} 
            isDarkTheme={isDarkTheme}
          />
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.main
            key="main"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 pt-32"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Hero />
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

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: typeof window !== 'undefined' 
            ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) 
            : 0 
        }}
      />
    </div>
  );
};

export default App;