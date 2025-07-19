import React, { useRef, useEffect } from 'react';

const RotatingPolyhedron = () => {
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

    // Icosahedron vertices (normalized to unit sphere)
    const t = (1.0 + Math.sqrt(5.0)) / 2.0; // Golden ratio
    const vertices = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
    ];

    // Normalize vertices
    vertices.forEach(vertex => {
      const length = Math.sqrt(vertex[0] * vertex[0] + vertex[1] * vertex[1] + vertex[2] * vertex[2]);
      vertex[0] /= length;
      vertex[1] /= length;
      vertex[2] /= length;
    });

    // Icosahedron faces (triangles)
    const faces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
    ];

    let rotationX = 0;
    let rotationY = 0;
    const scale = 200; // Size of the polyhedron

    // 3D to 2D projection
    const project = (vertex) => {
      const [x, y, z] = vertex;
      
      // Apply rotations
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      // Rotate around X axis
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Rotate around Y axis
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      // Project to 2D (simple orthographic projection)
      const screenX = canvas.width / 2 + x2 * scale;
      const screenY = canvas.height / 2 + y1 * scale;

      return [screenX, screenY, z2];
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update rotation
      rotationX += 0.005;
      rotationY += 0.008;

      // Project all vertices
      const projectedVertices = vertices.map(project);

      // Draw faces (wireframe)
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.3)'; // gray-400 with opacity
      ctx.lineWidth = 1;

      faces.forEach(face => {
        const [a, b, c] = face;
        const [x1, y1, z1] = projectedVertices[a];
        const [x2, y2, z2] = projectedVertices[b];
        const [x3, y3, z3] = projectedVertices[c];

        // Simple backface culling (optional)
        const avgZ = (z1 + z2 + z3) / 3;
        if (avgZ > -0.5) { // Only draw faces facing towards camera
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.closePath();
          ctx.stroke();
        }
      });

      // Draw vertices as small dots
      ctx.fillStyle = 'rgba(156, 163, 175, 0.6)';
      projectedVertices.forEach(([x, y, z]) => {
        if (z > -0.5) { // Only draw vertices facing towards camera
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default RotatingPolyhedron;
