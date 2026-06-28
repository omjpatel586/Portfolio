"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND = 0xf47c20;

export default function HanumanCanvasClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const group = new THREE.Group();
    scene.add(group);

    // Faint on-brand wireframe sphere — a quiet backdrop texture, not a focal object.
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: BRAND,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(2.6, 2), sphereMaterial);
    group.add(sphere);

    // Drifting orange particles for subtle depth.
    const PARTICLE_COUNT = 160;
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      particlePositions[index * 3] = (Math.random() - 0.5) * 12;
      particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 9;
      particlePositions[index * 3 + 2] = (Math.random() - 0.5) * 9;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: BRAND,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const resize = () => {
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      group.rotation.y = elapsed * 0.06;
      group.rotation.x = Math.sin(elapsed * 0.15) * 0.1;
      particles.rotation.y = elapsed * 0.02;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      sphere.geometry.dispose();
      sphereMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
}
