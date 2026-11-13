import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

export default function ExperienceItem({ experience, isLast }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative py-8 ${!isLast ? "border-b border-border" : ""}`}
    >
      <span
        className={`absolute -left-[29px] top-10 h-2.5 w-2.5 border border-accent sm:-left-[45px] ${
          isExpanded ? "bg-accent" : "bg-bg"
        }`}
        aria-hidden="true"
      />

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="mt-1 shrink-0 font-mono text-xs text-accent">
            [{experience.id}]
          </span>
          <div>
            <div className="mb-1.5 flex flex-wrap items-center gap-2.5">
              <h3 className="font-heading text-xl font-semibold text-text">
                {experience.role}
              </h3>
              <span className="border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-editorial text-accent">
                {experience.type}
              </span>
            </div>
            <div className="font-mono text-sm text-text-secondary">
              <span className="text-text">{experience.company}</span>
              <span className="text-text-muted"> / {experience.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pl-9 md:justify-end md:pl-0">
          <span className="font-mono text-xs text-text-muted">
            {experience.period}
          </span>
          <button
            type="button"
            onClick={() => setIsExpanded((open) => !open)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-border-strong bg-surface text-text-secondary hover:border-accent hover:text-accent"
            aria-expanded={isExpanded}
            aria-label={
              isExpanded
                ? `Collapse ${experience.role} details`
                : `Expand ${experience.role} details`
            }
          >
            {isExpanded ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-6 overflow-hidden space-y-6 sm:pl-10"
          >
            <p className="max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">
              {experience.description}
            </p>
            <div>
              <span className="mb-3 block font-mono text-[10px] uppercase tracking-editorial text-text-muted">
                Responsibilities
              </span>
              <ul className="max-w-3xl space-y-2.5">
                {experience.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-xs text-accent">
                      [{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.tools.map((tool) => (
                <span key={tool} className="chip">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
