import React, { useRef, useCallback } from 'react';

const CustomClickSpark = ({ 
  children, 
  sparkColor = '#d946ef',
  sparkCount = 8,
  sparkSize = 6,
  sparkRadius = 20,
  duration = 400 
}) => {
  const containerRef = useRef(null);

  const createSpark = useCallback((x, y) => {
    const container = containerRef.current;
    if (!container) return;

    // Create sparks
    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('div');
      const angle = (Math.PI * 2 * i) / sparkCount;
      const distance = sparkRadius + Math.random() * 10;
      
      spark.style.position = 'absolute';
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.width = `${sparkSize}px`;
      spark.style.height = `${sparkSize}px`;
      spark.style.backgroundColor = sparkColor;
      spark.style.borderRadius = '50%';
      spark.style.pointerEvents = 'none';
      spark.style.zIndex = '1000';
      spark.style.transform = 'translate(-50%, -50%)';
      
      container.appendChild(spark);

      // Animate spark
      const animation = spark.animate([
        {
          opacity: 1,
          transform: 'translate(-50%, -50%) scale(1)',
        },
        {
          opacity: 0,
          transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(0)`,
        }
      ], {
        duration: duration,
        easing: 'ease-out'
      });

      animation.onfinish = () => {
        if (spark.parentNode) {
          spark.parentNode.removeChild(spark);
        }
      };
    }
  }, [sparkColor, sparkCount, sparkSize, sparkRadius, duration]);

  const handleClick = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    createSpark(x, y);
  }, [createSpark]);

  return (
    <div 
      ref={containerRef} 
      onClick={handleClick}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
    </div>
  );
};

export default CustomClickSpark;
