import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import RotatingPolyhedron from './RotatingPolyhedron';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <AnimatedBackground variant="particles" />
      
      {/* Rotating Polyhedron */}
      <RotatingPolyhedron />
      
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold font-sora mb-6"
        >
          Hi, I'm <span className="text-fuchsia-500">Alex</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-12 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
        >
          Creative Developer crafting immersive web experiences.
        </p>
        
        <button 
          ref={buttonRef}
          onClick={scrollToNext}
          className="group bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25 flex items-center gap-3 mx-auto"
        >
          Explore Work
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-500 dark:text-zinc-400">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
