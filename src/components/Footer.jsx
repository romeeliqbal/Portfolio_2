import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      data-theme="dark"
      className="w-full border-t border-border bg-graphite py-14 text-text-secondary sm:py-16"
    >
      <div className="site-wrap space-y-12">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-12 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="font-heading text-2xl font-semibold tracking-tight text-text">
                RI
              </span>
              <span className="border-l border-border pl-3 font-mono text-xs uppercase tracking-editorial text-accent">
                Romeel Iqbal
              </span>
            </div>
            <p className="font-mono text-xs text-text-secondary">
              Software Engineer · Mehran University of Engineering and
              Technology
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="btn-secondary self-start sm:self-auto"
            aria-label="Scroll to top of page"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 text-accent" />
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-editorial text-accent">
              Direct
            </span>
            <a
              href="mailto:romeelshaikh3@gmail.com"
              className="flex min-h-[36px] items-center gap-2 font-mono text-xs hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5 text-accent" />
              romeelshaikh3@gmail.com
            </a>
            <p className="pt-2 font-mono text-xs text-text-muted">
              Latifabad, Sindh, Pakistan
            </p>
          </div>
          <div>
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-editorial text-accent">
              Networks
            </span>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href="https://www.linkedin.com/in/romeel-iqbal-6277493a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[36px] items-center gap-2 hover:text-accent"
                >
                  <Linkedin className="h-3.5 w-3.5 text-accent" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/romeeliqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[36px] items-center gap-2 hover:text-accent"
                >
                  <Github className="h-3.5 w-3.5 text-accent" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-editorial text-accent">
              Index
            </span>
            <div className="grid grid-cols-2 gap-1 font-mono text-xs">
              {[
                ["#about", "About"],
                ["#experience", "Experience"],
                ["#technologies", "Skills"],
                ["#projects", "Work"],
                ["#education", "Education"],
                ["#credentials", "Credentials"],
                ["#resume", "Résumé"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="py-1.5 hover:text-accent">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-editorial text-accent">
              Colophon
            </span>
            <p className="font-mono text-xs leading-relaxed text-text-muted">
              React · Tailwind CSS · Framer Motion · Vite. No Three.js — the
              studio mark is CSS 3D so the page stays light.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 font-mono text-[11px] text-text-muted sm:flex-row">
          <span>© 2026 Romeel Iqbal. All rights reserved.</span>
          <span>Designed and engineered by Romeel Iqbal.</span>
        </div>
      </div>
    </footer>
  );
}
