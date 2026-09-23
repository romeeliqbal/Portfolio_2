import React from 'react';
import { experiences } from '../data/experience';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2A2A2A]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
            02 &bull; CAREER HISTORY
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-text-primary uppercase">
            Experience
          </h2>
        </div>
        <p className="text-xs font-mono tracking-editorial text-text-secondary uppercase max-w-xs">
          Structured problem-solving &bull; Technical execution &bull; Agile delivery
        </p>
      </div>

      {/* Editorial Timeline Rows */}
      <div className="border-t border-[#2A2A2A]">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.id}
            experience={exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
