import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2A2A2A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
            06 &bull; PROFESSIONAL CREDENTIALS
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-text-primary uppercase">
            Certifications
          </h2>
        </div>
        <p className="text-xs font-mono tracking-editorial text-text-secondary uppercase max-w-xs">
          Industry verified &bull; Google & Coursera accredited
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="p-6 bg-[#111111] border border-[#2A2A2A] hover:border-[#444444] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E1E1E]">
                <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase">
                  {cert.issuer}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  {cert.year}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-text-primary mb-3">
                {cert.title}
              </h3>

              <p className="text-xs text-text-secondary font-light leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-[#1E1E1E] flex items-center gap-2 text-[10px] font-mono text-text-muted uppercase">
              <CheckCircle2 className="w-3 h-3 text-[#888888]" />
              <span>Verified Credential</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
