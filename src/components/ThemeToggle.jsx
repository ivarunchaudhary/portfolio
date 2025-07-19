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
      className="fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-zinc-800 group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Sun className="w-5 h-5 text-zinc-200 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
