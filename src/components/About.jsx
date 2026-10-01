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
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Editorial Tag */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
              01 &bull; ENGINEERING PROFILE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight text-text-primary uppercase mb-4">
              About
            </h2>
            <div className="w-12 h-[1px] bg-border mb-6" />
            <p className="text-xs font-mono tracking-editorial text-text-secondary uppercase">
              Engineering Mindset &bull; Systems Thinking
            </p>
          </div>
        </div>

        {/* Right Column - Editorial Bio */}
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-text-primary font-medium">
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

          {/* Varied Asymmetrical Capability Matrix */}
          <div className="pt-8 border-t border-border">
            <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-6">
              CORE ENGINEERING DISCIPLINES
            </span>

            <div className="space-y-3.5">
              {capabilities.map((cap) => (
                <div
                  key={cap.index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 bg-[#101216] border border-border hover:border-border-light transition-all"
                >
                  <div className="md:col-span-5 flex items-start gap-3">
                    <span className="text-xs font-mono text-text-muted mt-0.5 shrink-0">
                      [{cap.index}]
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-text-primary text-sm sm:text-base leading-snug">
                        {cap.title}
                      </h3>
                      <span className="text-[9px] font-mono tracking-spacious text-text-muted uppercase mt-1 block">
                        {cap.tag}
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-7 flex items-center">
                    <p className="text-xs sm:text-sm text-text-secondary font-normal leading-relaxed">
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
