import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Plus, Minus, Layers, ShieldCheck } from 'lucide-react';

export default function ProjectItem({ project, isLast }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`py-12 group transition-all duration-300 ${
        !isLast ? 'border-b border-[#2A2A2A]' : ''
      }`}
    >
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex items-start gap-6 sm:gap-10">
          <span className="font-heading font-bold text-3xl sm:text-5xl text-text-muted group-hover:text-white transition-colors duration-300 w-12 shrink-0">
            {project.id}
          </span>

          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-[10px] font-mono tracking-editorial uppercase px-2 py-0.5 border border-[#2A2A2A] text-text-secondary bg-[#151515]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {project.year}
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl sm:text-4xl text-text-primary group-hover:text-white transition-colors mb-3">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed mb-6">
              {project.summary}
            </p>

            {/* Technologies list */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 bg-[#111111] border border-[#222222] text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex md:flex-col items-center md:items-end justify-between gap-4 pl-16 sm:pl-20 md:pl-0 shrink-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#2A2A2A] text-xs font-mono tracking-editorial uppercase text-text-primary hover:border-white hover:text-white hover:bg-[#151515] transition-all"
            aria-label={isExpanded ? `Hide details for ${project.title}` : `View architecture details for ${project.title}`}
          >
            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
            {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#2A2A2A] text-text-secondary hover:text-white hover:border-white transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#2A2A2A] text-text-secondary hover:text-white hover:border-white transition-colors"
                aria-label={`View live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Deep-Dive Architecture Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden pl-0 sm:pl-16 md:pl-22 mt-8"
          >
            <div className="p-6 sm:p-8 bg-[#111111] border border-[#2A2A2A] space-y-6">
              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2">
                    THE PROBLEM
                  </span>
                  <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2">
                    WHAT I ENGINEERED
                  </span>
                  <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="pt-4 border-t border-[#1F1F1F]">
                <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
                  KEY ARCHITECTURAL HIGHLIGHTS
                </span>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#666666] mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links Bar */}
              <div className="pt-4 border-t border-[#1F1F1F] flex flex-wrap items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Verified Technical Project &bull; Code available on request / repo
                </span>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-text-primary hover:text-white underline underline-offset-4"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repository</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-text-primary hover:text-white underline underline-offset-4"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
