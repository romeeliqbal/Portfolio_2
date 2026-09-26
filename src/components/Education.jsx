import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2A2A2A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <span className="text-4xl sm:text-5xl font-heading font-bold text-text-muted tracking-tighter block mb-2">
              05
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-medium tracking-tight text-text-primary uppercase mb-4">
              Education
            </h2>
            <div className="w-12 h-[1px] bg-[#2A2A2A] mb-6" />
            <p className="text-xs font-mono tracking-editorial text-text-secondary uppercase">
              Academic Foundations &bull; Computer Science
            </p>
          </div>
        </div>

        {/* Right Column - Editorial Education Items */}
        <div className="lg:col-span-8 space-y-12">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-[#0E0E0E] border border-[#222222] hover:border-[#383838] transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#1A1A1A] pb-4">
                <h3 className="font-heading font-bold text-2xl text-text-primary">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono tracking-editorial text-text-muted">
                  {edu.period}
                </span>
              </div>

              <div className="text-sm font-medium text-text-secondary">
                {edu.institution} &bull; <span className="text-text-muted font-normal">{edu.location}</span>
              </div>

              <p className="text-sm text-text-secondary font-light leading-relaxed">
                {edu.description}
              </p>

              <div>
                <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2">
                  KEY COURSEWORK & FOCUS AREAS
                </span>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono px-3 py-1 bg-[#141414] border border-[#262626] text-text-secondary"
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
