import React from "react";
import { motion } from "framer-motion";
import { educationList } from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
              05 &bull; ACADEMIC FOUNDATIONS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight text-text-primary uppercase mb-4">
              Education
            </h2>
            <div className="w-12 h-[1px] bg-border mb-6" />
            <p className="text-xs font-mono tracking-editorial text-text-secondary uppercase">
              Computer Science &bull; Software Engineering
            </p>
          </div>
        </div>

        {/* Right Column - Editorial Education Items */}
        <div className="lg:col-span-8 space-y-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-7 sm:p-8 bg-[#101216] border border-border hover:border-border-light transition-all corner-crosshair space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border pb-4">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono tracking-editorial text-text-muted">
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
                      className="text-xs font-mono px-3 py-1 bg-[#16181D] border border-border text-text-secondary hover:text-white hover:border-border-light transition-colors"
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
    </section>
  );
}
