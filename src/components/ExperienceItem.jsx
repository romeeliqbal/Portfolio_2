import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ExperienceItem({ experience, isLast }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`py-10 group transition-all duration-300 ${
        !isLast ? "border-b border-[#2A2A2A]" : ""
      }`}
    >
      {/* Top row: Number, Period, Role */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-4 select-none"
      >
        <div className="flex items-start gap-6 md:gap-10">
          <span className="font-heading font-bold text-3xl sm:text-4xl text-text-muted group-hover:text-white transition-colors duration-300 w-10">
            {experience.id}
          </span>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary group-hover:text-white transition-colors">
                {experience.role}
              </h3>
              <span className="text-[10px] font-mono tracking-editorial uppercase px-2 py-0.5 border border-[#2A2A2A] text-text-secondary bg-[#151515]">
                {experience.type}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-secondary">
              <span className="text-text-primary font-medium">
                {experience.company}
              </span>
              <span className="text-text-muted">/ {experience.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-6 pl-16 md:pl-0">
          <span className="text-xs font-mono tracking-editorial text-text-muted">
            {experience.period}
          </span>
          <button
            type="button"
            className="w-7 h-7 border border-[#2A2A2A] flex items-center justify-center text-text-muted group-hover:border-white group-hover:text-white transition-colors"
            aria-label={
              isExpanded
                ? "Collapse experience details"
                : "Expand experience details"
            }
          >
            {isExpanded ? (
              <Minus className="w-3.5 h-3.5" />
            ) : (
              <Plus className="w-3.5 h-3.5" />
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
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden pl-0 sm:pl-16 md:pl-20 mt-6"
          >
            <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed mb-6 max-w-3xl">
              {experience.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-6">
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
                KEY RESPONSIBILITIES & CONTRIBUTIONS
              </span>
              <ul className="space-y-3 max-w-3xl">
                {experience.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5 text-xs sm:text-sm text-text-secondary"
                  >
                    <span className="font-mono text-[10px] text-text-muted shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div>
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
                TOOLS & SKILLS APPLIED
              </span>
              <div className="flex flex-wrap gap-2">
                {experience.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1 bg-[#0E0E0E] border border-[#222222] text-text-secondary hover:text-white hover:border-[#444444] transition-colors"
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
