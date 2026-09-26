import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial minimalist editorial reveal
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0B0B0B] text-[#F2F2F2] min-h-screen relative font-body selection:bg-white selection:text-black">
      {/* Intro Curtain Splash */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#0B0B0B] flex flex-col items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="font-heading font-bold text-3xl tracking-tighter text-white">
                RI
              </span>
              <div className="w-8 h-[1px] bg-[#333333]" />
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase">
                Romeel Iqbal &bull; Software Engineer
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Structure */}
      <Navbar />

      <main>
        <Hero />
        <Summary />
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
