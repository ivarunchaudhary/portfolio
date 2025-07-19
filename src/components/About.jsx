import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  const headingRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold font-sora mb-12"
        >
          About Me
        </h2>
        
        <div ref={contentRef} className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            I'm a passionate developer who bridges the gap between{' '}
            <span className="text-fuchsia-400 font-semibold">design</span> and{' '}
            <span className="text-sky-400 font-semibold">technology</span>. 
            With over 5 years of experience creating digital experiences, 
            I specialize in building interactive web applications that not only look stunning 
            but also provide exceptional user experiences.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            My expertise spans across modern web technologies, 3D graphics, and emerging tech like 
            WebXR and AR. When I'm not coding, you'll find me exploring new creative technologies 
            or contributing to open-source projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['React', 'Three.js', 'WebGL', 'Node.js', 'TypeScript', 'GSAP'].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
