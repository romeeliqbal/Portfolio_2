import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ExperienceItem({ experience, isLast }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`py-8 group transition-all duration-200 relative ${
        !isLast ? "border-b border-border/80" : ""
      }`}
    >
      {/* Square Timeline Pip on the Vertical Spine */}
      <span
        className={`absolute -left-[29px] sm:-left-[45px] top-[38px] sm:top-[40px] w-2.5 h-2.5 border border-accent transition-colors ${
          isExpanded ? "bg-accent" : "bg-bg-alt"
        }`}
        aria-hidden="true"
      />

      {/* Top row: Number, Period, Role */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-4 select-none"
      >
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="font-mono font-semibold text-xs text-accent mt-1 shrink-0">
            [{experience.id}]
          </span>

          <div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-1.5">
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-text group-hover:text-accent transition-colors">
                {experience.role}
              </h3>
              <span className="text-[10px] font-mono tracking-editorial uppercase px-2 py-0.5 border border-accent/40 bg-accent/10 text-accent leading-none">
                {experience.type}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-text-secondary">
              <span className="text-text font-medium">
                {experience.company}
              </span>
              <span className="text-text-muted">/ {experience.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pl-9 md:pl-0">
          <span className="text-xs font-mono tracking-editorial text-text-muted shrink-0">
            {experience.period}
          </span>
          <button
            type="button"
            className="min-w-[44px] min-h-[44px] border border-border-strong flex items-center justify-center text-text-secondary group-hover:border-accent group-hover:text-accent transition-colors bg-surface shrink-0"
            aria-label={
              isExpanded
                ? `Collapse ${experience.role} details`
                : `Expand ${experience.role} details`
            }
          >
            {isExpanded ? (
              <Minus className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Expandable details */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden pl-0 sm:pl-10 mt-6 space-y-6"
          >
            <p className="text-sm sm:text-base text-text-secondary font-normal leading-relaxed max-w-3xl">
              {experience.description}
            </p>

            {/* Responsibilities */}
            <div>
              <span className="text-[10px] font-mono tracking-editorial text-text-muted uppercase block mb-3">
                KEY RESPONSIBILITIES & CONTRIBUTIONS
              </span>
              <ul className="space-y-2.5 max-w-3xl">
                {experience.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary font-normal"
                  >
                    <span className="font-mono text-xs text-accent font-semibold shrink-0 mt-0.5">
                      [{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div>
              <span className="text-[10px] font-mono tracking-editorial text-text-muted uppercase block mb-3">
                TOOLS & SKILLS APPLIED
              </span>
              <div className="flex flex-wrap gap-2">
                {experience.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-2.5 py-1 bg-surface border border-border text-text-secondary hover:text-text hover:border-border-strong transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
