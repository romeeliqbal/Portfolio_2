import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import ArchitecturalMark from "./ArchitecturalMark";
import portraitImg from "../assets/portrait.jpg";

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
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bg pt-24 text-text sm:pt-28"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="site-wrap relative z-10 my-auto grid items-end gap-12 py-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.p
            {...(reduce ? {} : fade(0.04))}
            className="mb-6 font-mono text-[11px] uppercase tracking-editorial text-text-muted"
          >
            01 / Studio
          </motion.p>

          <motion.p
            {...(reduce ? {} : fade(0.08))}
            className="font-heading text-[clamp(3.4rem,9vw,7.5rem)] font-semibold leading-[0.86] tracking-tight text-text"
          >
            Romeel
            <span className="block text-text-muted">Iqbal</span>
          </motion.p>

          <motion.h1
            {...(reduce ? {} : fade(0.16))}
            className="mt-8 max-w-xl font-heading text-2xl font-medium leading-tight tracking-tight text-text sm:text-3xl lg:text-[2.15rem]"
          >
            I build digital experiences where{" "}
            <span className="text-accent">engineering</span> meets imagination.
          </motion.h1>

          <motion.p
            {...(reduce ? {} : fade(0.22))}
            className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            Undergraduate software engineer in Hyderabad, Pakistan. I design
            and ship practical web applications, applied AI tools, and
            interfaces that stay clear under real use.
          </motion.p>

          <motion.div
            {...(reduce ? {} : fade(0.28))}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#projects" className="btn-primary group">
              Explore my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
          {...(reduce ? {} : fade(0.18))}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto max-w-md lg:ml-auto lg:max-w-none">
            <div className="portrait-frame">
              <img
                src={portraitImg}
                alt="Portrait of Romeel Iqbal"
                className="aspect-[4/5] w-full object-cover object-top"
                width={720}
                height={900}
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-charcoal/80 px-4 py-3 font-mono text-[10px] uppercase tracking-editorial text-[#F4F1EA]">
                <span>Romeel Iqbal</span>
                <span>Hyderabad, PK</span>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 -left-6 hidden w-[210px] sm:block lg:-left-16">
              <ArchitecturalMark compact />
            </div>
          </div>
          <p className="mt-12 hidden font-mono text-[10px] uppercase tracking-editorial text-text-muted sm:block lg:mt-16">
            Studio mark · pointer-responsive architecture
          </p>
        </motion.div>
      </div>

      <div className="site-wrap relative z-10 flex items-center justify-between pb-8 pt-2">
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
