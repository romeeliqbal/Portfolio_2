import React from "react";
import { experiences } from "../data/experience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border bg-bg-alt"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono tracking-editorial text-accent uppercase block mb-3 font-medium">
            02 &bull; EXPERIENCE
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl tracking-tight text-text uppercase">
            Career History
          </h2>
        </div>
        <p className="text-xs font-mono tracking-editorial text-text-muted uppercase max-w-xs">
          Structured problem-solving &bull; Technical execution &bull; Agile delivery
        </p>
      </div>

      {/* Timeline Rows with Vertical Spine */}
      <div className="border-t border-border pt-4">
        <div className="relative border-l border-border/80 ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-2">
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
