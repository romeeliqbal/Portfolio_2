import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Résumé", href: "#resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "experience", "technologies", "projects", "education", "resume", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      data-theme="dark"
      className={`fixed left-0 top-0 z-50 w-full border-b border-border bg-charcoal/95 text-text backdrop-blur-md transition-[padding] duration-200 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="site-wrap flex items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-3 text-text"
          aria-label="Romeel Iqbal - Home"
        >
          <span className="font-heading text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
            RI
          </span>
          <span className="hidden border-l border-border pl-3 font-mono text-[10px] uppercase tracking-editorial text-text-muted sm:inline">
            Romeel Iqbal
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={active === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2 px-4 py-2">
            Get in touch
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 border border-border px-3 text-xs font-mono uppercase tracking-editorial text-text lg:hidden"
          aria-label={
            mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <>
              Close <X className="h-4 w-4" />
            </>
          ) : (
            <>
              Menu <Menu className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[61px] z-40 flex flex-col justify-between border-t border-border bg-charcoal px-8 py-8 lg:hidden"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex min-h-[52px] items-center justify-between border-b border-border font-heading text-2xl text-text"
                >
                  {link.label}
                  <span className="font-mono text-xs text-accent">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-6"
              >
                Get in touch
              </a>
            </div>
            <div className="space-y-1 font-mono text-xs text-text-muted">
              <p>romeelshaikh3@gmail.com</p>
              <p>Hyderabad, Pakistan</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
