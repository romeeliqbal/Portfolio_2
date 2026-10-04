import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portraitImg from "../assets/portrait.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-bg"
    >
      {/* Main Hero Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto relative z-10">
        {/* Left / Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Metadata pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface border border-border text-[11px] font-mono tracking-editorial uppercase text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-status-success shrink-0" />
              <span>Available for Software Engineering Roles</span>
            </div>
          </motion.div>

          {/* Large Editorial Headline */}
          <div className="relative inline-block mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight leading-[0.92] uppercase select-none"
            >
              <span className="editorial-display-text block">Romeel</span>
              <span className="editorial-display-subtext block">Iqbal</span>
            </motion.h1>
          </div>

          {/* Subtitle & Role */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-6"
          >
            <h2 className="text-lg sm:text-xl font-heading font-semibold tracking-tight text-text mb-2">
              SOFTWARE ENGINEER &bull; FULL-STACK &bull; MUET
            </h2>
            <p className="text-xs font-mono tracking-editorial uppercase text-text-muted">
              Web Architecture &bull; Intelligent Systems &bull; Software
              Quality
            </p>
          </motion.div>

          {/* Core statement */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary max-w-xl font-normal leading-relaxed mb-8 border-l border-border pl-5"
          >
            Building practical, resilient digital experiences through full-stack
            engineering, modular architectures, and applied intelligent systems.
          </motion.p>

          {/* Editorial CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-accent text-text-onAccent font-heading font-semibold text-xs tracking-editorial uppercase hover:bg-accent-hover transition-all border border-accent shadow-sm"
            >
              <span>Selected Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-border-strong text-text hover:border-text font-mono text-xs tracking-editorial uppercase transition-all bg-surface hover:bg-surface-hover"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Right / Editorial Portrait with Architectural Amber Corner Marks */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] corner-crosshair"
          >
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
                    "linear-gradient(to bottom, transparent 65%, rgba(11,11,12,0.6) 85%, #0B0B0C 100%), linear-gradient(to left, transparent 85%, rgba(11,11,12,0.4) 100%), linear-gradient(to right, transparent 85%, rgba(11,11,12,0.4) 100%)",
                }}
              />
            </div>

            {/* Solid editorial photo tag */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-[#0E0E0E]/90 backdrop-blur-sm border border-border">
              <span className="w-1.5 h-1.5 bg-status-success rounded-full" />
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
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pt-10 flex flex-col items-center justify-center relative z-10"
      >
        <a
          href="#about"
          className="group flex items-center gap-3 text-xs font-mono tracking-editorial text-text-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5"
          aria-label="Scroll to engineering profile"
        >
          <span>INDEX &bull; 01 ABOUT</span>
          <span className="text-text-secondary group-hover:translate-y-0.5 transition-transform text-accent">
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
}
