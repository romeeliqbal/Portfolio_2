import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const capabilities = [
    {
      index: '01',
      title: 'First-Principles Decomposition',
      tag: 'SYSTEM DESIGN',
      description: 'Deconstructing ambiguous technical requirements into modular, single-responsibility components with predictable state flow.'
    },
    {
      index: '02',
      title: 'Defensive Engineering & a11y',
      tag: 'CODE QUALITY',
      description: 'Implementing WCAG 2.1 AA accessibility, keyboard-first navigation, strict schema validation, and defensive exception handling.'
    },
    {
      index: '03',
      title: 'Agile Milestone Delivery',
      tag: 'EXECUTION',
      description: 'Applying Google-certified project coordination methodologies, maintaining transparent documentation, and driving iterative releases.'
    }
  ];

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
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed font-light">
            <p className="text-text-primary font-normal">
              I am a Software Engineering undergraduate at Mehran University of Engineering and Technology (MUET),
              building production-ready web software, resilient backend scripts, and practical intelligent tools.
            </p>
            <p>
              I architect software from the data layer up—designing predictable state flows, defensive test suites
              that catch edge cases before deployment, and responsive interfaces that perform reliably under production load.
              My technical path bridges full-stack React workflows with Python-based security simulations and AI agent experimentation.
            </p>
            <p>
              I bring hands-on experience from an international project management internship at Excelerate (Dubai),
              as well as freelance web engineering for direct clients. This combination of technical discipline and
              structured communication ensures that what I engineer is both architecturally sound and delivered on schedule.
            </p>
          </div>

          {/* Varied Asymmetrical Capability Matrix (Replaced generic 3-card grid) */}
          <div className="pt-8 border-t border-[#2A2A2A]">
            <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-6">
              CORE ENGINEERING DISCIPLINES
            </span>

            <div className="space-y-4">
              {capabilities.map((cap) => (
                <div
                  key={cap.index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 bg-[#0E0E0E] border border-[#222222] hover:border-[#383838] transition-colors"
                >
                  <div className="md:col-span-4 flex items-baseline gap-3">
                    <span className="text-xs font-mono text-text-muted">
                      [{cap.index}]
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-text-primary text-sm">
                        {cap.title}
                      </h3>
                      <span className="text-[9px] font-mono tracking-spacious text-text-muted uppercase">
                        {cap.tag}
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-8 flex items-center">
                    <p className="text-xs text-text-secondary font-light leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
