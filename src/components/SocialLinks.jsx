import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: <Github />, url: "https://github.com/ivarunchaudhary", name: "GitHub", color: "#333" },
    { icon: <Twitter />, url: "https://x.com/imvarunjaat", name: "Twitter", color: "#1DA1F2" },
    { icon: <Linkedin />, url: "https://www.linkedin.com/in/varun-singh-445257290/", name: "LinkedIn", color: "#0A66C2" },
    { icon: <Instagram />, url: "https://www.instagram.com/ivarundhankar/", name: "Instagram", color: "#E4405F" }
  ];

  return (
    <div className="fixed left-4 sm:left-6 bottom-1/3 z-40 flex flex-col gap-4">
      {socialLinks.map((link, index) => (
        <a 
          href={link.url}
          key={link.name}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          style={{
            '--animation-delay': `${index * 0.1}s`,
            '--icon-color': link.color,
          }}
          className="social-icon-link group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-fuchsia-400/50 hover:bg-white/20 transition-all duration-300 animate-social-appear"
          data-tooltip={link.name}
        >
          <span className="text-zinc-400 group-hover:text-fuchsia-400 transition-colors duration-300">
            {link.icon}
          </span>
          <span className="absolute -right-2 top-1/2 -translate-y-1/2 transform translate-x-full opacity-0 group-hover:opacity-100 bg-zinc-800 text-white text-xs px-2 py-1 rounded pointer-events-none transition-opacity duration-300">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
