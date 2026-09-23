import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import portraitImg from '../assets/portrait.jpg';

// Lazy-load Three.js 3D component to keep initial load instantaneous
const Hero3D = lazy(() => import('./Hero3D'));

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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto relative z-10">
        {/* Left / Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Metadata pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[#D6D6D6] animate-pulse-subtle" />
            <span className="text-[11px] font-mono tracking-spacious uppercase text-text-secondary">
              Available for Software Engineering Roles
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-extrabold text-5xl sm:text-7xl xl:text-8xl tracking-tighter leading-[0.9] text-text-primary uppercase mb-6"
          >
            Romeel<br />
            <span className="text-[#888888]">Iqbal</span>
          </motion.h1>

          {/* Subtitle & Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-heading font-medium tracking-tight text-text-primary mb-2">
              SOFTWARE ENGINEER
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
            className="text-base sm:text-lg text-text-secondary max-w-xl font-light leading-relaxed mb-10 border-l border-[#2A2A2A] pl-5"
          >
            Building practical, resilient digital experiences through full-stack engineering,
            defensive software principles, and intelligent automation.
          </motion.p>

          {/* Editorial CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#F2F2F2] text-[#0B0B0B] font-heading font-semibold text-xs tracking-editorial uppercase hover:bg-white hover:shadow-lg transition-all"
            >
              <span>Selected Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 border border-[#2A2A2A] text-text-primary hover:border-[#F2F2F2] hover:text-white font-mono text-xs tracking-editorial uppercase transition-all bg-[#111111]/60"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Right / Large Integrated Editorial Portrait & 3D Interplay */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-[420px] lg:max-w-[460px]"
          >
            {/* 3D Floating Geometry Layer */}
            <div className="absolute -top-12 -left-12 sm:-left-16 w-44 h-44 sm:w-56 sm:h-56 z-20 pointer-events-none">
              <Suspense fallback={null}>
                <Hero3D />
              </Suspense>
            </div>

            {/* Main Portrait Frame - Integrated without a generic rounded card */}
            <div className="relative overflow-hidden grayscale contrast-110">
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
                    'linear-gradient(to bottom, transparent 60%, rgba(11,11,11,0.5) 80%, #0B0B0B 100%), linear-gradient(to left, transparent 85%, rgba(11,11,11,0.4) 100%), linear-gradient(to right, transparent 85%, rgba(11,11,11,0.4) 100%)'
                }}
              />
            </div>

            {/* Subtle editorial photo tag */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1 bg-[#0B0B0B]/80 border border-[#2A2A2A] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6D6D6]" />
              <span className="text-[9px] font-mono tracking-spacious text-text-secondary uppercase">
                LATIFABAD / HYD, PK
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="pt-12 flex flex-col items-center justify-center relative z-10"
      >
        <a
          href="#summary"
          className="group flex flex-col items-center gap-2 focus:outline-none"
          aria-label="Scroll to professional summary"
        >
          <span className="text-[10px] font-mono tracking-spacious text-text-muted group-hover:text-text-primary uppercase transition-colors">
            Scroll to explore
          </span>
          <div className="w-[1px] h-8 bg-[#2A2A2A] relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-full h-1/2 bg-[#D6D6D6]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
