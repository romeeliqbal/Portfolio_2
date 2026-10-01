import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

export default function Certifications() {
  const googleCerts = certifications.filter(c => c.issuer.includes('Google'));
  const otherCerts = certifications.filter(c => !c.issuer.includes('Google'));

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
            06 &bull; PROFESSIONAL CREDENTIALS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight text-text-primary uppercase">
            Certifications
          </h2>
        </div>
        <p className="text-xs font-mono tracking-editorial text-text-secondary uppercase max-w-xs">
          Industry verified &bull; Google & Coursera accredited
        </p>
      </div>

      {/* Credential Verification Ledger */}
      <div className="space-y-12">
        {/* Group 1: Google Professional Suite */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-border">
            <span className="text-xs font-mono tracking-spacious text-white uppercase">
              GOOGLE PROFESSIONAL ACCREDITATIONS
            </span>
            <span className="text-[10px] font-mono text-text-muted">
              {googleCerts.length} VERIFIED CREDENTIALS
            </span>
          </div>

          <div className="space-y-3.5">
            {googleCerts.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 bg-[#101216] border border-border hover:border-border-light transition-all corner-crosshair"
              >
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1">
                      {cert.issuer}
                    </span>
                    <h3 className="font-heading font-bold text-base text-text-primary leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-text-muted mt-3">
                    ISSUED // {cert.year}
                  </span>
                </div>

                <div className="lg:col-span-6 flex items-center">
                  <p className="text-xs sm:text-sm text-text-secondary font-normal leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="lg:col-span-2 flex items-center lg:justify-end">
                  <span className="text-[10px] font-mono tracking-editorial uppercase px-2.5 py-1 border border-border text-emerald-400/90 bg-[#16181D]">
                    [VERIFIED]
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Group 2: Core Engineering Foundations */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-border">
            <span className="text-xs font-mono tracking-spacious text-white uppercase">
              PROGRAMMING & SYSTEMS ACCREDITATIONS
            </span>
            <span className="text-[10px] font-mono text-text-muted">
              {otherCerts.length} CREDENTIAL
            </span>
          </div>

          <div className="space-y-3.5">
            {otherCerts.map((cert) => (
              <div
                key={cert.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 bg-[#101216] border border-border hover:border-border-light transition-all corner-crosshair"
              >
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1">
                      {cert.issuer}
                    </span>
                    <h3 className="font-heading font-bold text-base text-text-primary leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-text-muted mt-3">
                    ISSUED // {cert.year}
                  </span>
                </div>

                <div className="lg:col-span-6 flex items-center">
                  <p className="text-xs sm:text-sm text-text-secondary font-normal leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="lg:col-span-2 flex items-center lg:justify-end">
                  <span className="text-[10px] font-mono tracking-editorial uppercase px-2.5 py-1 border border-border text-text-secondary bg-[#16181D]">
                    [ACCREDITED]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
