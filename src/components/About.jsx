import React from "react";
import portraitImg from "../assets/portrait.jpg";
import SectionReveal from "./SectionReveal";

export default function About() {
  const keyFacts = [
    {
      label: "Education",
      value: "B.E. Software Engineering",
      detail: "Mehran University (MUET) · Expected 2027",
    },
    {
      label: "Focus",
      value: "Full-stack web & applied AI",
      detail: "React, Python, modular architecture",
    },
    {
      label: "Currently",
      value: "Building & learning in public",
      detail: "Client interfaces and intelligent workflows",
    },
    {
      label: "Location",
      value: "Hyderabad, Pakistan",
      detail: "Open to remote work and relocation",
    },
  ];

  const capabilities = [
    {
      index: "01",
      title: "Clear system structure",
      tag: "Design",
      description:
        "I break messy requirements into small, named parts with predictable state and interfaces that another engineer can follow.",
    },
    {
      index: "02",
      title: "Quality and accessibility",
      tag: "Craft",
      description:
        "Keyboard paths, readable contrast, semantic markup, and checks that catch edge cases before a feature is treated as done.",
    },
    {
      index: "03",
      title: "Delivery with documentation",
      tag: "Execution",
      description:
        "Internship coordination at Excelerate taught me to keep milestones visible, write things down, and finish work on a schedule.",
    },
  ];

  return (
    <section
      id="about"
      data-theme="light"
      className="w-full border-t border-border bg-bg text-text"
    >
      <span id="summary" className="sr-only">
        Engineering profile
      </span>
      <div className="site-wrap section-pad">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionReveal>
              <span className="meta mb-3 block">01 · About</span>
              <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                A working engineer,
                <br />
                still in the making.
              </h2>
              <div className="relative mt-10 overflow-hidden border border-border">
                <img
                  src={portraitImg}
                  alt="Portrait of Romeel Iqbal, software engineer"
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-charcoal/80 px-4 py-3 font-mono text-[10px] uppercase tracking-editorial text-[#F4F1EA]">
                  <span>Romeel Iqbal</span>
                  <span>Latifabad / Hyderabad, PK</span>
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <SectionReveal delay={0.08}>
              <div className="space-y-5 text-base leading-relaxed text-text-secondary sm:text-[1.05rem]">
                <p className="text-lg font-medium text-text">
                  I study software engineering at Mehran University of
                  Engineering &amp; Technology and spend most of my time
                  building applications I can actually use.
                </p>
                <p>
                  Dashboards, storefronts, and small intelligence tools are how
                  I learn: start with a real problem, shape a readable
                  interface, then keep the internals honest. I care about
                  practical delivery more than spectacle.
                </p>
                <p>
                  Alongside coursework I interned remotely with Excelerate in
                  Dubai and take on freelance web work. That mix of academic
                  foundations, client delivery, and testing is the through-line
                  of this site.
                </p>
              </div>
            </SectionReveal>

            <div className="grid gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-2">
              {keyFacts.map((fact) => (
                <div key={fact.label} className="border-b border-border pb-4">
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-editorial text-accent">
                    {fact.label}
                  </span>
                  <div className="font-heading text-base font-semibold text-text">
                    {fact.value}
                  </div>
                  <div className="mt-1 font-mono text-xs text-text-muted">
                    {fact.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="divide-y divide-border border-t border-border">
              {capabilities.map((cap) => (
                <div
                  key={cap.index}
                  className="grid gap-4 py-5 md:grid-cols-12"
                >
                  <div className="md:col-span-5">
                    <span className="font-mono text-xs text-accent">
                      [{cap.index}]
                    </span>
                    <h3 className="mt-1 font-heading text-base font-semibold text-text">
                      {cap.title}
                    </h3>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-editorial text-text-muted">
                      {cap.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary md:col-span-7">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
