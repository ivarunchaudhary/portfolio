import React, { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, description, link, image, index }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="group relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-900 dark:to-black border border-zinc-700/50 hover:border-fuchsia-500/50 transition-all duration-500"
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700" 
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'rotateY(0deg)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(180deg)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateY(0deg)'}
      >
        {/* Front side */}
        <div 
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${image})`,
            backfaceVisibility: 'hidden'
          }}
        >
          <h3 className="text-2xl font-bold font-sora text-white text-center px-6">
            {title}
          </h3>
        </div>
        
        {/* Back side */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-fuchsia-500/20 to-sky-500/20 backdrop-blur-sm"
          style={{ 
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden'
          }}
        >
          <p className="text-center text-zinc-200 mb-6 leading-relaxed">
            {description}
          </p>
          <a 
            href={link}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full transition-all duration-300 text-white hover:scale-105"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsRef = useRef();
  const headingRef = useRef();

  const projects = [
    {
      title: "Code Visualizer",
      description: "Interactive WebGL-powered code visualization tool that transforms algorithms into beautiful 3D representations in real-time.",
      link: "#",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    },
    {
      title: "Mobile App",
      description: "Cutting-edge React Native application featuring AR capabilities for immersive user experiences and seamless cross-platform functionality.",
      link: "#",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    },
    {
      title: "VR Tour",
      description: "Revolutionary Three.js and WebXR virtual reality experience that transports users through interactive 3D environments.",
      link: "#",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold font-sora text-center mb-16"
        >
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
