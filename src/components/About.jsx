import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomSplitText from './CustomSplitText';

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
    <section id="about" ref={aboutRef} className="py-16 sm:py-20 px-4">
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto text-center">
        <CustomSplitText
          text="About Me"
          className="text-4xl md:text-5xl font-bold font-sora mb-12"
          delay={0}
          duration={0.8}
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          splitType="chars"
          stagger={0.1}
          triggerOnScroll={true}
        />
        
        <div ref={contentRef} className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-300">
            I'm Varun Chaudhary — a curious engineer, passionate builder, and startup enthusiast on a mission to solve real-world problems through tech. I love bridging{' '}
            <span className="text-fuchsia-400 font-semibold hover:text-fuchsia-300 hover:scale-105 inline-block transition-all duration-300 cursor-default">creativity</span> with{' '}
            <span className="text-sky-400 font-semibold hover:text-sky-300 hover:scale-105 inline-block transition-all duration-300 cursor-default">code</span> to create meaningful, user-centric digital experiences.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-300">
            Currently a first-year engineering student at IILM University Gurugram<br />
            Participated in many hackathons<br />
            <span className="text-fuchsia-400 font-bold inline-block relative px-1 py-0.5 bg-fuchsia-400/5 rounded border border-fuchsia-400/20 transform hover:scale-105 transition-all duration-300">
              SIH 2024 finalist
            </span><br />
            I'm especially driven by open-source, fast prototyping, and combining AI with intuitive UI/UX.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-300">
            When I'm not coding, I'm usually brainstorming startup ideas or diving into hackathons.
          </p>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Tech I Use:</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-md mx-auto">
              {['React Native', 'Supabase', 'Node.js', 'Tailwind CSS', 'n8n', 'TypeScript', 'GPT APIs', 'Firebase', 'Figma'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-fuchsia-400/30 hover:text-fuchsia-400 hover:scale-110 transform transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-fuchsia-500/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
