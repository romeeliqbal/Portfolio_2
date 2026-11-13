import React from "react";
import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <div data-theme="dark" className="border-t border-border bg-bg text-text">
        <div className="site-wrap pt-20 sm:pt-24 lg:pt-32">
          <div className="flex flex-col justify-between gap-6 pb-10 lg:flex-row lg:items-end">
            <div>
              <span className="meta mb-3 block">04 · Selected work</span>
              <h2 className="max-w-xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Projects with a problem, a build, and a paper trail.
              </h2>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase tracking-editorial text-text-muted">
              Working applications · defensive research · clean codebases
            </p>
          </div>
        </div>
      </div>

      {projects.map((project, index) => (
        <ProjectItem key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
