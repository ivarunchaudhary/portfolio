import React, { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomClickSpark from './CustomClickSpark';

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
      className="group relative h-80 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-900 dark:to-black border border-zinc-700/50 hover:border-fuchsia-500/50 transition-all duration-500"
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
        onClick={(e) => {
          // Toggle flip on touch devices
          const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
          if (isTouchDevice) {
            const currentTransform = e.currentTarget.style.transform;
            e.currentTarget.style.transform = 
              currentTransform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
          }
        }}
      >
        {/* Front side */}
        <div 
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${image})`,
            backfaceVisibility: 'hidden'
          }}
        >
          <h3 className="text-2xl font-bold font-sora text-white text-center px-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-300">
            {title}
          </h3>
        </div>
        
        {/* Back side */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-fuchsia-500/20 to-sky-500/20 backdrop-blur-sm"
          style={{ 
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden'
          }}
        >
          <p className="text-center font-medium text-white mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
          <div className="z-10 relative">
            <CustomClickSpark
              sparkColor="#38bdf8"
              sparkSize={6}
              sparkRadius={20}
              sparkCount={10}
              duration={400}
            >
              <a 
                href={link}
                className="flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 px-4 py-2 rounded-full transition-all duration-300 text-white hover:scale-105"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </CustomClickSpark>
          </div>
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
      title: "Online Chatting Platform",
      description: "A online chatting website for collage students work in progress.",
      link: "https://www.ogadda.com",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop"
    },
    {
      title: "Routien Planner",
      description: "A beautiful, modern web application that gives users a personalized daily summary to start their day right.",
      link: "https://github.com/ivarunchaudhary/routine-planner",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    },
    {
      title: "Stack-it, \n(Drop your question)",
      description: "A modern clone of stack overflow website with more modern ui and features.",
      link: "https://github.com/ivarunchaudhary/odoo",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2wMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAQAGB//EABoQAQEBAAMBAAAAAAAAAAAAAAABEQIhMUH/xAAZAQEBAAMBAAAAAAAAAAAAAAACAwEFBgD/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/APPGVHaUrLEKPWcsUSFIwzCsKJIQsyqxpCgzCqxpFkBnXCiSFILUCsKJIQsyxSNIUBmFiiLgsyRRJCkFZhWLGhSAzCuFEWCtQrITSFgzLkWRY3VzFsWMUnbEwtDxIQrMKyKhQZhWQpEhSCzrCkQoCzC2FI0mlBqBVcQ5BWYWkKJiizliyJCkCYSkVoWC1AtIUaLBWYVKJIQMyUjNFwdmFx5RlxvG5gLQmkKDswtCjSKM8rCSEC1ArCSFIKyCsJMWC1AlFaLBWYVkKNJ0oLMKxY0WQVmFZDiRRWYWhxIWC1ArFjQpAWeVhNFgswrIrRRqBccUiSFG8uXKyFEKQVmFSk6SELMtDkSRYEwrCkSQ4LULcYWNFFkWhyJIUFqBVcaRcBmFZDgwwahaQpEkKDMKyK0KQVmFpDkSQsBmFpCkaQoO1C0iquDUC46REKN43LFYUQoNQLQokOQWZaEkKAzKwokhjMssZZBZhKLGi4KzKlIkKQJhWQohSA1C0hxlxhZhaQo0hSAzK/FiQ5BagWKMUFqFoTSKEwuOkJIsb25cKyFI0XAZlZCiQhkFZCiFIFQKyEhSMMgtCaRQqBWQkhSAzC0hyJCFagWkOJIWDMLQo0WAzlISRYOzCshSJCkFqBUokhSDUCsisQyLjSiQm8W5kKwkhDIKxZGiwVnkoSQoDMtCiQowswqrQgWYWkOJCBagWLikMZhaFGiyAtQKyFIkIdkFsONFgtQKxZ60KCtQKwkhQZhaFjSKCzC42Q5EkKN5cvWRWkIVmFocgyGMwtCkTCkFZhWK0hYCzCmHIkODUC0hRIUgLMKyFEhCtQKyFIkKQJFsKRoQ7UCsiz1pFkYWYSkKRIQNQsUiYUgNQKwsaLjFQuNkKRDjeXKhaFJrYUgMyyxljEwlCSFBahZY0KQGYVkKJCgMwtIcQhZhaFIkODOxMUgNQKyLGhQZhbDiFBqBaEhC1ArFjQgmVkVouDO42HGZvW5YlCZhmVhRmBmShRmBmVhRmYqEoUZgmTixmFmSk6OMwTKwmZioShRWBqEijMMysJmCoShRmFmSJmGV/9k="
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
          className="text-4xl md:text-5xl font-bold font-sora text-center mb-16 text-float-hover"
        >
          Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
