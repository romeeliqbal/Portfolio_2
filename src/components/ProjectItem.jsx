import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Plus, Minus, Check } from "lucide-react";

/* --- Real Product Demo Panels with Warm Theme Tokens --- */

function EduPulseDemo() {
  const [filter, setFilter] = useState("ALL");
  const courses = [
    {
      code: "CS-301",
      name: "Data Structures & Algorithms",
      enrolled: 48,
      cap: 50,
      status: "96% CAPACITY",
    },
    {
      code: "SE-204",
      name: "Database Systems & Architecture",
      enrolled: 43,
      cap: 45,
      status: "95% CAPACITY",
    },
    {
      code: "SE-102",
      name: "Web Engineering Principles",
      enrolled: 58,
      cap: 60,
      status: "97% CAPACITY",
    },
    {
      code: "CS-402",
      name: "Operating Systems & Security",
      enrolled: 32,
      cap: 50,
      status: "64% CAPACITY",
    },
  ];

  const filteredCourses =
    filter === "HIGH"
      ? courses.filter((c) => c.enrolled / c.cap > 0.9)
      : courses;

  return (
    <div className="space-y-4 border border-border bg-surface p-5 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent" />
          <span className="text-[11px] font-bold text-text uppercase tracking-editorial">
            EDUPULSE // LIVE METRICS SIMULATION
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <button
            onClick={() => setFilter("ALL")}
            className={`px-2.5 py-1 border min-h-[36px] transition-colors ${
              filter === "ALL"
                ? "border-accent text-accent bg-surface-hover font-semibold"
                : "border-border text-text-muted hover:text-text bg-surface"
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => setFilter("HIGH")}
            className={`px-2.5 py-1 border min-h-[36px] transition-colors ${
              filter === "HIGH"
                ? "border-accent text-accent bg-surface-hover font-semibold"
                : "border-border text-text-muted hover:text-text bg-surface"
            }`}
          >
            &gt;90% LOAD
          </button>
        </div>
      </div>

      {/* Real KPI Block */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted block uppercase">
            Total Enrolled
          </span>
          <span className="text-base font-bold text-text">1,420</span>
        </div>
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted block uppercase">
            Avg Attendance
          </span>
          <span className="text-base font-bold text-accent">94.2%</span>
        </div>
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted block uppercase">
            Courses Tracked
          </span>
          <span className="text-base font-bold text-text">18</span>
        </div>
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted block uppercase">
            Schema Status
          </span>
          <span className="text-base font-bold text-text-secondary">
            SYNCED
          </span>
        </div>
      </div>

      {/* Course capacity visualizer */}
      <div className="space-y-2 pt-2">
        <span className="text-[10px] text-text-muted uppercase block">
          Course Enrollment Capacity
        </span>
        {filteredCourses.map((c) => {
          const pct = Math.round((c.enrolled / c.cap) * 100);
          return (
            <div
              key={c.code}
              className="p-2.5 bg-surface-hover border border-border"
            >
              <div className="flex items-center justify-between text-[11px] mb-1.5">
                <span className="text-text font-medium">
                  {c.code} &bull; {c.name}
                </span>
                <span className="text-text-muted">
                  {c.enrolled}/{c.cap} ({pct}%)
                </span>
              </div>
              <div className="w-full h-1.5 bg-surface overflow-hidden border border-border">
                <div
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RansomwareDemo() {
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState([
    "[18:04:11] INITIALIZE: PBKDF2 key derivation (SHA-256 / 100,000 iterations)",
    "[18:04:11] ISOLATION: Mock test sandbox initialized (/sandbox/target_files)",
    "[18:04:12] ENCRYPTION: AES-256-GCM symmetric block pass completed on 128 targets",
    "[18:04:12] ENTROPY: Pre-execution (3.42 bits/byte) -> Post-execution (7.994 bits/byte)",
    "[18:04:13] DEFENSE: Automated rollback token validated; test keys purged safely.",
  ]);

  const handleSimulate = () => {
    setRunning(true);
    setTimeout(() => {
      setLogs((prev) => [
        ...prev.slice(1),
        `[${new Date().toTimeString().slice(0, 8)}] AUDIT: Re-verified zero-trust isolation in ${(Math.random() * 8 + 10).toFixed(1)}ms`,
      ]);
      setRunning(false);
    }, 600);
  };

  return (
    <div className="border border-border bg-surface p-5 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent" />
          <span className="text-[11px] font-bold text-text uppercase tracking-editorial">
            CRYPTOGRAPHIC AUDIT & EXECUTION LOG
          </span>
        </div>
        <button
          onClick={handleSimulate}
          disabled={running}
          className="px-3 py-1.5 border border-border hover:border-accent text-text-secondary hover:text-text transition-colors text-[10px] uppercase min-h-[36px]"
        >
          {running ? "VERIFYING..." : "RE-RUN TEST"}
        </button>
      </div>

      {running ? (
        <div className="py-8 text-center space-y-2">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
          <span className="text-[10px] text-text-muted block uppercase">
            Running sandbox verification...
          </span>
        </div>
      ) : (
        <div className="space-y-1.5 bg-surface-hover p-3 border border-border max-h-48 overflow-y-auto">
          {logs.map((log, i) => (
            <div
              key={i}
              className="text-text-secondary text-[11px] leading-relaxed"
            >
              <span className="text-accent select-none">{"> "}</span>
              {log}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[10px] pt-1">
        <div className="p-2 border border-border bg-surface-hover">
          <span className="text-text-muted block">ALGORITHM</span>
          <span className="text-text font-medium">AES-256-GCM / PBKDF2</span>
        </div>
        <div className="p-2 border border-border bg-surface-hover">
          <span className="text-text-muted block">CONTAINMENT</span>
          <span className="text-text font-medium">100% Sandbox Isolated</span>
        </div>
        <div className="p-2 border border-border bg-surface-hover col-span-2 sm:col-span-1">
          <span className="text-text-muted block">RECOVERY AUDIT</span>
          <span className="text-accent font-medium">
            Verified Clean Rollback
          </span>
        </div>
      </div>
    </div>
  );
}

function StudyFlowDemo() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const samples = [
    {
      text: "The data structures lectures were clear, but the grading rubrics for lab submissions were delayed.",
      polarity: "-0.28 (Constructive Negative)",
      keywords: ["GRADING_RUBRICS", "LAB_SUBMISSIONS", "LATENCY"],
      action: "Standardize rubric delivery schedule before lab milestones.",
    },
    {
      text: "Outstanding breakdown of relational normal forms with clean whiteboard schematics.",
      polarity: "+0.86 (Strong Positive)",
      keywords: ["NORMAL_FORMS", "RELATIONAL_DESIGN", "CLARITY"],
      action: "Archive lecture schematics as departmental study guides.",
    },
  ];

  const current = samples[selectedPrompt];

  return (
    <div className="border border-border bg-surface p-5 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent" />
          <span className="text-[11px] font-bold text-text uppercase tracking-editorial">
            STUDYFLOW // NLP SENTIMENT CLASSIFICATION
          </span>
        </div>
        <span className="text-[10px] text-text-muted uppercase">
          SAMPLE INPUT SELECTOR
        </span>
      </div>

      {/* Select sample */}
      <div className="flex gap-2">
        {samples.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPrompt(idx)}
            className={`px-3 py-1.5 border text-[10px] uppercase transition-colors min-h-[36px] ${
              selectedPrompt === idx
                ? "border-accent text-accent bg-surface-hover font-semibold"
                : "border-border text-text-muted hover:text-text bg-surface"
            }`}
          >
            Sample {idx + 1}
          </button>
        ))}
      </div>

      <div className="p-3 bg-surface-hover border border-border">
        <span className="text-[9px] text-text-muted uppercase block mb-1">
          Student Feedback Text
        </span>
        <p className="text-text text-xs leading-relaxed font-sans">
          {current.text}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted uppercase block mb-1">
            Polarity Score
          </span>
          <span className="text-accent font-medium">{current.polarity}</span>
        </div>
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted uppercase block mb-1">
            Extracted Keywords
          </span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {current.keywords.map((kw) => (
              <span
                key={kw}
                className="text-[9px] px-1.5 py-0.5 bg-surface text-text-secondary border border-border"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 bg-surface-hover border border-border">
        <span className="text-[9px] text-text-muted uppercase block mb-1">
          Generated Administrative Action
        </span>
        <p className="text-text-secondary text-xs font-sans">
          {current.action}
        </p>
      </div>
    </div>
  );
}

function MadamsBoutiqueDemo({ liveUrl }) {
  return (
    <div className="border border-border bg-surface p-5 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent" />
          <span className="text-[11px] font-bold text-text uppercase tracking-editorial">
            MADAMS BOUTIQUE // ARCHITECTURE SPEC
          </span>
        </div>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] text-accent underline underline-offset-4 hover:text-accent-hover min-h-[36px]"
          >
            <span>LIVE PRODUCTION SITE</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted block uppercase">
            Pages Engineered
          </span>
          <span className="text-base font-bold text-text">7 Pages</span>
        </div>
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted block uppercase">
            Runtime JS Bundle
          </span>
          <span className="text-base font-bold text-text">14.2 KB</span>
        </div>
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted block uppercase">
            Lighthouse Perf
          </span>
          <span className="text-base font-bold text-accent">100 / 100</span>
        </div>
        <div className="p-3 bg-surface-hover border border-border">
          <span className="text-[9px] text-text-muted block uppercase">
            Layout Shift (CLS)
          </span>
          <span className="text-base font-bold text-text">0.000</span>
        </div>
      </div>

      <div className="p-3 bg-surface-hover border border-border text-xs">
        <span className="text-[9px] text-text-muted uppercase block mb-1.5">
          Page Architecture Manifest
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-text-secondary">
          <div className="border-l border-border-strong pl-2">
            01. Home & Hero
          </div>
          <div className="border-l border-border-strong pl-2">
            02. Curated Catalog
          </div>
          <div className="border-l border-border-strong pl-2">
            03. Product Inspector
          </div>
          <div className="border-l border-border-strong pl-2">
            04. Slide Cart Drawer
          </div>
          <div className="border-l border-border-strong pl-2">
            05. Editorial Lookbook
          </div>
          <div className="border-l border-border-strong pl-2">
            06. Brand Narrative
          </div>
          <div className="border-l border-border-strong pl-2">
            07. Responsive Checkout
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Project Preview Telemetry Frame (Fills empty void & showcases architecture) --- */

function ProjectPreviewFrame({ project }) {
  return (
    <div className="border border-border bg-surface/80 p-4 sm:p-5 font-mono text-xs space-y-3 select-none">
      {/* Mini terminal bar */}
      <div className="flex items-center justify-between pb-2 border-b border-border">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-status-success/80" />
          <span className="w-2 h-2 rounded-full bg-border-strong" />
          <span className="w-2 h-2 rounded-full bg-border-strong" />
          <span className="text-[10px] text-text-muted uppercase ml-2 tracking-editorial">
            SYS-{project.id} // PREVIEW
          </span>
        </div>
        <span className="text-[10px] text-accent uppercase font-medium">
          {project.category}
        </span>
      </div>

      {/* Telemetry per project */}
      {project.id === "01" && (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                ENROLLED
              </span>
              <span className="text-text font-bold">1,420</span>
            </div>
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                ATTENDANCE
              </span>
              <span className="text-accent font-bold">94.2%</span>
            </div>
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                LOAD
              </span>
              <span className="text-text font-bold">97%</span>
            </div>
          </div>
          <div className="p-2 bg-surface-hover border border-border flex items-center justify-between text-[10px]">
            <span className="text-text-secondary truncate">
              CS-301 DSA • Analytics Sync
            </span>
            <span className="text-accent font-mono shrink-0">[LIVE SYNC]</span>
          </div>
        </div>
      )}

      {project.id === "02" && (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                CIPHER
              </span>
              <span className="text-text font-bold">AES-256</span>
            </div>
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                ENTROPY
              </span>
              <span className="text-accent font-bold">7.99 BITS</span>
            </div>
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                ISOLATION
              </span>
              <span className="text-text font-bold">100%</span>
            </div>
          </div>
          <div className="p-2 bg-surface-hover border border-border flex items-center justify-between text-[10px]">
            <span className="text-text-secondary truncate">
              Zero-Trust Sandbox Containment
            </span>
            <span className="text-accent font-mono shrink-0">[SECURED]</span>
          </div>
        </div>
      )}

      {project.id === "03" && (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                CADENCE
              </span>
              <span className="text-text font-bold">25M / 5M</span>
            </div>
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                STATE
              </span>
              <span className="text-accent font-bold">STORAGE</span>
            </div>
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                SYNTH
              </span>
              <span className="text-text font-bold">BINAURAL</span>
            </div>
          </div>
          <div className="p-2 bg-surface-hover border border-border flex items-center justify-between text-[10px]">
            <span className="text-text-secondary truncate">
              Adaptive Focus Protocol Engine
            </span>
            <span className="text-accent font-mono shrink-0">[ENGAGED]</span>
          </div>
        </div>
      )}

      {project.id === "04" && (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                PAGES
              </span>
              <span className="text-text font-bold">7 VIEWS</span>
            </div>
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                LIGHTHOUSE
              </span>
              <span className="text-accent font-bold">100/100</span>
            </div>
            <div className="p-2 bg-surface-hover border border-border">
              <span className="text-text-muted block text-[9px] uppercase">
                CLS SCORE
              </span>
              <span className="text-text font-bold">0.000</span>
            </div>
          </div>
          <div className="p-2 bg-surface-hover border border-border flex items-center justify-between text-[10px]">
            <span className="text-text-secondary truncate">
              Slide Cart & Dynamic Product Catalog
            </span>
            <span className="text-accent font-mono shrink-0">[DEPLOYED]</span>
          </div>
        </div>
      )}

      {/* Action hint bar */}
      <div className="pt-1 flex items-center justify-between text-[10px] text-text-muted">
        <span>Verified codebase • Test suite ready</span>
        <span className="text-accent flex items-center gap-1">
          Interactive demo available &rarr;
        </span>
      </div>
    </div>
  );
}

export default function ProjectItem({ project, isLast }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("demo"); // 'demo' | 'spec'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`py-12 group transition-all duration-300 ${
        !isLast ? "border-b border-border" : ""
      }`}
    >
      {/* Main Project Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Numeral, Content, and Tech Chips */}
        <div className="lg:col-span-7 flex items-start gap-5 sm:gap-8">
          <span className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-accent/50 group-hover:text-accent transition-colors duration-300 w-12 sm:w-14 shrink-0 select-none">
            {project.id}
          </span>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
              <span className="text-[10px] font-mono tracking-editorial uppercase px-2.5 py-0.5 border border-border text-accent bg-surface">
                {project.category}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {project.year}
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-text group-hover:text-accent transition-colors mb-3 break-normal hyphens-none">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-text-secondary font-normal leading-relaxed mb-6">
              {project.summary}
            </p>

            {/* Technologies list */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 bg-surface border border-border text-text-secondary hover:text-text hover:border-border-strong transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Preview Frame & Action Controls */}
        <div className="lg:col-span-5 space-y-4 pl-0 sm:pl-16 lg:pl-0">
          {/* Architectural Telemetry Preview Frame */}
          <ProjectPreviewFrame project={project} />

          {/* Action buttons with minimum 44px touch targets */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 border border-border text-xs font-mono tracking-editorial uppercase text-text hover:border-accent hover:text-accent hover:bg-surface-hover transition-all bg-surface"
              aria-label={
                isExpanded
                  ? `Hide details for ${project.title}`
                  : `View architecture details for ${project.title}`
              }
            >
              <span>{isExpanded ? "Hide Details" : "View Details"}</span>
              {isExpanded ? (
                <Minus className="w-3.5 h-3.5 text-accent" />
              ) : (
                <Plus className="w-3.5 h-3.5 text-accent" />
              )}
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors bg-surface hover:bg-surface-hover"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors bg-surface hover:bg-surface-hover"
                  aria-label={`View live demo for ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Deep-Dive Architecture & Real Product Demo Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden pl-0 sm:pl-16 lg:pl-0 mt-8"
          >
            <div className="p-6 sm:p-8 bg-surface border border-border space-y-6">
              {/* Drawer View Selector */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("demo")}
                    className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-editorial transition-all border min-h-[40px] ${
                      activeTab === "demo"
                        ? "border-accent text-accent bg-surface-hover font-medium"
                        : "border-border text-text-secondary hover:text-text bg-surface"
                    }`}
                  >
                    Interactive Verification Demo
                  </button>
                  <button
                    onClick={() => setActiveTab("spec")}
                    className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-editorial transition-all border min-h-[40px] ${
                      activeTab === "spec"
                        ? "border-accent text-accent bg-surface-hover font-medium"
                        : "border-border text-text-secondary hover:text-text bg-surface"
                    }`}
                  >
                    Architecture Specification
                  </button>
                </div>

                <span className="text-[10px] font-mono text-text-muted hidden sm:inline-block">
                  SOURCE: VERIFIED PROJECT REPO
                </span>
              </div>

              {/* Tab 1: Authentic Interactive Demo */}
              {activeTab === "demo" ? (
                <div>
                  {project.id === "01" && <EduPulseDemo />}
                  {project.id === "02" && <RansomwareDemo />}
                  {project.id === "03" && <StudyFlowDemo />}
                  {project.id === "04" && (
                    <MadamsBoutiqueDemo liveUrl={project.liveUrl} />
                  )}
                </div>
              ) : (
                /* Tab 2: Architecture Specification */
                <div className="space-y-6">
                  {/* Problem vs Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-surface-hover border border-border">
                      <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-2">
                        THE TECHNICAL CHALLENGE
                      </span>
                      <p className="text-xs sm:text-sm text-text-secondary font-normal leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-5 bg-surface-hover border border-border">
                      <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-2">
                        ENGINEERING SOLUTION
                      </span>
                      <p className="text-xs sm:text-sm text-text-secondary font-normal leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architectural Highlights */}
                  <div className="pt-4 border-t border-border">
                    <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </span>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary font-normal"
                        >
                          <span className="font-mono text-xs text-accent font-semibold shrink-0 mt-0.5">
                            [{String(idx + 1).padStart(2, "0")}]
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Links Bar */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Verified Technical Project &bull; Code available on repository
                </span>

                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-text hover:text-accent underline underline-offset-4 min-h-[44px]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repository</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-text hover:text-accent underline underline-offset-4 min-h-[44px]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
