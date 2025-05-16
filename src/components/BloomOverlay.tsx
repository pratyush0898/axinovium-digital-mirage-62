
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export const BloomOverlay = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = null; // Ensure transparent background
    
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      premultipliedAlpha: false // This helps with transparent backgrounds
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Fully transparent background
    renderer.autoClear = true;
    
    // Append canvas to the DOM
    canvasRef.current.appendChild(renderer.domElement);
    
    // Apply CSS directly to the canvas for proper blending
    renderer.domElement.style.mixBlendMode = "screen";
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.pointerEvents = "none";

    // Position camera
    camera.position.z = 1;
    
    // Create very subtle glowing elements instead of a full screen quad
    const createGlowingElements = () => {
      // Create a few small glowing points at different positions
      const createGlowPoint = (x: number, y: number, size = 0.05, intensity = 0.25) => {
        const geometry = new THREE.CircleGeometry(size, 16);
        const material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: intensity, 
          blending: THREE.AdditiveBlending
        });
        const point = new THREE.Mesh(geometry, material);
        point.position.set(x, y, 0);
        scene.add(point);
        return { point, material, geometry };
      };

      // Create several subtle glow points at different positions
      const glowPoints = [
        createGlowPoint(-0.8, 0.8, 0.03, 0.15),
        createGlowPoint(0.8, -0.5, 0.04, 0.2),
        createGlowPoint(0.5, 0.6, 0.02, 0.15),
        createGlowPoint(-0.5, -0.7, 0.03, 0.15),
        createGlowPoint(0, 0, 0.01, 0.1)
      ];
      
      return glowPoints;
    };
    
    const glowElements = createGlowingElements();
    
    // Set up post-processing
    const composer = new EffectComposer(renderer);
    composer.renderToScreen = true;
    
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    
    // Add bloom effect with subtle parameters
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.8,  // Intensity - reduced to be more subtle
      0.65, // Radius - increased for a wider, softer glow
      0.2   // Threshold - raised to only make brighter elements bloom
    );
    composer.addPass(bloomPass);
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      composer.setSize(width, height);
      
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener("resize", handleResize);
    
    // Animation loop with subtle movements
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Add subtle animation to glow points
      const time = Date.now() * 0.001;
      glowElements.forEach(({ point }, i) => {
        const speed = 0.2 + (i * 0.1);
        point.position.x += Math.sin(time * speed) * 0.0015;
        point.position.y += Math.cos(time * speed + i) * 0.001;
      });
      
      composer.render();
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      
      if (canvasRef.current && renderer.domElement) {
        try {
          canvasRef.current.removeChild(renderer.domElement);
        } catch (e) {
          console.error("Error removing renderer element:", e);
        }
      }
      
      // Clean up all resources
      renderer.dispose();
      
      glowElements.forEach(({ material, geometry }) => {
        material.dispose();
        geometry.dispose();
      });
      
      composer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
};
