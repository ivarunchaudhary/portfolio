import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ variant = 'mesh' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let time = 0;
    const particles = [];
    const particleCount = variant === 'particles' ? 150 : 0;

    // Initialize particles for particle variant
    if (variant === 'particles') {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      if (variant === 'mesh') {
        // Animated gradient mesh
        const gradient1 = ctx.createRadialGradient(
          canvas.width * 0.3 + Math.sin(time) * 100,
          canvas.height * 0.3 + Math.cos(time) * 80,
          0,
          canvas.width * 0.3,
          canvas.height * 0.3,
          canvas.width * 0.8
        );
        gradient1.addColorStop(0, 'rgba(212, 70, 239, 0.1)');
        gradient1.addColorStop(1, 'rgba(56, 189, 248, 0.05)');

        const gradient2 = ctx.createRadialGradient(
          canvas.width * 0.7 + Math.cos(time * 1.2) * 120,
          canvas.height * 0.7 + Math.sin(time * 1.2) * 100,
          0,
          canvas.width * 0.7,
          canvas.height * 0.7,
          canvas.width * 0.6
        );
        gradient2.addColorStop(0, 'rgba(56, 189, 248, 0.1)');
        gradient2.addColorStop(1, 'rgba(212, 70, 239, 0.05)');

        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';

      } else if (variant === 'particles') {
        // Animated particles
        particles.forEach((particle, index) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          // Draw particle
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = index % 2 === 0 ? '#d946ef' : '#38bdf8';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // Draw connections
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 100) {
                ctx.save();
                ctx.globalAlpha = (100 - distance) / 100 * 0.1;
                ctx.strokeStyle = '#d946ef';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
                ctx.restore();
              }
            }
          });
        });

      } else if (variant === 'waves') {
        // Animated waves
        ctx.strokeStyle = 'rgba(212, 70, 239, 0.1)';
        ctx.lineWidth = 2;
        
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          for (let x = 0; x < canvas.width; x += 5) {
            const y = canvas.height / 2 + 
              Math.sin((x * 0.01) + (time * 2) + (i * 0.5)) * (50 + i * 20) +
              Math.sin((x * 0.005) + (time * 1.5) + (i * 0.3)) * (30 + i * 10);
            
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }

        // Second wave set
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          for (let x = 0; x < canvas.width; x += 5) {
            const y = canvas.height / 3 + 
              Math.cos((x * 0.008) + (time * 1.8) + (i * 0.7)) * (40 + i * 15) +
              Math.cos((x * 0.003) + (time * 1.2) + (i * 0.4)) * (25 + i * 8);
            
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default AnimatedBackground;
