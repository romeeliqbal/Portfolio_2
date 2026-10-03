import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="w-full bg-bg-alt border-t border-border">
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Heading */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono tracking-editorial text-accent uppercase block mb-3 font-medium">
              07 &bull; RÉSUMÉ
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-text uppercase break-normal hyphens-none">
              Résumé
            </h2>
          </div>

          {/* Action area */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed">
              Detailed breakdown of engineering coursework, cross-functional
              internship coordination, independent client deliverables, technical
              project write-ups, and verified credentials.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent text-onAccent font-mono font-semibold text-xs tracking-editorial uppercase hover:bg-accent-hover transition-all min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>View Résumé</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="/resume.pdf"
                download="Romeel_Iqbal_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-border text-text hover:border-accent hover:text-accent font-mono text-xs tracking-editorial uppercase transition-all bg-surface hover:bg-surface-hover min-h-[44px]"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>

            <div className="pt-2 text-xs font-mono text-text-muted">
              Format: PDF &bull; Updated for 2026 &bull; Verified Academic &
              Professional Records
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
