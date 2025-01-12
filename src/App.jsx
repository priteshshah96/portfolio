import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { AllProjects } from './components/sections/AllProjects';
import { BackgroundVisualization } from './components/ui/BackgroundVisualization';
import { useTheme } from './hooks/useTheme';
import { ScrollProgress } from './components/ui/ScrollProgress';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

const ScrollToTopOnNavigation = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
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
    <BrowserRouter>
      <ScrollToTopOnNavigation />
      <div className={`app min-h-screen ${theme}`}>
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <BackgroundVisualization isDarkTheme={theme === 'dark'} />
        </div>

        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navigation onThemeToggle={toggleTheme} isDarkTheme={theme === 'dark'} />
        </div>

        {/* Scroll Progress */}
        <div
          style={{
            position: 'fixed',
            top: '4.5rem', // Adjusted spacing between header and progress bar
            left: 0,
            right: 0,
            height: '4px', // Ensure a visible height for the progress bar
            zIndex: 9999, // High z-index to make sure it appears above other elements
          }}
        >
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
              <Routes>
                {/* Render Home Sections */}
                <Route
                  path="/"
                  element={
                    <div className="container mx-auto px-4">
                      {/* Hero Section */}
                      <section id="hero">
                        <Hero isDarkTheme={theme === 'dark'} />
                      </section>

                      {/* About Section */}
                      <section id="about">
                        <About />
                      </section>

                      {/* Skills Section */}
                      <section id="skills">
                        <Skills />
                      </section>

                      {/* Featured Projects Section */}
                      <section id="projects">
                        <FeaturedProjects />
                      </section>
                    </div>
                  }
                />

                {/* Render All Projects Page */}
                <Route path="/all-projects" element={<AllProjects />} />
              </Routes>
            </motion.main>
          </AnimatePresence>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
