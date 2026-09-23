import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'TECHNOLOGIES', href: '#technologies' },
  { label: 'WORK', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'RESUME', href: '#resume' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md py-3 border-b border-[#2A2A2A]'
          : 'bg-transparent py-6 border-b border-[#2A2A2A]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-text-primary focus:outline-none"
          aria-label="Romeel Iqbal - Home"
        >
          <span className="font-heading font-bold text-xl tracking-tighter text-text-primary group-hover:text-white transition-colors">
            RI
          </span>
          <span className="text-[10px] uppercase font-mono tracking-editorial text-text-muted hidden sm:inline-block pl-2 border-l border-[#2A2A2A]">
            Software Engineer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-mono tracking-editorial text-text-secondary hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs uppercase font-mono tracking-editorial px-3 py-1.5 border border-[#2A2A2A] hover:border-white text-text-primary hover:text-white hover:bg-[#151515] transition-all"
          >
            LET'S TALK
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center gap-2 text-xs font-mono tracking-editorial text-text-primary p-2 focus:outline-none border border-[#2A2A2A]"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <>
              <span>CLOSE</span>
              <X className="w-4 h-4 text-text-primary" />
            </>
          ) : (
            <>
              <span>MENU</span>
              <Menu className="w-4 h-4 text-text-primary" />
            </>
          )}
        </button>
      </div>

      {/* Clean Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[57px] bg-[#0B0B0B] z-40 md:hidden flex flex-col justify-between px-8 py-10 border-t border-[#2A2A2A]"
          >
            <div className="flex flex-col space-y-6 pt-4">
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
                  className="font-heading font-medium text-2xl tracking-tight text-text-primary hover:text-white flex items-center justify-between border-b border-[#1A1A1A] pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted" />
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-[#2A2A2A] flex flex-col gap-2">
              <div className="text-[11px] font-mono text-text-muted">
                romeelshaikh3@gmail.com
              </div>
              <div className="text-[11px] font-mono text-text-muted">
                Hyderabad, Pakistan
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
