import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomSplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 0.8,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  splitType = 'chars',
  stagger = 0.05,
  triggerOnScroll = false,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll('.split-element');

    if (elements.length === 0) return;

    // Set initial state
    gsap.set(elements, from);

    const timeline = gsap.timeline({
      delay: delay / 1000,
      scrollTrigger: triggerOnScroll ? {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      } : false
    });

    timeline.to(elements, {
      ...to,
      duration,
      stagger,
      ease: 'power3.out'
    });

    return () => {
      if (triggerOnScroll) {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === container) {
            trigger.kill();
          }
        });
      }
    };
  }, [text, delay, duration, from, to, stagger, triggerOnScroll]);

  const splitText = () => {
    if (!text) return [];

    if (splitType === 'chars') {
      return text.split('').map((char, index) => (
        <span key={index} className="split-element inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (splitType === 'words') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="split-element inline-block mr-2">
          {word}
        </span>
      ));
    }

    return [<span key={0} className="split-element">{text}</span>];
  };

  return (
    <div ref={containerRef} className={className}>
      {splitText()}
    </div>
  );
};

export default CustomSplitText;
