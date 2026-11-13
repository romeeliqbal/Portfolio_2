import React from "react";
import { educationList } from "../data/education";
import SectionReveal from "./SectionReveal";

export default function Education() {
  return (
    <section
      id="education"
      data-theme="light"
      className="w-full border-t border-border bg-bg text-text"
    >
      <div className="site-wrap section-pad">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="meta mb-3 block">05 · Education</span>
              <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Academic
                <br />
                foundations.
              </h2>
              <p className="mt-6 max-w-xs font-mono text-[11px] uppercase tracking-editorial text-text-muted">
                Software engineering · Pre-engineering
              </p>
            </div>
          </div>

          <div className="relative space-y-0 lg:col-span-7">
            <div className="absolute bottom-4 top-4 left-[7px] w-px bg-border" aria-hidden="true" />
            {educationList.map((edu, idx) => (
              <SectionReveal key={edu.degree} delay={idx * 0.06} className="relative pl-8 pb-10 last:pb-0">
                <span className="absolute left-0 top-1.5 h-4 w-4 border border-accent bg-bg" />
                <div className="flex flex-col justify-between gap-2 border-b border-border pb-4 sm:flex-row sm:items-baseline">
                  <h3 className="font-heading text-2xl font-semibold text-text">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-accent">{edu.period}</span>
                </div>
                <p className="mt-4 font-mono text-sm text-text-secondary">
                  {edu.institution}
                  <span className="text-text-muted"> · {edu.location}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {edu.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course} className="chip">
                      {course}
                    </span>
                  ))}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
