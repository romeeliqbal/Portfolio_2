import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-bg text-text-secondary py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top bar with Brand and Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-border">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-heading font-bold text-2xl tracking-tighter text-text">
                RI
              </span>
              <span className="text-xs font-mono tracking-editorial uppercase text-accent pl-3 border-l border-border font-medium">
                Romeel Iqbal
              </span>
            </div>
            <p className="text-xs font-mono text-text-secondary tracking-tight">
              Software Engineer &bull; Mehran University of Engineering and Technology (MUET)
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono tracking-editorial uppercase text-text-secondary hover:text-text hover:border-accent transition-colors self-start sm:self-auto px-3.5 py-2 border border-border bg-surface hover:bg-surface-hover min-h-[44px]"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>

        {/* Links & Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-3 font-medium">
              DIRECT REACH
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="mailto:romeelshaikh3@gmail.com"
                  className="hover:text-accent transition-colors flex items-center gap-2 text-text-secondary min-h-[36px]"
                >
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <span>romeelshaikh3@gmail.com</span>
                </a>
              </li>
              <li className="text-text-muted pt-1">
                Latifabad, Sindh, Pakistan
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-3 font-medium">
              NETWORKS
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://www.linkedin.com/in/romeel-iqbal-6277493a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2 text-text-secondary min-h-[36px]"
                >
                  <Linkedin className="w-3.5 h-3.5 text-accent" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/romeeliqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2 text-text-secondary min-h-[36px]"
                >
                  <Github className="w-3.5 h-3.5 text-accent" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-3 font-medium">
              PORTFOLIO SECTIONS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-text-secondary">
              <a href="#about" className="hover:text-accent transition-colors py-1">
                About
              </a>
              <a
                href="#experience"
                className="hover:text-accent transition-colors py-1"
              >
                Experience
              </a>
              <a
                href="#technologies"
                className="hover:text-accent transition-colors py-1"
              >
                Technologies
              </a>
              <a
                href="#projects"
                className="hover:text-accent transition-colors py-1"
              >
                Projects
              </a>
              <a
                href="#education"
                className="hover:text-accent transition-colors py-1"
              >
                Education
              </a>
              <a
                href="#credentials"
                className="hover:text-accent transition-colors py-1"
              >
                Credentials
              </a>
              <a
                href="#resume"
                className="hover:text-accent transition-colors py-1"
              >
                Résumé
              </a>
              <a href="#contact" className="hover:text-accent transition-colors py-1">
                Contact
              </a>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-3 font-medium">
              SPECIFICATION
            </span>
            <p className="text-xs font-mono text-text-muted leading-relaxed">
              BUILT WITH REACT &bull; TAILWIND CSS &bull; FRAMER MOTION &bull; VITE
            </p>
            <div className="mt-3 text-[10px] font-mono text-text-muted">
              Design System: Warm Architectural Dark Specification
            </div>
          </div>
        </div>

        {/* Bottom copyright & Colophon */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted">
          <span>&copy; 2026 Romeel Iqbal. All rights reserved.</span>
          <span>
            Designed & engineered by Romeel Iqbal. Built with React, Tailwind CSS, & Vite.
          </span>
        </div>
      </div>
    </footer>
  );
}
