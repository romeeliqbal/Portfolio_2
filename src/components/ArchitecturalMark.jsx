import React, { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function ArchitecturalMark() {
  const wrapRef = useRef(null);
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: -16, y: 22 });

  const onMove = (event) => {
    if (reduce || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -16 - py * 8, y: 22 + px * 12 });
  };

  const onLeave = () => setTilt({ x: -16, y: 22 });

  if (reduce) {
    return (
      <div
        className="arch-fallback border border-border"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="arch-stage"
      aria-hidden="true"
    >
      <div
        className="arch-scene"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="arch-plane arch-floor" />
        <div className="arch-plane arch-wall-back" />
        <div className="arch-plane arch-wall-left" />
        <div className="arch-slab arch-slab-a" />
        <div className="arch-slab arch-slab-b" />
        <div className="arch-slab arch-slab-c" />
        <div className="arch-accent" />
      </div>
    </div>
  );
}
