import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import RotatingPolyhedron from './RotatingPolyhedron';
import CustomSplitText from './CustomSplitText';
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import CustomClickSpark from './CustomClickSpark';
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
    <section ref={heroRef} className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <AnimatedBackground variant="particles" />
      
      {/* Rotating Polyhedron - Hidden on very small screens for performance */}
      <div className="hidden sm:block">
        <RotatingPolyhedron />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <div className="mb-4 sm:mb-6">
          <CustomSplitText
            text="Hi, I'm "
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-sora inline-block"
            delay={500}
            duration={0.8}
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            splitType="chars"
            stagger={0.1}
          />
          <span className="text-3xl sm:text-5xl md:text-7xl font-bold font-sora inline-block ml-1 sm:ml-2 text-sky-400 hover:text-fuchsia-400 transition-colors duration-300 cursor-default hover:scale-105 transform">
            Varun
          </span>
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
        
        <CustomClickSpark
          sparkColor="#d946ef"
          sparkSize={8}
          sparkRadius={25}
          sparkCount={12}
          duration={500}
        >
          <button 
            ref={buttonRef}
            onClick={scrollToNext}
            className="group bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25 flex items-center gap-3 mx-auto"
          >
            Explore Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </CustomClickSpark>
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
