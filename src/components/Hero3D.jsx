import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Sculpture({ mousePosition, reducedMotion }) {
  const groupRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    if (reducedMotion || !groupRef.current) return;

    // Gentle slow continuous rotation
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x += delta * 0.05;

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.08;
      innerRef.current.rotation.z += delta * 0.06;
    }

    // Subtle parallax reaction to mouse (3-8px feel / slight angle offset)
    const targetX = mousePosition.x * 0.25;
    const targetY = -mousePosition.y * 0.25;

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Outer subtle metallic wireframe icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#888888"
          roughness={0.35}
          metalness={0.9}
          wireframe
          wireframeLinewidth={1}
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Mid faceted dark metallic structure */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#333333"
          roughness={0.4}
          metalness={0.85}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Minimal dark metallic core */}
      <mesh>
        <dodecahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial
          color="#1A1A1A"
          roughness={0.6}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    // Check basic WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handler);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div className="w-full h-full pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'low-power'
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 5, 2]} intensity={1.2} color="#E0E0E0" />
        <directionalLight position={[-4, -3, -2]} intensity={0.4} color="#666666" />
        <Sculpture mousePosition={mousePosition} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
