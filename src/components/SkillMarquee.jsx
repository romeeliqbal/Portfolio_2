import React from "react";
import { technologyNodes } from "../data/technologies";

export default function SkillMarquee() {
  const labels = technologyNodes.map((node) => node.name);
  const loop = [...labels, ...labels];

  return (
    <div
      className="overflow-hidden border-y border-border bg-bg"
      data-theme="light"
      aria-hidden="true"
    >
      <div className="marquee-track py-3 text-[11px] font-mono uppercase tracking-editorial text-text-muted">
        {loop.map((label, index) => (
          <span key={`${label}-${index}`} className="flex items-center gap-8">
            {label}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
