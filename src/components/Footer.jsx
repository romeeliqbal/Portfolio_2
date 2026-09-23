import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0E0E0E] text-text-secondary py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top bar with Brand and Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-[#1E1E1E]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">
                RI
              </span>
              <span className="text-xs font-mono tracking-editorial uppercase text-text-muted pl-3 border-l border-[#2A2A2A]">
                Romeel Iqbal
              </span>
            </div>
            <p className="text-xs font-mono text-text-secondary tracking-tight">
              Software Engineer &bull; Mehran University of Engineering and Technology
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono tracking-editorial uppercase text-text-muted hover:text-white transition-colors self-start sm:self-auto p-2 border border-[#2A2A2A] hover:border-white"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Links & Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
              DIRECT REACH
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="mailto:romeelshaikh3@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-text-muted" />
                  <span>romeelshaikh3@gmail.com</span>
                </a>
              </li>
              <li className="text-text-muted pt-1">
                Latifabad, Sindh, Pakistan
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
              NETWORKS
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://www.linkedin.com/in/romeel-iqbal-6277493a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-text-muted" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/romeeliqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-text-muted" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
              PORTFOLIO SECTIONS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-text-secondary">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#technologies" className="hover:text-white transition-colors">Technologies</a>
              <a href="#projects" className="hover:text-white transition-colors">Work</a>
              <a href="#education" className="hover:text-white transition-colors">Education</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
              SPECIFICATION
            </span>
            <p className="text-xs font-mono text-text-muted leading-relaxed">
              BUILT WITH REACT &bull; TAILWIND CSS &bull; THREE.JS &bull; FRAMER MOTION
            </p>
            <div className="mt-3 text-[10px] font-mono text-text-muted">
              Design System: Dark Editorial Engineer
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted">
          <span>&copy; 2026 Romeel Iqbal. All rights reserved.</span>
          <span>Zero templates. Zero AI hallucinated credentials. Handcrafted engineering.</span>
        </div>
      </div>
    </footer>
  );
}
