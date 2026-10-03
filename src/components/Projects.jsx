import React from "react";
import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-bg-alt border-t border-border">
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-editorial text-accent uppercase block mb-3 font-medium">
              04 &bull; SELECTED WORK
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl tracking-tight text-text uppercase break-normal hyphens-none">
              Projects
            </h2>
          </div>
          <p className="text-xs font-mono tracking-editorial text-text-muted uppercase max-w-xs">
            Working applications &bull; Defensive research &bull; Clean
            codebases
          </p>
        </div>

        {/* Projects list */}
        <div className="border-t border-border">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
