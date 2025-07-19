import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomSplitText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  stagger = 0.05,
  triggerOnScroll = false,
  threshold = 0.1,
  rootMargin = "-100px"
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Split text into spans
    const words = text.split(' ');
    const chars = text.split('');
    
    let elementsToAnimate = [];
    
    if (splitType === 'words') {
      element.innerHTML = words.map(word => 
        `<span style="display: inline-block; overflow: hidden;"><span style="display: inline-block;">${word}&nbsp;</span></span>`
      ).join('');
      elementsToAnimate = element.querySelectorAll('span > span');
    } else if (splitType === 'chars') {
      element.innerHTML = chars.map(char => 
        char === ' ' ? ' ' : `<span style="display: inline-block; overflow: hidden;"><span style="display: inline-block;">${char}</span></span>`
      ).join('');
      elementsToAnimate = element.querySelectorAll('span > span');
    }

    // Set initial state
    gsap.set(elementsToAnimate, from);

    // Create animation
    const tl = gsap.timeline({ delay });

    if (triggerOnScroll) {
      tl.to(elementsToAnimate, {
        ...to,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    } else {
      tl.to(elementsToAnimate, {
        ...to,
        duration,
        ease,
        stagger
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [text, delay, duration, ease, splitType, from, to, stagger, triggerOnScroll]);

  return (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
};

export default CustomSplitText;
