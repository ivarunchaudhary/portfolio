import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-300">
          © {currentYear}{' '}
          <span className="hover:text-fuchsia-400 transition-colors duration-300 cursor-default">Varun</span>
          {' '}• Built with{' '}
          <span className="hover:text-red-400 transition-colors duration-300 cursor-default">love</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
