import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2A2A2A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Editorial Tag */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <span className="text-4xl sm:text-5xl font-heading font-bold text-text-muted tracking-tighter block mb-2">
              01
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-medium tracking-tight text-text-primary uppercase mb-4">
              About
            </h2>
            <div className="w-12 h-[1px] bg-[#2A2A2A] mb-6" />
            <p className="text-xs font-mono tracking-editorial text-text-secondary uppercase">
              Engineering Mindset &bull; Systems Thinking
            </p>
          </div>
        </div>

        {/* Right Column - Editorial Bio */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed font-light">
            <p className="text-text-primary font-normal">
              I am a Software Engineering undergraduate at Mehran University of Engineering and Technology (MUET),
              building production-ready web software, resilient backend scripts, and practical intelligent tools.
            </p>
            <p>
              Rather than assembling surface-level mockups, I focus on the underlying architecture:
              how state flows through an application, how edge cases are caught through rigorous testing,
              and how interfaces can remain responsive under load. My technical path bridges full-stack
              React workflows with Python-based security simulations and AI agent experimentation.
            </p>
            <p>
              I bring hands-on experience from an international project management internship at Excelerate (Dubai),
              as well as freelance web engineering for direct clients. This combination of technical discipline and
              structured communication ensures that what I engineer is both architecturally sound and delivered on schedule.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#2A2A2A]">
            <div className="p-5 bg-[#111111] border border-[#2A2A2A]">
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1">
                APPROACH
              </span>
              <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">
                First-Principles
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Deconstructing complex technical specifications into modular, testable components.
              </p>
            </div>

            <div className="p-5 bg-[#111111] border border-[#2A2A2A]">
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1">
                QUALITY
              </span>
              <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">
                Defensive & Accessible
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Adhering strictly to WCAG guidelines, semantic HTML, and defensive threat modeling.
              </p>
            </div>

            <div className="p-5 bg-[#111111] border border-[#2A2A2A]">
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1">
                COLLABORATION
              </span>
              <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">
                Agile Coordination
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Certified in Google Project Management with experience coordinating distributed teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
