import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          © {currentYear} Alex • Built with love
        </p>
      </div>
    </footer>
  );
};

export default Footer;
