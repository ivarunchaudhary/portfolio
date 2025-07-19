import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import CustomSplitText from './CustomSplitText';
import CustomClickSpark from './CustomClickSpark';
import AnimatedBackground from './AnimatedBackground';
import RotatingPolyhedron from './RotatingPolyhedron';

const Hero = () => {
  const heroRef = useRef();
  const nameRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(nameRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(buttonRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <AnimatedBackground />
      
      {/* Hide polyhedron on small screens for performance */}
      <div className="hidden sm:block">
        <RotatingPolyhedron />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div ref={nameRef} className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sora leading-tight">
            <span className="inline-block animate-[fadeIn_0.5s_ease-in-out] opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Hi,</span>{' '}
            <span className="inline-block animate-[fadeIn_0.5s_ease-in-out] opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>I'm</span>{' '}
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-transparent inline-block animate-[fadeIn_0.5s_ease-in-out] opacity-0" 
              style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text', animationDelay: '0.7s', animationFillMode: 'forwards', transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Varun
            </span>
          </h1>
        </div>
        
        <div className="mb-8 sm:mb-12">
          <CustomSplitText
            text="Creative Developer crafting immersive web experiences."
            className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto"
            delay={1200}
            duration={0.6}
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            splitType="words"
            stagger={0.1}
          />
        </div>
        
        <div ref={buttonRef}>
          <CustomClickSpark
            sparkColor="#38bdf8"
            sparkSize={8}
            sparkRadius={25}
            sparkCount={12}
            duration={600}
          >
            <button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/25 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-transparent animate-[fadeIn_0.5s_ease-in-out] opacity-0 relative overflow-hidden group"
              style={{ animationDelay: '1s', animationFillMode: 'forwards', backgroundSize: '200% auto' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.backgroundPosition = 'right center';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundPosition = 'left center';
              }}
            >
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">Explore Work →</span>
            </button>
          </CustomClickSpark>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-500 dark:text-zinc-400">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-current rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
