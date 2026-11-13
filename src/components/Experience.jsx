import React from "react";
import { experiences } from "../data/experience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section
      id="experience"
      data-theme="dark"
      className="w-full border-t border-border bg-bg text-text"
    >
      <div className="site-wrap section-pad">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <span className="meta mb-3 block">02 · Experience</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Work so far.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[11px] uppercase tracking-editorial text-text-muted">
            Coordination, freelance delivery, and shipping real interfaces
          </p>
        </div>

        <div className="relative ml-3 border-l border-border pl-6 sm:ml-4 sm:pl-10">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.id}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
