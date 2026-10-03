import React, { useState, useRef, useEffect } from "react";
import { categories, technologyNodes } from "../data/technologies";
import TechnologyModal from "./TechnologyModal";
import { Network, Grid, Info } from "lucide-react";

export default function TechnologyNetwork() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState("matrix");
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setViewMode("network");
    }
  }, []);

  // Category coordinates for the network layout hubs (percentage-based)
  // Perfectly calibrated to avoid any overlap with technology node labels
  const categoryHubCoords = {
    WEB: { x: 20, y: 16 },
    DEVELOPMENT: { x: 50, y: 16 },
    AI: { x: 80, y: 16 },
    QA: { x: 25, y: 70 },
    TOOLS: { x: 75, y: 70 },
  };

  const currentCategoryFocus =
    hoveredCategory || (activeCategory !== "ALL" ? activeCategory : null);

  const handleSelectRelated = (relatedName) => {
    const found = technologyNodes.find(
      (n) => n.name.toLowerCase() === relatedName.toLowerCase(),
    );
    if (found) {
      setSelectedNode(found);
    }
  };

  return (
    <section id="technologies" className="w-full bg-bg border-t border-border">
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-editorial text-accent uppercase block mb-3 font-medium">
              03 &bull; LIVE TECHNOLOGY NETWORK
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl tracking-tight text-text uppercase break-normal hyphens-none mb-3">
              Technologies
            </h2>
            <p className="text-text-secondary text-sm sm:text-base font-normal max-w-xl leading-relaxed">
              Technologies I use to build, experiment, test, and solve problems.
              Click any node to inspect practical implementation context.
            </p>
          </div>

          {/* View mode toggle - available on large screens */}
          <div className="hidden lg:flex items-center gap-1.5 border border-border p-1 bg-surface self-start md:self-end">
            <button
              onClick={() => setViewMode("network")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-editorial uppercase transition-colors min-h-[36px] ${
                viewMode === "network"
                  ? "bg-surface-hover text-accent border border-border-strong"
                  : "text-text-muted hover:text-text-secondary border border-transparent"
              }`}
              aria-label="Interactive network visualization view"
            >
              <Network className="w-3.5 h-3.5" />
              <span>Network</span>
            </button>
            <button
              onClick={() => setViewMode("matrix")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-editorial uppercase transition-colors min-h-[36px] ${
                viewMode === "matrix"
                  ? "bg-surface-hover text-accent border border-border-strong"
                  : "text-text-muted hover:text-text-secondary border border-transparent"
              }`}
              aria-label="Structured category matrix view"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Matrix</span>
            </button>
          </div>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-border">
          <button
            onClick={() => setActiveCategory("ALL")}
            onMouseEnter={() => setHoveredCategory(null)}
            className={`px-3.5 py-1.5 text-xs font-mono tracking-editorial uppercase transition-all border min-h-[44px] ${
              activeCategory === "ALL"
                ? "border-accent text-accent bg-surface-hover font-medium"
                : "border-border text-text-secondary hover:border-border-strong hover:text-text bg-surface"
            }`}
          >
            ALL ({technologyNodes.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(activeCategory === cat.id ? "ALL" : cat.id)
              }
              onMouseEnter={() => setHoveredCategory(cat.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`px-3.5 py-1.5 text-xs font-mono tracking-editorial uppercase transition-all border min-h-[44px] ${
                activeCategory === cat.id || hoveredCategory === cat.id
                  ? "border-accent text-accent bg-surface-hover font-medium"
                  : "border-border text-text-secondary hover:border-border-strong hover:text-text bg-surface"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Hint banner relocated above canvas */}
        <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-4">
          <Info className="w-3.5 h-3.5 text-accent shrink-0" />
          <span>Click any technology node to inspect practical implementation context</span>
        </div>

        {/* NETWORK VIEW */}
        {viewMode === "network" ? (
          <div
            ref={containerRef}
            className="relative w-full h-[580px] sm:h-[640px] bg-surface border border-border overflow-hidden select-none"
          >
            {/* Architectural coordinate grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #2A2A27 1px, transparent 1px), linear-gradient(to bottom, #2A2A27 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />
            </div>

            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {technologyNodes.map((node) => {
                const hub = categoryHubCoords[node.category];
                if (!hub) return null;

                const isConnectedToActive =
                  !currentCategoryFocus || currentCategoryFocus === node.category;

                return (
                  <line
                    key={`${node.id}-line`}
                    x1={`${hub.x}%`}
                    y1={`${hub.y}%`}
                    x2={`${node.coords.x}%`}
                    y2={`${node.coords.y}%`}
                    stroke={isConnectedToActive ? "#3D3D38" : "#1F1F1C"}
                    strokeWidth={isConnectedToActive ? "1.2" : "0.8"}
                    strokeDasharray={isConnectedToActive ? "3 3" : "none"}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Category Hub Nodes */}
            {categories.map((cat) => {
              const hub = categoryHubCoords[cat.id];
              if (!hub) return null;

              const isFocus =
                !currentCategoryFocus || currentCategoryFocus === cat.id;

              return (
                <div
                  key={cat.id}
                  style={{
                    left: `${hub.x}%`,
                    top: `${hub.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`absolute z-20 px-3 py-1.5 border font-mono text-[10px] tracking-spacious uppercase transition-all duration-200 cursor-pointer ${
                    isFocus
                      ? "border-accent text-accent bg-surface-hover font-semibold shadow-sm"
                      : "border-border text-text-muted bg-surface opacity-40 hover:opacity-80"
                  }`}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat.id ? "ALL" : cat.id)
                  }
                  onMouseEnter={() => setHoveredCategory(cat.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  [{cat.id}]
                </div>
              );
            })}

            {/* Technology Nodes with clean, purposeful hover states */}
            {technologyNodes.map((node) => {
              const isHighlighted =
                !currentCategoryFocus || currentCategoryFocus === node.category;

              return (
                <button
                  key={node.id}
                  style={{
                    left: `${node.coords.x}%`,
                    top: `${node.coords.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => setSelectedNode(node)}
                  className={`absolute z-10 px-3.5 py-1.5 border text-xs font-mono transition-all duration-150 cursor-pointer group flex items-center gap-2 ${
                    isHighlighted
                      ? "border-border-strong hover:border-accent text-text hover:text-accent bg-surface hover:bg-surface-hover"
                      : "border-border/40 text-text-muted/50 bg-surface/40 opacity-40 hover:opacity-100 hover:text-text hover:border-border-strong"
                  }`}
                  aria-label={`Inspect ${node.name}`}
                >
                  <span className="w-1.5 h-1.5 bg-text-muted group-hover:bg-accent transition-colors" />
                  <span className="tracking-tight">{node.name}</span>
                </button>
              );
            })}
          </div>
        ) : (
          /* STRUCTURED TAXONOMY MATRIX */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Column: Core Systems & Web Architecture */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-editorial text-accent uppercase block pb-2 border-b border-border">
                SECTION A &bull; CLIENT-SIDE & CORE SYSTEMS
              </span>

              {categories
                .filter((cat) => ["WEB", "DEVELOPMENT", "TOOLS"].includes(cat.id))
                .filter(
                  (cat) => activeCategory === "ALL" || activeCategory === cat.id,
                )
                .map((cat) => {
                  const nodesInCat = technologyNodes.filter(
                    (n) => n.category === cat.id,
                  );

                  return (
                    <div
                      key={cat.id}
                      className="p-6 sm:p-7 bg-surface border border-border hover:border-border-strong transition-all"
                    >
                      <div className="flex items-baseline justify-between pb-3 mb-3 border-b border-border">
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-xs text-accent">
                            [{cat.id}]
                          </span>
                          <h3 className="font-heading font-bold text-base text-text">
                            {cat.label}
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono text-text-muted">
                          {cat.count} NODES
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-text-secondary font-normal mb-5 leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {nodesInCat.map((node) => (
                          <button
                            key={node.id}
                            onClick={() => setSelectedNode(node)}
                            className="px-3 py-1.5 text-xs font-mono bg-surface-hover border border-border hover:border-accent text-text-secondary hover:text-text transition-all text-left flex items-center justify-between gap-3 group min-h-[36px]"
                          >
                            <span className="font-medium">{node.name}</span>
                            <span className="text-[9px] text-text-muted uppercase font-mono group-hover:text-accent">
                              [{node.status}]
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Right Column: Intelligent Systems & Quality Engineering */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono tracking-editorial text-accent uppercase block pb-2 border-b border-border">
                SECTION B &bull; AI SYSTEMS & DEFENSIVE TESTING
              </span>

              {categories
                .filter((cat) => ["AI", "QA"].includes(cat.id))
                .filter(
                  (cat) => activeCategory === "ALL" || activeCategory === cat.id,
                )
                .map((cat) => {
                  const nodesInCat = technologyNodes.filter(
                    (n) => n.category === cat.id,
                  );

                  return (
                    <div
                      key={cat.id}
                      className="p-6 sm:p-7 bg-surface border border-border hover:border-border-strong transition-all"
                    >
                      <div className="flex items-baseline justify-between pb-3 mb-3 border-b border-border">
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-xs text-accent">
                            [{cat.id}]
                          </span>
                          <h3 className="font-heading font-bold text-base text-text">
                            {cat.label}
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono text-text-muted">
                          {cat.count} NODES
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-text-secondary font-normal mb-5 leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {nodesInCat.map((node) => (
                          <button
                            key={node.id}
                            onClick={() => setSelectedNode(node)}
                            className="px-3 py-1.5 text-xs font-mono bg-surface-hover border border-border hover:border-accent text-text-secondary hover:text-text transition-all text-left flex items-center justify-between gap-3 group min-h-[36px]"
                          >
                            <span className="font-medium">{node.name}</span>
                            <span className="text-[9px] text-text-muted uppercase font-mono group-hover:text-accent">
                              [{node.status}]
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Node Inspector Modal */}
        <TechnologyModal
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          onSelectRelated={handleSelectRelated}
        />
      </div>
    </section>
  );
}
