import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2A2A2A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Large Heading */}
        <div className="lg:col-span-6">
          <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
            07 &bull; DOCUMENTATION
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tighter leading-[0.95] text-text-primary uppercase">
            Curriculum<br />
            Vitae
          </h2>
        </div>

        {/* Action area */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed">
            Detailed breakdown of engineering coursework, cross-functional internship coordination,
            independent client deliverables, technical project write-ups, and verified credentials.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#F2F2F2] text-[#0B0B0B] font-heading font-semibold text-xs tracking-editorial uppercase hover:bg-white transition-all border border-white"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="/resume.pdf"
              download="Romeel_Iqbal_CV.pdf"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-[#2A2A2A] text-text-primary hover:border-white hover:text-white font-mono text-xs tracking-editorial uppercase transition-all bg-[#0E0E0E]"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

          <div className="pt-4 text-xs font-mono text-text-muted">
            Format: PDF &bull; Updated for 2026 &bull; Verified Academic & Professional Records
          </div>
        </div>
      </div>
    </section>
  );
}
