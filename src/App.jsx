import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillMarquee from "./components/SkillMarquee";
import About from "./components/About";
import Experience from "./components/Experience";
import TechnologyNetwork from "./components/TechnologyNetwork";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(!reduce);

  useEffect(() => {
    if (reduce) return undefined;
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <div
      data-theme="dark"
      className="relative min-h-screen bg-bg font-body text-text selection:bg-accent selection:text-text-onAccent"
    >
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-text-onAccent"
      >
        Skip to content
      </a>

      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal"
          >
            <span className="font-heading text-3xl font-bold tracking-tight text-accent">
              RI
            </span>
            <div className="mt-4 h-px w-10 bg-accent" />
            <span className="mt-3 font-mono text-[10px] uppercase tracking-editorial text-[#B8B8B3]">
              Romeel Iqbal
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero />
        <SkillMarquee />
        <About />
        <Experience />
        <TechnologyNetwork />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
