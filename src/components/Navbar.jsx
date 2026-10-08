import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "TECHNOLOGIES", href: "#technologies" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "RÉSUMÉ", href: "#resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md py-3.5 border-b border-border shadow-sm shadow-black/40"
          : "bg-bg/90 backdrop-blur-sm py-4 border-b border-border/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram Logo & Live Status */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="group flex items-center gap-2 text-text focus:outline-none"
            aria-label="Romeel Iqbal - Home"
          >
            <span className="font-heading font-bold text-xl tracking-tighter text-text group-hover:text-accent transition-colors">
              RI
            </span>
            <span className="text-[10px] uppercase font-mono tracking-editorial text-text-muted hidden sm:inline-block pl-2 border-l border-border leading-none py-0.5">
              Software Engineer
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 border border-border bg-surface text-[10px] font-mono text-text-secondary uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-status-success shrink-0" />
            <span className="tracking-wider">AVAILABLE</span>
          </div>
        </div>

        {/* Desktop Navigation (lg+) */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-mono tracking-editorial text-text-secondary hover:text-text transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs uppercase font-mono tracking-editorial px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-text-onAccent transition-all font-medium"
          >
            LET'S TALK
          </a>
        </nav>

        {/* Mobile / Tablet Menu Button (shown on < lg) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 text-xs font-mono tracking-editorial text-text px-3 py-1.5 focus:outline-none border border-border hover:border-border-strong bg-surface"
          aria-label={
            mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <>
              <span>CLOSE</span>
              <X className="w-4 h-4 text-text" />
            </>
          ) : (
            <>
              <span>MENU</span>
              <Menu className="w-4 h-4 text-text" />
            </>
          )}
        </button>
      </div>

      {/* Clean Full-Screen Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[61px] bg-bg z-40 lg:hidden flex flex-col justify-between px-8 py-8 border-t border-border"
          >
            <div className="flex flex-col space-y-4 pt-2">
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase">
                Navigation
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="font-heading font-medium text-xl tracking-tight text-text hover:text-accent flex items-center justify-between border-b border-border/60 min-h-[48px] py-2"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted" />
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center min-h-[48px] text-xs font-mono uppercase tracking-editorial bg-accent text-text-onAccent font-semibold px-4 py-3"
              >
                LET'S TALK
              </a>
            </div>

            <div className="pt-6 border-t border-border flex flex-col gap-1.5">
              <div className="text-xs font-mono text-text-secondary">
                romeelshaikh3@gmail.com
              </div>
              <div className="text-xs font-mono text-text-muted">
                Hyderabad, Pakistan
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
