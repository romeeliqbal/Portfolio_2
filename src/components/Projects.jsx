import React from 'react';
import { projects } from '../data/projects';
import ProjectItem from './ProjectItem';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2A2A2A]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
            04 &bull; SELECTED WORK
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-text-primary uppercase">
            Projects
          </h2>
        </div>
        <p className="text-xs font-mono tracking-editorial text-text-secondary uppercase max-w-xs">
          Working applications &bull; Defensive research &bull; Clean codebases
        </p>
      </div>

      {/* Projects list */}
      <div className="border-t border-[#2A2A2A]">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
