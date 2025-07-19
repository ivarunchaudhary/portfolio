import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
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
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

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
    // Clear status when user starts typing
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }
    
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email.' });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message.' });
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration - You'll need to replace these with your actual values
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // You need to create an EmailJS account and get this
        'YOUR_TEMPLATE_ID', // You need to create a template and get this
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'varunjat640@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // You need to get this from EmailJS
      );

      setStatus({ 
        type: 'success', 
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact me directly at varunjat640@gmail.com' 
      });
    } finally {
      setIsLoading(false);
    }
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
        
        {/* Status Message */}
        {status.message && (
          <div className={`mb-6 p-4 rounded-lg border ${
            status.type === 'success' 
              ? 'bg-green-500/10 border-green-500/30 text-green-400' 
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}>
            {status.message}
          </div>
        )}
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 text-reveal-hover">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 transition-all duration-300 outline-none disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 transition-all duration-300 outline-none disabled:opacity-50"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
              rows={5}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 transition-all duration-300 outline-none resize-none disabled:opacity-50"
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
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white font-medium rounded-lg hover:from-fuchsia-600 hover:to-sky-600 transition-all duration-300 flex items-center justify-center text-float-hover"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
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
