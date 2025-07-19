import React, { useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initializeTheme } from './utils/theme';

function App() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <ThemeToggle />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
