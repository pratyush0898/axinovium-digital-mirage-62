
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BloomEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Set up scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;
    
    // Add glowing particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 150; // Increased particle count from 50 to 150
    const posArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      // Random positions across the entire screen
      posArray[i] = (Math.random() - 0.5) * 2;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.025, // Increased size from 0.012 to 0.025
      color: 0xffffff,
      transparent: true,
      opacity: 0.8 // Increased opacity from 0.6 to 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Increased rotation speed for more noticeable movement
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0004;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return <canvas ref={canvasRef} className="bloom-canvas" />;
};

export default BloomEffect;
