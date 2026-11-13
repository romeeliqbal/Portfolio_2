import React from "react";
import { Download, ExternalLink, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      data-theme="light"
      className="w-full border-t border-border bg-bg-alt text-text"
    >
      <div className="site-wrap section-pad">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="meta mb-3 block">07 · Résumé</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              The paper trail.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-5">
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              Coursework, internship coordination, freelance delivery, project
              write-ups, and credentials — in one PDF.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FileText className="h-4 w-4" />
                View résumé
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="/resume.pdf"
                download="Romeel_Iqbal_Resume.pdf"
                className="btn-secondary"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
            <p className="font-mono text-xs text-text-muted">
              Format: PDF · Updated for 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
