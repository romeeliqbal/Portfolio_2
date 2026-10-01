import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import portraitImg from "../assets/portrait.jpg";

// Lazy-load Three.js 3D component to keep initial load instantaneous
const Hero3D = lazy(() => import("./Hero3D"));

// Purposeful geometric skeleton state while Three.js loads
function Hero3DSkeleton() {
  return (
    <div
      className="w-full h-full border border-[#222222] bg-[#0E0E0E] flex flex-col items-center justify-center gap-2 select-none"
      aria-hidden="true"
    >
      <div className="w-8 h-8 border border-[#333333] rotate-45 animate-pulse" />
      <span className="text-[8px] font-mono tracking-spacious text-[#555555] uppercase">
        GEOMETRY_READY
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient editorial grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between">
        <div className="w-[1px] h-full bg-[#2A2A2A]" />
        <div className="w-[1px] h-full bg-[#2A2A2A] hidden md:block" />
        <div className="w-[1px] h-full bg-[#2A2A2A] hidden lg:block" />
        <div className="w-[1px] h-full bg-[#2A2A2A]" />
      </div>

      {/* Main Hero Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto relative z-10">
        {/* Left / Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Metadata pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#121418] border border-border text-[11px] font-mono tracking-editorial uppercase text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </div>
          </motion.div>

          {/* Large Editorial Headline */}
          <div className="relative inline-block mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight leading-[0.92] uppercase select-none"
            >
              <span className="editorial-display-text block">Romeel</span>
              <span className="editorial-display-subtext block">Iqbal</span>
            </motion.h1>
          </div>

          {/* Subtitle & Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-lg sm:text-xl font-heading font-semibold tracking-tight text-text-primary mb-2">
              SOFTWARE ENGINEER &bull; FULL-STACK &bull; MUET
            </h2>
            <p className="text-xs font-mono tracking-editorial uppercase text-text-muted">
              Web Architecture &bull; Intelligent Systems &bull; Software Quality
            </p>
          </motion.div>

          {/* Core statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary max-w-xl font-normal leading-relaxed mb-8 border-l border-border pl-5"
          >
            Building practical, resilient digital experiences through full-stack
            engineering, defensive software principles, and intelligent automation.
          </motion.p>

          {/* Editorial CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-[#0B0B0B] font-heading font-semibold text-xs tracking-editorial uppercase hover:bg-neutral-200 transition-all border border-white"
            >
              <span>Selected Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-border text-text-primary hover:border-white hover:text-white font-mono text-xs tracking-editorial uppercase transition-all bg-[#121418]"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Right / Large Integrated Editorial Portrait & 3D Interplay */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] corner-crosshair"
          >
            {/* 3D Floating Geometry Layer (neatly scaled and visible across screens) */}
            <div className="absolute -top-8 -left-8 sm:-top-10 sm:-left-12 w-32 h-32 sm:w-48 sm:h-48 z-20 pointer-events-none opacity-85">
              <Suspense fallback={<Hero3DSkeleton />}>
                <Hero3D />
              </Suspense>
            </div>

            {/* Main Portrait Frame - Clean architectural container */}
            <div className="relative overflow-hidden grayscale contrast-110 border border-border bg-[#0E0E0E]">
              <img
                src={portraitImg}
                alt="Romeel Iqbal - Software Engineer"
                className="w-full h-auto object-cover object-top filter contrast-[1.08] brightness-[0.96]"
                loading="eager"
              />

              {/* Bottom and edge gradient fades to merge smoothly into background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 65%, rgba(11,11,11,0.6) 85%, #0B0B0B 100%), linear-gradient(to left, transparent 85%, rgba(11,11,11,0.4) 100%), linear-gradient(to right, transparent 85%, rgba(11,11,11,0.4) 100%)",
                }}
              />
            </div>

            {/* Solid editorial photo tag */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-[#0E0E0E]/90 backdrop-blur-sm border border-border">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="text-[9px] font-mono tracking-spacious text-text-secondary uppercase">
                LATIFABAD / HYD, PK
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="pt-12 flex flex-col items-center justify-center relative z-10"
      >
        <a
          href="#summary"
          className="group flex items-center gap-3 text-xs font-mono tracking-editorial text-text-muted hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
          aria-label="Scroll to professional summary"
        >
          <span>INDEX &bull; 00 STATEMENT</span>
          <span className="text-text-secondary group-hover:translate-y-0.5 transition-transform">
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
}
