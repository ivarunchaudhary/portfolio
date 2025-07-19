import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CanvasScene = () => {
  const canvasRef = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const icosahedronRef = useRef();
  const starsRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true, 
      alpha: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create icosahedron
    const icosahedronGeometry = new THREE.IcosahedronGeometry(2, 0);
    const icosahedronMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xd946ef, 
      wireframe: true 
    });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
    scene.add(icosahedron);
    icosahedronRef.current = icosahedron;

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 1000;
    const positions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({ 
      color: 0x38bdf8, 
      size: 0.5 
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    starsRef.current = stars;

    // Position camera
    camera.position.z = 8;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (icosahedronRef.current) {
        icosahedronRef.current.rotation.x += 0.005;
        icosahedronRef.current.rotation.y += 0.01;
      }

      if (starsRef.current) {
        starsRef.current.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default CanvasScene;
