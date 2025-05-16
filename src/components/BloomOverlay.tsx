
import { useEffect, useRef } from "react";
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
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Fully transparent background
    canvasRef.current.appendChild(renderer.domElement);

    // Position camera
    camera.position.z = 1;
    
    // Create a full-screen quad but make it nearly invisible
    // We'll use the bloom effect on this almost-invisible quad
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,
      transparent: true,
      opacity: 0.03 // Very low opacity, almost invisible
    });
    const quad = new THREE.Mesh(geometry, material);
    scene.add(quad);
    
    // Set up post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    
    // Add bloom effect with adjusted parameters
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.2,  // Increased intensity
      0.5,  // Increased radius for a wider glow
      0.1   // Lower threshold to make more elements bloom
    );
    composer.addPass(bloomPass);
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      composer.setSize(width, height);
      
      // Update the camera
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener("resize", handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
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
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-50"
      style={{ 
        pointerEvents: "none",
        mixBlendMode: "screen"
      }}
    />
  );
};
