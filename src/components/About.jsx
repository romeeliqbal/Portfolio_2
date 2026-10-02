import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const keyFacts = [
    {
      label: "Education",
      value: "B.E. Software Engineering",
      detail: "Mehran University (MUET) • Expected 2027",
    },
    {
      label: "Focus",
      value: "Full-Stack Web & Applied AI",
      detail: "React, Node.js, Python, Modular Architecture",
    },
    {
      label: "Currently",
      value: "Building & Experimenting",
      detail: "Client Interfaces & Intelligent Agent Workflows",
    },
    {
      label: "Location",
      value: "Hyderabad, Pakistan",
      detail: "Open to Remote & Global Relocation",
    },
  ];

  const capabilities = [
    {
      index: "01",
      title: "First-Principles Decomposition",
      tag: "System Design",
      description:
        "Deconstructing ambiguous technical requirements into modular, single-responsibility components with predictable state flow and clear interfaces.",
    },
    {
      index: "02",
      title: "Software Quality & Accessibility",
      tag: "Code Quality",
      description:
        "Implementing WCAG 2.1 AA accessibility, keyboard-first navigation, strict schema validation, and thorough exception handling.",
    },
    {
      index: "03",
      title: "Agile Milestone Delivery",
      tag: "Execution",
      description:
        "Applying Google-certified project coordination methodologies, maintaining transparent documentation, and driving predictable releases.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border bg-bg"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Eyebrow & Sticky Heading */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <span className="text-xs font-mono tracking-editorial text-accent uppercase block mb-3 font-medium">
              01 &bull; ABOUT
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl tracking-tight text-text uppercase mb-4 leading-[1.05]">
              Engineering
              <br />
              Profile
            </h2>
            <div className="w-12 h-[1px] bg-border mb-6" />
            <p className="text-xs font-mono tracking-editorial text-text-muted uppercase">
              Engineering Mindset &bull; Systems Thinking
            </p>
          </div>
        </div>

        {/* Right Column - Unified Narrative, Definition List, and Ruled Disciplines */}
        <div className="lg:col-span-8 space-y-12">
          {/* Narrative Body */}
          <div className="space-y-6 text-text-secondary text-base sm:text-[1.0625rem] leading-relaxed font-normal">
            <p className="text-text font-medium text-lg leading-relaxed">
              I am an undergraduate software engineer at Mehran University of
              Engineering and Technology (MUET), building practical web
              software, resilient backend scripts, and applied intelligent tools.
            </p>
            <p>
              I architect software from the data layer up—designing predictable
              state flows, structured test suites that catch edge cases before
              deployment, and responsive interfaces that load cleanly across all
              devices. My technical focus bridges full-stack React workflows with
              Python-based security research and AI agent integration.
            </p>
            <p>
              I combine academic foundations with hands-on coordination from an
              international project management internship at ExceLerate (Dubai)
              and freelance web engineering for direct clients. This balance of
              technical discipline and structured communication ensures that
              solutions are robust, maintainable, and delivered on schedule.
            </p>
          </div>

          {/* 4 Key Facts - Ruled Definition List (No Boxes) */}
          <div className="pt-8 border-t border-border">
            <span className="text-[11px] font-mono tracking-editorial text-text-muted uppercase block mb-6">
              QUICK SPECIFICATIONS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {keyFacts.map((fact) => (
                <div key={fact.label} className="border-b border-border/70 pb-4">
                  <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-1">
                    {fact.label}
                  </span>
                  <div className="font-heading font-semibold text-text text-base">
                    {fact.value}
                  </div>
                  <div className="text-xs font-mono text-text-muted mt-0.5">
                    {fact.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Engineering Disciplines - Ruled Hairlines (No Boxes) */}
          <div className="pt-8 border-t border-border">
            <span className="text-[11px] font-mono tracking-editorial text-text-muted uppercase block mb-6">
              CORE ENGINEERING DISCIPLINES
            </span>

            <div className="divide-y divide-border">
              {capabilities.map((cap) => (
                <div
                  key={cap.index}
                  className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-surface/40 transition-colors px-2 -mx-2"
                >
                  <div className="md:col-span-5 flex items-baseline gap-3">
                    <span className="text-xs font-mono text-accent font-semibold shrink-0">
                      [{cap.index}]
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-text text-base leading-snug">
                        {cap.title}
                      </h3>
                      <span className="text-[10px] font-mono tracking-editorial text-text-muted uppercase mt-0.5 block">
                        {cap.tag}
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <p className="text-sm text-text-secondary font-normal leading-relaxed">
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
