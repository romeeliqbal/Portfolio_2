import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Minus } from "lucide-react";
import {
  EduPulseDemo,
  MadamsBoutiqueDemo,
  RansomwareDemo,
  StudyFlowDemo,
} from "./ProjectDemos";
import ProjectVisual from "./ProjectVisual";
import { cn } from "../lib/cn";

export default function ProjectItem({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("demo");
  const reduce = useReducedMotion();
  const theme = index % 2 === 0 ? "dark" : "light";
  const featured = index === 0;
  const imageLed = index === 1;
  const reverse = index === 2;
  const supporting = index === 3;

  return (
    <article
      data-theme={theme}
      className="border-t border-border bg-bg text-text"
    >
      <div className={cn("site-wrap", featured ? "py-16 lg:py-28" : "py-14 lg:py-24")}>
        <div
          className={cn(
            "grid items-center gap-10",
            featured
              ? "lg:grid-cols-12 lg:items-stretch"
              : supporting
                ? "lg:grid-cols-12"
                : "lg:grid-cols-12",
            reverse && "lg:[&>*:first-child]:order-2",
            imageLed && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div
            className={cn(
              featured
                ? "flex flex-col justify-center lg:col-span-5"
                : supporting
                  ? "lg:col-span-5"
                  : "lg:col-span-5",
            )}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-accent">{project.id}</span>
              <span className="chip">{project.category}</span>
              <span className="font-mono text-xs text-text-muted">
                {project.year}
              </span>
            </div>
            <h3
              className={cn(
                "font-heading font-semibold tracking-tight text-text",
                featured
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : "text-3xl sm:text-4xl lg:text-5xl",
              )}
            >
              {project.title}
            </h3>
            <p className="mt-2 font-heading text-lg text-text-secondary">
              {project.tagline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
              {project.summary}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
              <span className="text-accent">Problem. </span>
              {project.problem}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsExpanded((open) => !open)}
                className="btn-primary group"
                aria-expanded={isExpanded}
                aria-label={
                  isExpanded
                    ? `Hide details for ${project.title}`
                    : `View architecture details for ${project.title}`
                }
              >
                {isExpanded ? "Hide case study" : "Explore the project"}
                {isExpanded ? (
                  <Minus className="h-3.5 w-3.5" />
                ) : (
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-border text-text-secondary hover:border-accent hover:text-accent"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-border text-text-secondary hover:border-accent hover:text-accent"
                  aria-label={`View live demo for ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div
            className={cn(
              featured
                ? "lg:col-span-7"
                : supporting
                  ? "lg:col-span-7"
                  : "lg:col-span-7",
            )}
          >
            <ProjectVisual project={project} featured={featured} />
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-12 space-y-8 border border-border bg-surface p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
                  <button
                    onClick={() => setActiveTab("demo")}
                    className={`min-h-[40px] border px-3.5 py-1.5 font-mono text-xs uppercase tracking-editorial ${
                      activeTab === "demo"
                        ? "border-accent text-accent"
                        : "border-border text-text-secondary hover:text-text"
                    }`}
                  >
                    Interactive demo
                  </button>
                  <button
                    onClick={() => setActiveTab("spec")}
                    className={`min-h-[40px] border px-3.5 py-1.5 font-mono text-xs uppercase tracking-editorial ${
                      activeTab === "spec"
                        ? "border-accent text-accent"
                        : "border-border text-text-secondary hover:text-text"
                    }`}
                  >
                    Case study
                  </button>
                </div>

                {activeTab === "demo" ? (
                  <>
                    {project.id === "01" && <EduPulseDemo />}
                    {project.id === "02" && <RansomwareDemo />}
                    {project.id === "03" && <StudyFlowDemo />}
                    {project.id === "04" && (
                      <MadamsBoutiqueDemo liveUrl={project.liveUrl} />
                    )}
                  </>
                ) : (
                  <div className="space-y-10">
                    <div>
                      <span className="meta mb-2 block">Overview</span>
                      <p className="max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">
                        {project.summary}
                      </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <span className="meta mb-2 block">Problem</span>
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <span className="meta mb-2 block">Approach</span>
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                    {project.architecture && (
                      <div>
                        <span className="meta mb-2 block">Architecture</span>
                        <p className="max-w-3xl text-sm leading-relaxed text-text-secondary">
                          {project.architecture}
                        </p>
                      </div>
                    )}
                    <div>
                      <span className="meta mb-3 block">What was built</span>
                      <ul className="space-y-2.5">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm text-text-secondary"
                          >
                            <span className="mt-0.5 font-mono text-xs text-accent">
                              [{String(idx + 1).padStart(2, "0")}]
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {project.testing && (
                      <div>
                        <span className="meta mb-2 block">Testing and quality</span>
                        <p className="max-w-3xl text-sm leading-relaxed text-text-secondary">
                          {project.testing}
                        </p>
                      </div>
                    )}
                    {project.lessons && (
                      <div>
                        <span className="meta mb-2 block">Lessons</span>
                        <p className="max-w-3xl text-sm leading-relaxed text-text-secondary">
                          {project.lessons}
                        </p>
                      </div>
                    )}
                    <div>
                      <span className="meta mb-3 block">Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 border-t border-border pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs text-text underline underline-offset-4 hover:text-accent"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Repository
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs text-text underline underline-offset-4 hover:text-accent"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live site
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
