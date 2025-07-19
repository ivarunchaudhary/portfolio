import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-zinc-800/50 dark:border-zinc-200/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-300">
          © {new Date().getFullYear()} Varun Chaudhary. Made by 🩷.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
