"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HanumanCanvasClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.09);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0.2, 6.5);

    scene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(4, 4, 5);
    scene.add(keyLight);

    const rim = new THREE.PointLight(0xf47c20, 4, 14);
    rim.position.set(-2, 1, 2);
    scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0xf47c20,
      emissive: 0x351400,
      roughness: 0.3,
      metalness: 0.7,
    });

    const ring = new THREE.Mesh(new THREE.TorusKnotGeometry(1.2, 0.24, 160, 16), knotMaterial);
    group.add(ring);

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x2a2a2a,
      roughness: 0.25,
      metalness: 0.2,
    });
    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(0.68, 1), coreMaterial);
    group.add(sphere);

    const particles = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.04 }),
    );

    const particlePositions = new Float32Array(180 * 3);
    for (let index = 0; index < 180; index += 1) {
      particlePositions[index * 3] = (Math.random() - 0.5) * 10;
      particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 8;
      particlePositions[index * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    particles.geometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
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

    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const startDrag = (x: number, y: number) => {
      dragging = true;
      lastX = x;
      lastY = y;
    };

    const endDrag = () => {
      dragging = false;
    };

    const moveDrag = (x: number, y: number) => {
      if (!dragging) {
        return;
      }

      group.rotation.y += (x - lastX) * 0.004;
      group.rotation.x += (y - lastY) * 0.002;
      lastX = x;
      lastY = y;
    };

    const onMouseDown = (event: MouseEvent) => startDrag(event.clientX, event.clientY);
    const onMouseMove = (event: MouseEvent) => moveDrag(event.clientX, event.clientY);
    const onTouchStart = (event: TouchEvent) =>
      startDrag(event.touches[0].clientX, event.touches[0].clientY);
    const onTouchMove = (event: TouchEvent) =>
      moveDrag(event.touches[0].clientX, event.touches[0].clientY);

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", endDrag);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", endDrag);

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      ring.rotation.x = elapsed * 0.5;
      ring.rotation.y += 0.003;
      sphere.rotation.y = elapsed * 0.35;
      group.position.y = Math.sin(elapsed * 0.7) * 0.18;
      particles.rotation.y = elapsed * 0.04;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", endDrag);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("touchstart", onTouchStart);
      ring.geometry.dispose();
      sphere.geometry.dispose();
      knotMaterial.dispose();
      coreMaterial.dispose();
      particles.geometry.dispose();
      particles.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
}
