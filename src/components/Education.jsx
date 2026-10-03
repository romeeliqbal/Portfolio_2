import React from "react";
import { motion } from "framer-motion";
import { educationList } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="w-full bg-bg border-t border-border">
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <span className="text-xs font-mono tracking-editorial text-accent uppercase block mb-3 font-medium">
                05 &bull; ACADEMIC FOUNDATIONS
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-5xl tracking-tight text-text uppercase break-normal hyphens-none mb-4">
                Education
              </h2>
              <div className="w-12 h-[1px] bg-border mb-6" />
              <p className="text-xs font-mono tracking-editorial text-text-muted uppercase">
                Computer Science &bull; Software Engineering
              </p>
            </div>
          </div>

          {/* Right Column - Ruled Education Items */}
          <div className="lg:col-span-7 space-y-8">
            {educationList.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-7 sm:p-8 bg-surface border border-border hover:border-border-strong transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border pb-4">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-text">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono tracking-editorial text-accent">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-mono text-text-secondary font-medium">
                  {edu.institution} &bull;{" "}
                  <span className="text-text-muted">
                    {edu.location}
                  </span>
                </div>

                <p className="text-sm text-text-secondary font-normal leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2.5">
                    KEY COURSEWORK & FOCUS AREAS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-mono px-3 py-1 bg-surface-hover border border-border text-text-secondary hover:text-text hover:border-border-strong transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
