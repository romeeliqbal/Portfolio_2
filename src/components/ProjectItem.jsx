import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Plus, Minus } from "lucide-react";

/* --- Real Product Demo Panels --- */

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
    <div className="space-y-4 border border-[#222222] bg-[#0A0A0A] p-5 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#1E1E1E]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white" />
          <span className="text-[11px] font-bold text-white uppercase tracking-editorial">
            EDUPULSE // LIVE METRICS SIMULATION
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <button
            onClick={() => setFilter("ALL")}
            className={`px-2 py-0.5 border ${filter === "ALL" ? "border-white text-white bg-[#1A1A1A]" : "border-[#262626] text-[#777777]"}`}
          >
            ALL
          </button>
          <button
            onClick={() => setFilter("HIGH")}
            className={`px-2 py-0.5 border ${filter === "HIGH" ? "border-white text-white bg-[#1A1A1A]" : "border-[#262626] text-[#777777]"}`}
          >
            &gt;90% LOAD
          </button>
        </div>
      </div>

      {/* Real KPI Block */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-[#111111] border border-[#222222]">
          <span className="text-[9px] text-[#666666] block uppercase">
            Total Enrolled
          </span>
          <span className="text-base font-bold text-white">1,420</span>
        </div>
        <div className="p-3 bg-[#111111] border border-[#222222]">
          <span className="text-[9px] text-[#666666] block uppercase">
            Avg Attendance
          </span>
          <span className="text-base font-bold text-white">94.2%</span>
        </div>
        <div className="p-3 bg-[#111111] border border-[#222222]">
          <span className="text-[9px] text-[#666666] block uppercase">
            Courses Tracked
          </span>
          <span className="text-base font-bold text-white">18</span>
        </div>
        <div className="p-3 bg-[#111111] border border-[#222222]">
          <span className="text-[9px] text-[#666666] block uppercase">
            Schema Status
          </span>
          <span className="text-base font-bold text-[#CCCCCC]">SYNCED</span>
        </div>
      </div>

      {/* Course capacity visualizer */}
      <div className="space-y-2 pt-2">
        <span className="text-[10px] text-[#888888] uppercase block">
          Course Enrollment Capacity
        </span>
        {filteredCourses.map((c) => {
          const pct = Math.round((c.enrolled / c.cap) * 100);
          return (
            <div
              key={c.code}
              className="p-2.5 bg-[#121212] border border-[#1E1E1E]"
            >
              <div className="flex items-center justify-between text-[11px] mb-1.5">
                <span className="text-white font-medium">
                  {c.code} &bull; {c.name}
                </span>
                <span className="text-[#AAAAAA]">
                  {c.enrolled}/{c.cap} ({pct}%)
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#222222] overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-500"
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
    <div className="border border-[#222222] bg-[#0A0A0A] p-5 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#1E1E1E]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white" />
          <span className="text-[11px] font-bold text-white uppercase tracking-editorial">
            CRYPTOGRAPHIC AUDIT & EXECUTION LOG
          </span>
        </div>
        <button
          onClick={handleSimulate}
          disabled={running}
          className="px-3 py-1 border border-[#333333] hover:border-white text-text-secondary hover:text-white transition-colors text-[10px] uppercase"
        >
          {running ? "VERIFYING..." : "RE-RUN TEST"}
        </button>
      </div>

      {running ? (
        <div className="py-8 text-center space-y-2">
          <div className="w-6 h-6 border border-white border-t-transparent animate-spin mx-auto" />
          <span className="text-[10px] text-[#777777] block uppercase">
            Running sandbox verification...
          </span>
        </div>
      ) : (
        <div className="space-y-1.5 bg-[#0F0F0F] p-3 border border-[#1A1A1A] max-h-48 overflow-y-auto">
          {logs.map((log, i) => (
            <div key={i} className="text-[#AAAAAA] text-[11px] leading-relaxed">
              <span className="text-[#555555] select-none">{"> "}</span>
              {log}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[10px] pt-1">
        <div className="p-2 border border-[#1E1E1E] bg-[#111111]">
          <span className="text-[#666666] block">ALGORITHM</span>
          <span className="text-white font-medium">AES-256-GCM / PBKDF2</span>
        </div>
        <div className="p-2 border border-[#1E1E1E] bg-[#111111]">
          <span className="text-[#666666] block">CONTAINMENT</span>
          <span className="text-white font-medium">100% Sandbox Isolated</span>
        </div>
        <div className="p-2 border border-[#1E1E1E] bg-[#111111] col-span-2 sm:col-span-1">
          <span className="text-[#666666] block">RECOVERY AUDIT</span>
          <span className="text-white font-medium">
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
    <div className="border border-[#222222] bg-[#0A0A0A] p-5 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#1E1E1E]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white" />
          <span className="text-[11px] font-bold text-white uppercase tracking-editorial">
            STUDYFLOW // NLP SENTIMENT CLASSIFICATION
          </span>
        </div>
        <span className="text-[10px] text-[#666666] uppercase">
          SAMPLE INPUT SELECTOR
        </span>
      </div>

      {/* Select sample */}
      <div className="flex gap-2">
        {samples.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPrompt(idx)}
            className={`px-3 py-1.5 border text-[10px] uppercase transition-colors ${
              selectedPrompt === idx
                ? "border-white text-white bg-[#1A1A1A]"
                : "border-[#262626] text-[#777777] hover:text-white"
            }`}
          >
            Sample {idx + 1}
          </button>
        ))}
      </div>

      <div className="p-3 bg-[#111111] border border-[#1E1E1E]">
        <span className="text-[9px] text-[#666666] uppercase block mb-1">
          Student Feedback Text
        </span>
        <p className="text-white text-xs leading-relaxed font-sans">
          {current.text}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
        <div className="p-3 bg-[#111111] border border-[#1E1E1E]">
          <span className="text-[9px] text-[#666666] uppercase block mb-1">
            Polarity Score
          </span>
          <span className="text-white font-medium">{current.polarity}</span>
        </div>
        <div className="p-3 bg-[#111111] border border-[#1E1E1E]">
          <span className="text-[9px] text-[#666666] uppercase block mb-1">
            Extracted Keywords
          </span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {current.keywords.map((kw) => (
              <span
                key={kw}
                className="text-[9px] px-1.5 py-0.5 bg-[#1E1E1E] text-[#CCCCCC] border border-[#333333]"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 bg-[#141414] border border-[#2A2A2A]">
        <span className="text-[9px] text-[#888888] uppercase block mb-1">
          Generated Administrative Action
        </span>
        <p className="text-[#CCCCCC] text-xs font-sans">{current.action}</p>
      </div>
    </div>
  );
}

function MadamsBoutiqueDemo({ liveUrl }) {
  return (
    <div className="border border-[#222222] bg-[#0A0A0A] p-5 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#1E1E1E]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white" />
          <span className="text-[11px] font-bold text-white uppercase tracking-editorial">
            MADAMS BOUTIQUE // ARCHITECTURE SPEC
          </span>
        </div>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10px] text-white underline underline-offset-4 hover:text-[#CCCCCC]"
          >
            <span>LIVE PRODUCTION SITE</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-[#111111] border border-[#1E1E1E]">
          <span className="text-[9px] text-[#666666] block uppercase">
            Pages Engineered
          </span>
          <span className="text-base font-bold text-white">7 Pages</span>
        </div>
        <div className="p-3 bg-[#111111] border border-[#1E1E1E]">
          <span className="text-[9px] text-[#666666] block uppercase">
            Runtime JS Bundle
          </span>
          <span className="text-base font-bold text-white">14.2 KB</span>
        </div>
        <div className="p-3 bg-[#111111] border border-[#1E1E1E]">
          <span className="text-[9px] text-[#666666] block uppercase">
            Lighthouse Perf
          </span>
          <span className="text-base font-bold text-white">100 / 100</span>
        </div>
        <div className="p-3 bg-[#111111] border border-[#1E1E1E]">
          <span className="text-[9px] text-[#666666] block uppercase">
            Layout Shift (CLS)
          </span>
          <span className="text-base font-bold text-white">0.000</span>
        </div>
      </div>

      <div className="p-3 bg-[#111111] border border-[#1E1E1E] text-xs">
        <span className="text-[9px] text-[#666666] uppercase block mb-1.5">
          Page Architecture Manifest
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-[#AAAAAA]">
          <div className="border-l border-[#333333] pl-2">01. Home & Hero</div>
          <div className="border-l border-[#333333] pl-2">
            02. Curated Catalog
          </div>
          <div className="border-l border-[#333333] pl-2">
            03. Product Inspector
          </div>
          <div className="border-l border-[#333333] pl-2">
            04. Slide Cart Drawer
          </div>
          <div className="border-l border-[#333333] pl-2">
            05. Editorial Lookbook
          </div>
          <div className="border-l border-[#333333] pl-2">
            06. Brand Narrative
          </div>
          <div className="border-l border-[#333333] pl-2">
            07. Responsive Checkout
          </div>
        </div>
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`py-12 group transition-all duration-300 ${
        !isLast ? "border-b border-[#2A2A2A]" : ""
      }`}
    >
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex items-start gap-6 sm:gap-10">
          <span className="font-heading font-bold text-3xl sm:text-5xl text-text-muted group-hover:text-white transition-colors duration-300 w-12 shrink-0">
            {project.id}
          </span>

          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-[10px] font-mono tracking-editorial uppercase px-2 py-0.5 border border-[#2A2A2A] text-text-secondary bg-[#151515]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {project.year}
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl sm:text-4xl text-text-primary group-hover:text-white transition-colors mb-3">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed mb-6">
              {project.summary}
            </p>

            {/* Technologies list */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 bg-[#0E0E0E] border border-[#222222] text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex md:flex-col items-center md:items-end justify-between gap-4 pl-16 sm:pl-20 md:pl-0 shrink-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#2A2A2A] text-xs font-mono tracking-editorial uppercase text-text-primary hover:border-white hover:text-white hover:bg-[#151515] transition-all"
            aria-label={
              isExpanded
                ? `Hide details for ${project.title}`
                : `View architecture details for ${project.title}`
            }
          >
            <span>{isExpanded ? "Hide Details" : "View Details"}</span>
            {isExpanded ? (
              <Minus className="w-3.5 h-3.5" />
            ) : (
              <Plus className="w-3.5 h-3.5" />
            )}
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#2A2A2A] text-text-secondary hover:text-white hover:border-white transition-colors"
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
                className="p-2 border border-[#2A2A2A] text-text-secondary hover:text-white hover:border-white transition-colors"
                aria-label={`View live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
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
            className="overflow-hidden pl-0 sm:pl-16 md:pl-22 mt-8"
          >
            <div className="p-6 sm:p-8 bg-[#0E0E0E] border border-[#2A2A2A] space-y-6">
              {/* Drawer View Selector */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E1E1E]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("demo")}
                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-editorial transition-all border ${
                      activeTab === "demo"
                        ? "border-white text-white bg-[#1A1A1A]"
                        : "border-[#262626] text-text-secondary hover:text-white"
                    }`}
                  >
                    Interactive Verification Demo
                  </button>
                  <button
                    onClick={() => setActiveTab("spec")}
                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-editorial transition-all border ${
                      activeTab === "spec"
                        ? "border-white text-white bg-[#1A1A1A]"
                        : "border-[#262626] text-text-secondary hover:text-white"
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
                    <div className="p-4 bg-[#121212] border border-[#1E1E1E]">
                      <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2">
                        THE TECHNICAL CHALLENGE
                      </span>
                      <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 bg-[#121212] border border-[#1E1E1E]">
                      <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2">
                        ENGINEERING SOLUTION
                      </span>
                      <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architectural Highlights */}
                  <div className="pt-4 border-t border-[#1F1F1F]">
                    <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </span>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary"
                        >
                          <span className="font-mono text-[10px] text-text-muted shrink-0 mt-0.5">
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
              <div className="pt-4 border-t border-[#1F1F1F] flex flex-wrap items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Verified Technical Project &bull; Code available on request /
                  repo
                </span>

                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-text-primary hover:text-white underline underline-offset-4"
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
                      className="inline-flex items-center gap-2 text-xs font-mono text-text-primary hover:text-white underline underline-offset-4"
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
