import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

export function EduPulseDemo() {
  const [filter, setFilter] = useState("ALL");
  const courses = [
    {
      code: "CS-301",
      name: "Data Structures & Algorithms",
      enrolled: 48,
      cap: 50,
    },
    {
      code: "SE-204",
      name: "Database Systems & Architecture",
      enrolled: 43,
      cap: 45,
    },
    {
      code: "SE-102",
      name: "Web Engineering Principles",
      enrolled: 58,
      cap: 60,
    },
    {
      code: "CS-402",
      name: "Operating Systems & Security",
      enrolled: 32,
      cap: 50,
    },
  ];
  const filtered =
    filter === "HIGH" ? courses.filter((c) => c.enrolled / c.cap > 0.9) : courses;

  return (
    <div className="space-y-4 border border-border bg-surface p-5 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
        <span className="font-medium uppercase tracking-editorial text-text">
          EduPulse · metrics simulation
        </span>
        <div className="flex gap-1.5">
          {["ALL", "HIGH"].map((id) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`min-h-[36px] border px-2.5 py-1 ${
                filter === id
                  ? "border-accent bg-surface-hover text-accent"
                  : "border-border text-text-muted hover:text-text"
              }`}
            >
              {id === "HIGH" ? ">90% load" : "All"}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Total enrolled", "1,420"],
          ["Avg attendance", "94.2%"],
          ["Courses tracked", "18"],
          ["Schema", "Synced"],
        ].map(([label, value]) => (
          <div key={label} className="border border-border bg-bg p-3">
            <span className="block text-[9px] uppercase text-text-muted">
              {label}
            </span>
            <span className="text-base font-semibold text-text">{value}</span>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {filtered.map((c) => {
          const pct = Math.round((c.enrolled / c.cap) * 100);
          return (
            <div key={c.code} className="border border-border bg-bg p-2.5">
              <div className="mb-1.5 flex items-center justify-between text-[11px]">
                <span className="text-text">
                  {c.code} · {c.name}
                </span>
                <span className="text-text-muted">
                  {c.enrolled}/{c.cap}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden bg-stone">
                <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function RansomwareDemo() {
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState([
    "[18:04:11] INITIALIZE: PBKDF2 key derivation (SHA-256 / 100,000 iterations)",
    "[18:04:11] ISOLATION: Mock test sandbox initialized",
    "[18:04:12] ENCRYPTION: AES-256-GCM pass on sandbox targets",
    "[18:04:13] DEFENSE: Rollback token validated; test keys purged",
  ]);

  const handleSimulate = () => {
    setRunning(true);
    setTimeout(() => {
      setLogs((prev) => [
        ...prev.slice(1),
        `[${new Date().toTimeString().slice(0, 8)}] AUDIT: Isolation re-verified`,
      ]);
      setRunning(false);
    }, 600);
  };

  return (
    <div className="space-y-4 border border-border bg-surface p-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-medium uppercase tracking-editorial text-text">
          Cryptographic audit log
        </span>
        <button
          onClick={handleSimulate}
          disabled={running}
          className="min-h-[36px] border border-border px-3 py-1.5 uppercase text-text-secondary hover:border-accent hover:text-text"
        >
          {running ? "Verifying..." : "Re-run test"}
        </button>
      </div>
      {running ? (
        <div className="py-8 text-center">
          <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          <span className="mt-2 block text-[10px] uppercase text-text-muted">
            Running sandbox verification
          </span>
        </div>
      ) : (
        <div className="max-h-48 space-y-1.5 overflow-y-auto border border-border bg-bg p-3">
          {logs.map((log) => (
            <div key={log} className="text-[11px] text-text-secondary">
              <span className="text-accent">{"> "}</span>
              {log}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function StudyFlowDemo() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const samples = [
    {
      text: "The data structures lectures were clear, but the grading rubrics for lab submissions were delayed.",
      polarity: "Constructive negative",
      keywords: ["GRADING_RUBRICS", "LAB_SUBMISSIONS", "LATENCY"],
      action: "Standardize rubric delivery before lab milestones.",
    },
    {
      text: "Outstanding breakdown of relational normal forms with clean whiteboard schematics.",
      polarity: "Strong positive",
      keywords: ["NORMAL_FORMS", "RELATIONAL_DESIGN", "CLARITY"],
      action: "Archive lecture schematics as departmental study guides.",
    },
  ];
  const current = samples[selectedPrompt];

  return (
    <div className="space-y-4 border border-border bg-surface p-5 font-mono text-xs">
      <div className="flex gap-2">
        {samples.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPrompt(idx)}
            className={`min-h-[36px] border px-3 py-1.5 uppercase ${
              selectedPrompt === idx
                ? "border-accent text-accent"
                : "border-border text-text-muted hover:text-text"
            }`}
          >
            Sample {idx + 1}
          </button>
        ))}
      </div>
      <div className="border border-border bg-bg p-3">
        <span className="mb-1 block text-[9px] uppercase text-text-muted">
          Feedback text
        </span>
        <p className="font-body text-xs leading-relaxed text-text">{current.text}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="border border-border bg-bg p-3">
          <span className="mb-1 block text-[9px] uppercase text-text-muted">
            Polarity
          </span>
          <span className="text-accent">{current.polarity}</span>
        </div>
        <div className="border border-border bg-bg p-3">
          <span className="mb-1 block text-[9px] uppercase text-text-muted">
            Keywords
          </span>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {current.keywords.map((kw) => (
              <span key={kw} className="chip">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-border bg-bg p-3">
        <span className="mb-1 block text-[9px] uppercase text-text-muted">
          Suggested action
        </span>
        <p className="font-body text-xs text-text-secondary">{current.action}</p>
      </div>
    </div>
  );
}

export function MadamsBoutiqueDemo({ liveUrl }) {
  return (
    <div className="space-y-4 border border-border bg-surface p-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-medium uppercase tracking-editorial text-text">
          Storefront architecture
        </span>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] items-center gap-1.5 text-[10px] text-accent underline underline-offset-4"
          >
            Live site
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Pages", "7"],
          ["Runtime JS", "14.2 KB"],
          ["Lighthouse", "100"],
          ["CLS", "0.000"],
        ].map(([label, value]) => (
          <div key={label} className="border border-border bg-bg p-3">
            <span className="block text-[9px] uppercase text-text-muted">
              {label}
            </span>
            <span className="text-base font-semibold text-text">{value}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px] text-text-secondary sm:grid-cols-4">
        {[
          "Home & hero",
          "Catalog",
          "Product inspector",
          "Cart drawer",
          "Lookbook",
          "Brand narrative",
          "Checkout",
        ].map((page, idx) => (
          <div key={page} className="border-l border-border-strong pl-2">
            {String(idx + 1).padStart(2, "0")}. {page}
          </div>
        ))}
      </div>
    </div>
  );
}
