import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  const googleCerts = certifications.filter((c) => c.issuer.includes("Google"));
  const otherCerts = certifications.filter((c) => !c.issuer.includes("Google"));

  return (
    <section id="credentials" className="w-full bg-bg border-t border-border">
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-editorial text-accent uppercase block mb-3 font-medium">
              06 &bull; PROFESSIONAL CREDENTIALS
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl tracking-tight text-text uppercase break-normal hyphens-none">
              Credentials
            </h2>
          </div>
          <p className="text-xs font-mono tracking-editorial text-text-muted uppercase max-w-xs">
            Industry verified &bull; Google & Coursera accredited
          </p>
        </div>

        {/* Credential Verification Ledger */}
        <div className="space-y-12">
          {/* Group 1: Google Professional Suite */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-border">
              <span className="text-xs font-mono tracking-spacious text-text uppercase font-semibold">
                GOOGLE PROFESSIONAL ACCREDITATIONS
              </span>
              <span className="text-[10px] font-mono text-accent">
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
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 bg-surface border border-border hover:border-border-strong transition-all"
                >
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-1">
                        {cert.issuer}
                      </span>
                      <h3 className="font-heading font-bold text-base text-text leading-snug">
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
                    <span className="text-[10px] font-mono tracking-editorial uppercase px-2.5 py-1 border border-accent/40 text-accent bg-surface-hover inline-flex items-center gap-1.5 font-medium">
                      <Check className="w-3 h-3 text-accent" />
                      <span>Verified</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Group 2: Core Engineering Foundations */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-border">
              <span className="text-xs font-mono tracking-spacious text-text uppercase font-semibold">
                PROGRAMMING & SYSTEMS ACCREDITATIONS
              </span>
              <span className="text-[10px] font-mono text-accent">
                {otherCerts.length} CREDENTIAL
              </span>
            </div>

            <div className="space-y-3.5">
              {otherCerts.map((cert) => (
                <div
                  key={cert.title}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 bg-surface border border-border hover:border-border-strong transition-all"
                >
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-1">
                        {cert.issuer}
                      </span>
                      <h3 className="font-heading font-bold text-base text-text leading-snug">
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
                    <span className="text-[10px] font-mono tracking-editorial uppercase px-2.5 py-1 border border-border-strong text-text-secondary bg-surface-hover inline-flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-text-muted" />
                      <span>Accredited</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
