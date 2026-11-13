import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import ArchitecturalMark from "./ArchitecturalMark";

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      data-theme="dark"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-bg pt-24 text-text sm:pt-28"
    >
      <div className="site-wrap relative z-10 my-auto grid items-center gap-12 py-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.p
            {...(reduce ? {} : fade(0.05))}
            className="mb-6 inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-editorial text-text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-status-success" />
            Available for software engineering roles
          </motion.p>

          <motion.p
            {...(reduce ? {} : fade(0.1))}
            className="mb-4 font-mono text-xs uppercase tracking-editorial text-accent"
          >
            Romeel Iqbal · Software Engineer · MUET
          </motion.p>

          <motion.h1
            {...(reduce ? {} : fade(0.15))}
            className="max-w-3xl font-heading text-[2.15rem] font-semibold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            I build digital experiences where{" "}
            <span className="text-accent">engineering</span> meets imagination.
          </motion.h1>

          <motion.p
            {...(reduce ? {} : fade(0.22))}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            Undergraduate software engineer in Hyderabad, Pakistan. I design
            and ship practical web applications, applied AI tools, and
            interfaces that stay clear under real use.
          </motion.p>

          <motion.div
            {...(reduce ? {} : fade(0.28))}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#projects" className="btn-primary">
              Explore my work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </motion.div>

          <motion.div
            {...(reduce ? {} : fade(0.34))}
            className="mt-8 flex flex-wrap items-center gap-5 font-mono text-xs text-text-muted"
          >
            <a
              href="https://github.com/romeeliqbal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/romeel-iqbal-6277493a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:romeelshaikh3@gmail.com"
              className="inline-flex min-h-[44px] items-center gap-2 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          {...(reduce ? {} : fade(0.2))}
          className="relative flex justify-center lg:col-span-5 lg:justify-end"
        >
          <div className="relative">
            <ArchitecturalMark />
            <p className="mt-4 max-w-xs text-right font-mono text-[10px] uppercase tracking-editorial text-text-muted">
              Studio mark · pointer-responsive architecture
            </p>
          </div>
        </motion.div>
      </div>

      <div className="site-wrap z-10 flex items-center justify-between pb-8 pt-4">
        <p className="hidden font-mono text-[10px] uppercase tracking-editorial text-text-muted sm:block">
          Web architecture · Intelligent systems · Software quality
        </p>
        <a
          href="#about"
          className="group ml-auto inline-flex min-h-[44px] items-center gap-2 font-mono text-xs uppercase tracking-editorial text-text-muted hover:text-accent"
          aria-label="Scroll to about"
        >
          Scroll
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
