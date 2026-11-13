import React, { useEffect, useState } from "react";
import { Grid, Info, Network } from "lucide-react";
import { categories, technologyNodes } from "../data/technologies";
import TechnologyModal from "./TechnologyModal";

export default function TechnologyNetwork() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState("matrix");

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
    if (found) setSelectedNode(found);
  };

  return (
    <section
      id="technologies"
      data-theme="light"
      className="w-full border-t border-border bg-bg text-text"
    >
      <div className="site-wrap section-pad">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="meta mb-3 block">03 · Skills</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Tools I actually use.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
              Grouped by how they show up in coursework and projects — not as
              proficiency scores.
            </p>
          </div>
          <div className="hidden items-center gap-1.5 self-start border border-border p-1 lg:flex">
            <button
              onClick={() => setViewMode("network")}
              className={`flex min-h-[36px] items-center gap-1.5 px-3 py-1.5 font-mono text-xs uppercase tracking-editorial ${
                viewMode === "network"
                  ? "bg-surface text-accent"
                  : "text-text-muted hover:text-text"
              }`}
              aria-label="Interactive network visualization view"
            >
              <Network className="h-3.5 w-3.5" />
              Map
            </button>
            <button
              onClick={() => setViewMode("matrix")}
              className={`flex min-h-[36px] items-center gap-1.5 px-3 py-1.5 font-mono text-xs uppercase tracking-editorial ${
                viewMode === "matrix"
                  ? "bg-surface text-accent"
                  : "text-text-muted hover:text-text"
              }`}
              aria-label="Structured category matrix view"
            >
              <Grid className="h-3.5 w-3.5" />
              Groups
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 border-b border-border pb-4">
          <button
            onClick={() => setActiveCategory("ALL")}
            className={`min-h-[44px] border px-3.5 py-1.5 font-mono text-xs uppercase tracking-editorial ${
              activeCategory === "ALL"
                ? "border-accent text-accent"
                : "border-border text-text-secondary hover:text-text"
            }`}
          >
            All ({technologyNodes.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(activeCategory === cat.id ? "ALL" : cat.id)
              }
              onMouseEnter={() => setHoveredCategory(cat.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`min-h-[44px] border px-3.5 py-1.5 font-mono text-xs uppercase tracking-editorial ${
                activeCategory === cat.id || hoveredCategory === cat.id
                  ? "border-accent text-accent"
                  : "border-border text-text-secondary hover:text-text"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        <p className="mb-6 flex items-center gap-2 font-mono text-xs text-text-muted">
          <Info className="h-3.5 w-3.5 shrink-0 text-accent" />
          Select a technology to read how it shows up in my work.
        </p>

        {viewMode === "network" ? (
          <div className="relative h-[580px] w-full overflow-hidden border border-border bg-stone sm:h-[640px]">
            <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full">
              {technologyNodes.map((node) => {
                const hub = categoryHubCoords[node.category];
                if (!hub) return null;
                const isConnected =
                  !currentCategoryFocus ||
                  currentCategoryFocus === node.category;
                return (
                  <line
                    key={`${node.id}-line`}
                    x1={`${hub.x}%`}
                    y1={`${hub.y}%`}
                    x2={`${node.coords.x}%`}
                    y2={`${node.coords.y}%`}
                    stroke={isConnected ? "#A84E25" : "#C8C3B8"}
                    strokeWidth={isConnected ? "1.2" : "0.8"}
                    strokeDasharray="3 3"
                  />
                );
              })}
            </svg>

            {categories.map((cat) => {
              const hub = categoryHubCoords[cat.id];
              const isFocus =
                !currentCategoryFocus || currentCategoryFocus === cat.id;
              return (
                <button
                  key={cat.id}
                  style={{
                    left: `${hub.x}%`,
                    top: `${hub.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`absolute z-20 border px-3 py-1.5 font-mono text-[10px] uppercase tracking-editorial ${
                    isFocus
                      ? "border-accent bg-ivory text-accent"
                      : "border-border bg-ivory/70 text-text-muted"
                  }`}
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === cat.id ? "ALL" : cat.id,
                    )
                  }
                >
                  [{cat.id}]
                </button>
              );
            })}

            {technologyNodes.map((node) => {
              const isHighlighted =
                !currentCategoryFocus ||
                currentCategoryFocus === node.category;
              return (
                <button
                  key={node.id}
                  style={{
                    left: `${node.coords.x}%`,
                    top: `${node.coords.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => setSelectedNode(node)}
                  className={`absolute z-10 flex items-center gap-2 border bg-ivory px-3.5 py-1.5 font-mono text-xs ${
                    isHighlighted
                      ? "border-border-strong text-text hover:border-accent hover:text-accent"
                      : "border-border text-text-muted opacity-40 hover:opacity-100"
                  }`}
                  aria-label={`Inspect ${node.name}`}
                >
                  <span className="h-1.5 w-1.5 bg-accent" />
                  {node.name}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="space-y-6 lg:col-span-7">
              {categories
                .filter((cat) =>
                  ["WEB", "DEVELOPMENT", "TOOLS"].includes(cat.id),
                )
                .filter(
                  (cat) =>
                    activeCategory === "ALL" || activeCategory === cat.id,
                )
                .map((cat) => (
                  <CategoryBlock
                    key={cat.id}
                    cat={cat}
                    onSelect={setSelectedNode}
                  />
                ))}
            </div>
            <div className="space-y-6 lg:col-span-5">
              {categories
                .filter((cat) => ["AI", "QA"].includes(cat.id))
                .filter(
                  (cat) =>
                    activeCategory === "ALL" || activeCategory === cat.id,
                )
                .map((cat) => (
                  <CategoryBlock
                    key={cat.id}
                    cat={cat}
                    onSelect={setSelectedNode}
                  />
                ))}
            </div>
          </div>
        )}

        <TechnologyModal
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          onSelectRelated={handleSelectRelated}
        />
      </div>
    </section>
  );
}

function CategoryBlock({ cat, onSelect }) {
  const nodesInCat = technologyNodes.filter((n) => n.category === cat.id);
  return (
    <div className="border border-border bg-surface p-6 sm:p-7">
      <div className="mb-3 flex items-baseline justify-between border-b border-border pb-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-accent">[{cat.id}]</span>
          <h3 className="font-heading text-base font-semibold text-text">
            {cat.label}
          </h3>
        </div>
        <span className="font-mono text-[10px] text-text-muted">
          {cat.count}
        </span>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-text-secondary">
        {cat.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {nodesInCat.map((node) => (
          <button
            key={node.id}
            onClick={() => onSelect(node)}
            className="chip flex min-h-[36px] items-center justify-between gap-3 text-left"
            aria-label={`Inspect ${node.name}`}
          >
            <span>{node.name}</span>
            <span className="text-[9px] uppercase text-text-muted">
              {node.status}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
