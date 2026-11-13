import React from "react";

function Chrome({ title, children, featured = false }) {
  return (
    <div className={`project-frame h-full ${featured ? "min-h-[22rem] lg:min-h-[28rem]" : "min-h-[18rem]"}`}>
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-editorial text-text-muted">
          {title}
        </span>
      </div>
      <div className="project-frame-media h-[calc(100%-2.5rem)] p-4 sm:p-6">{children}</div>
    </div>
  );
}

function EduPulseVisual({ featured }) {
  return (
    <Chrome title="EduPulse / dashboard" featured={featured}>
      <div className="grid grid-cols-3 gap-2">
        {["1,420 enrolled", "94% attendance", "18 courses"].map((item) => (
          <div key={item} className="border border-border bg-bg p-3">
            <span className="block font-mono text-[9px] uppercase text-text-muted">
              Metric
            </span>
            <span className="font-heading text-sm text-text">{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {[96, 72, 54].map((width) => (
          <div key={width} className="border border-border bg-bg p-2">
            <div className="mb-1.5 h-1.5 overflow-hidden bg-stone">
              <div className="h-full bg-accent" style={{ width: `${width}%` }} />
            </div>
            <span className="font-mono text-[10px] text-text-muted">
              Course load {width}%
            </span>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

function RansomwareVisual() {
  return (
    <Chrome title="sandbox / audit log">
      <div className="space-y-1.5 bg-bg p-3 font-mono text-[11px] leading-relaxed text-text-secondary">
        <p>
          <span className="text-accent">{">"} </span>PBKDF2 key derivation
        </p>
        <p>
          <span className="text-accent">{">"} </span>AES-256-GCM isolated pass
        </p>
        <p>
          <span className="text-accent">{">"} </span>Entropy 7.99 bits/byte
        </p>
        <p>
          <span className="text-accent">{">"} </span>Rollback token verified
        </p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="border border-border bg-bg p-3">
          <span className="block font-mono text-[9px] uppercase text-text-muted">
            Containment
          </span>
          <span className="text-sm text-text">Sandbox only</span>
        </div>
        <div className="border border-border bg-bg p-3">
          <span className="block font-mono text-[9px] uppercase text-text-muted">
            Recovery
          </span>
          <span className="text-sm text-accent">Clean rollback</span>
        </div>
      </div>
    </Chrome>
  );
}

function StudyFlowVisual() {
  return (
    <Chrome title="StudyFlow / sentiment">
      <div className="border border-border bg-bg p-3 text-sm text-text-secondary">
        “The lectures were clear, but lab rubrics arrived late.”
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="border border-border bg-bg p-3">
          <span className="block font-mono text-[9px] uppercase text-text-muted">
            Polarity
          </span>
          <span className="text-accent">Constructive</span>
        </div>
        <div className="flex flex-wrap gap-1 border border-border bg-bg p-3">
          {["GRADING", "LABS", "LATENCY"].map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

function BoutiqueVisual() {
  return (
    <Chrome title="Madams Boutique / storefront">
      <div className="grid grid-cols-4 gap-2">
        {["01 Home", "02 Catalog", "03 Product", "04 Cart"].map((page) => (
          <div
            key={page}
            className="aspect-[3/4] border border-border bg-bg p-2 font-mono text-[10px] text-text-muted"
          >
            {page}
            <div className="mt-2 h-2/3 bg-accent-tint" />
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-editorial text-text-muted">
        Seven-page architecture · live on Netlify
      </p>
    </Chrome>
  );
}

export default function ProjectVisual({ project, featured = false }) {
  if (project.id === "01") return <EduPulseVisual featured={featured} />;
  if (project.id === "02") return <RansomwareVisual />;
  if (project.id === "03") return <StudyFlowVisual />;
  return <BoutiqueVisual />;
}
