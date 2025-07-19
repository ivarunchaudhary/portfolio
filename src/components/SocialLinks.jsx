import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const SocialLinks = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const socialLinks = [
    { icon: <Github />, url: "https://github.com/ivarunchaudhary", name: "GitHub", color: "#333" },
    { icon: <Twitter />, url: "https://x.com/imvarunjaat", name: "Twitter", color: "#1DA1F2" },
    { icon: <Linkedin />, url: "https://www.linkedin.com/in/varun-singh-445257290/", name: "LinkedIn", color: "#0A66C2" },
    { icon: <Instagram />, url: "https://www.instagram.com/ivarundhankar/", name: "Instagram", color: "#E4405F" }
  ];

  return (
    <div className="fixed left-4 sm:left-6 bottom-20 z-40">
      {/* Connect with me message */}
      <div className={`transition-all duration-500 mb-4 ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        <div className="bg-gradient-to-r from-fuchsia-500/10 to-sky-500/10 backdrop-blur-md border border-fuchsia-400/30 rounded-lg px-3 py-2 text-sm font-medium text-fuchsia-300">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Connect with me!
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 flex items-center justify-center shadow-lg hover:shadow-fuchsia-500/50 transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className={`w-6 h-6 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Social links */}
      <div className={`flex flex-col gap-3 transition-all duration-500 ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        {socialLinks.map((link, index) => (
          <a 
            href={link.url}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            style={{
              '--animation-delay': `${index * 0.1}s`,
              transitionDelay: isExpanded ? `${index * 0.1}s` : '0s'
            }}
            className="social-icon-link group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-fuchsia-400/50 hover:bg-white/20 transition-all duration-300"
          >
            <span className="text-zinc-400 group-hover:text-fuchsia-400 transition-colors duration-300">
              {link.icon}
            </span>
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 transform translate-x-full opacity-0 group-hover:opacity-100 bg-zinc-800 text-white text-xs px-2 py-1 rounded pointer-events-none transition-opacity duration-300 whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
