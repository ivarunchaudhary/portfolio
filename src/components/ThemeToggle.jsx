import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { initializeTheme, toggleTheme } from '../utils/theme';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = initializeTheme();
    setTheme(currentTheme);
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 sm:top-6 right-4 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-fuchsia-500 backdrop-blur-md border-2 border-white/40 hover:bg-fuchsia-600 transition-all duration-300 flex items-center justify-center group shadow-xl shadow-fuchsia-500/20"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Sun className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
