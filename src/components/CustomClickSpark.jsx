import React, { useRef, useEffect } from 'react';

const CustomClickSpark = ({ 
  children, 
  sparkColor = "#d946ef", 
  sparkSize = 8, 
  sparkRadius = 25, 
  sparkCount = 12,
  duration = 500 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create sparks
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
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
        const angle = (i / sparkCount) * 2 * Math.PI;
        const distance = Math.random() * sparkRadius + 10;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;

        spark.animate([
          {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 1
          },
          {
            transform: `translate(${endX - x - sparkSize/2}px, ${endY - y - sparkSize/2}px) scale(0)`,
            opacity: 0
          }
        ], {
          duration: duration,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
          if (spark.parentNode) {
            spark.parentNode.removeChild(spark);
          }
        };
      }
    };

    container.addEventListener('click', handleClick);

    return () => {
      container.removeEventListener('click', handleClick);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  return (
    <div ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
      {children}
    </div>
  );
};

export default CustomClickSpark;
