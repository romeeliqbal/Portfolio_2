import React from "react";
import { Check } from "lucide-react";
import { certifications } from "../data/certifications";
import SectionReveal from "./SectionReveal";

export default function Certifications() {
  const googleCerts = certifications.filter((c) => c.issuer.includes("Google"));
  const otherCerts = certifications.filter((c) => !c.issuer.includes("Google"));

  const Group = ({ title, items, verifiedLabel }) => (
    <div>
      <div className="mb-6 flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-xs uppercase tracking-editorial text-text">
          {title}
        </span>
        <span className="font-mono text-[10px] text-accent">
          {items.length} {items.length === 1 ? "credential" : "credentials"}
        </span>
      </div>
      <div className="space-y-3">
        {items.map((cert, index) => (
          <SectionReveal
            key={cert.title}
            delay={index * 0.04}
            className="grid items-start gap-4 border border-border bg-surface p-6 transition-colors hover:border-border-strong lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-editorial text-accent">
                {cert.issuer}
              </span>
              <h3 className="font-heading text-base font-semibold leading-snug text-text">
                {cert.title}
              </h3>
              <span className="mt-2 block font-mono text-xs text-text-muted">
                {cert.year}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary lg:col-span-6">
              {cert.description}
            </p>
            <div className="lg:col-span-2 lg:flex lg:justify-end">
              <span className="inline-flex items-center gap-1.5 border border-accent/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-editorial text-accent">
                <Check className="h-3 w-3" />
                {verifiedLabel}
              </span>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="certifications"
      data-theme="dark"
      className="relative w-full border-t border-border bg-bg text-text"
    >
      <span id="credentials" className="sr-only" />
      <div className="site-wrap section-pad">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <span className="meta mb-3 block">06 · Credentials</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Verified study.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[11px] uppercase tracking-editorial text-text-muted">
            Google, Coursera, and programming foundations
          </p>
        </div>

        <div className="space-y-12">
          <Group
            title="Google professional credentials"
            items={googleCerts}
            verifiedLabel="Verified"
          />
          <Group
            title="Programming foundations"
            items={otherCerts}
            verifiedLabel="Accredited"
          />
        </div>
      </div>
    </section>
  );
}
