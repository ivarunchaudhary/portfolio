import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomClickSpark from './CustomClickSpark';
import CustomSplitText from './CustomSplitText';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef();
  const headingRef = useRef();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={contactRef} className="py-16 sm:py-20 px-4">
      <div className="max-w-xl sm:max-w-2xl mx-auto">
        <CustomSplitText
          text="Get in Touch"
          className="text-4xl md:text-5xl font-bold font-sora text-center mb-16"
          delay={0}
          duration={0.8}
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          splitType="words"
          stagger={0.2}
          triggerOnScroll={true}
        />
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 transition-all duration-300 outline-none"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 transition-all duration-300 outline-none"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 transition-all duration-300 outline-none resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          
          <CustomClickSpark
            sparkColor="#d946ef"
            sparkSize={10}
            sparkRadius={30}
            sparkCount={15}
            duration={600}
          >
            <button
              type="submit"
              className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-fuchsia-500/25 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Send Message
            </button>
          </CustomClickSpark>
        </form>
        
        <div className="text-center mt-12">
          <p className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-300">
            Or reach out directly at{' '}
            <a 
              href="mailto:varunjat640@gmail.com" 
              className="text-fuchsia-400 hover:text-fuchsia-500 hover:scale-105 inline-block transition-all duration-300 hover:underline decoration-2 underline-offset-4"
            >
              varunjat640@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
