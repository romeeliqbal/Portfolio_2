import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { categories, technologyNodes } from '../data/technologies';
import TechnologyModal from './TechnologyModal';
import { Network, Grid, Info } from 'lucide-react';

export default function TechnologyNetwork() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState('network'); // 'network' | 'matrix'
  const containerRef = useRef(null);

  // Category coordinates for the network layout hubs (percentage-based)
  const categoryHubCoords = {
    WEB: { x: 22, y: 25 },
    DEVELOPMENT: { x: 52, y: 24 },
    AI: { x: 78, y: 25 },
    QA: { x: 28, y: 78 },
    TOOLS: { x: 72, y: 78 }
  };

  const currentCategoryFocus = hoveredCategory || (activeCategory !== 'ALL' ? activeCategory : null);

  const handleSelectRelated = (relatedName) => {
    const found = technologyNodes.find(
      (n) => n.name.toLowerCase() === relatedName.toLowerCase()
    );
    if (found) {
      setSelectedNode(found);
    }
  };

  return (
    <section id="technologies" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2A2A2A]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
            03 &bull; LIVE TECHNOLOGY NETWORK
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-text-primary uppercase mb-3">
            Technologies
          </h2>
          <p className="text-text-secondary text-sm sm:text-base font-light max-w-xl">
            Technologies I use to build, experiment, test, and solve problems.
            Click any node to inspect practical implementation context.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2 border border-[#2A2A2A] p-1 bg-[#111111] self-start md:self-end">
          <button
            onClick={() => setViewMode('network')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-editorial uppercase transition-colors ${
              viewMode === 'network'
                ? 'bg-[#222222] text-white'
                : 'text-text-muted hover:text-text-secondary'
            }`}
            aria-label="Interactive network visualization view"
          >
            <Network className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Network</span>
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-editorial uppercase transition-colors ${
              viewMode === 'matrix'
                ? 'bg-[#222222] text-white'
                : 'text-text-muted hover:text-text-secondary'
            }`}
            aria-label="Structured category matrix view"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Matrix</span>
          </button>
        </div>
      </div>

      {/* Category Filter Navigation */}
      <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#2A2A2A]/50">
        <button
          onClick={() => setActiveCategory('ALL')}
          onMouseEnter={() => setHoveredCategory(null)}
          className={`px-4 py-2 text-xs font-mono tracking-editorial uppercase transition-all border ${
            activeCategory === 'ALL'
              ? 'border-white text-white bg-[#1A1A1A]'
              : 'border-[#2A2A2A] text-text-secondary hover:border-[#555555] hover:text-text-primary bg-[#111111]'
          }`}
        >
          ALL ({technologyNodes.length})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? 'ALL' : cat.id)}
            onMouseEnter={() => setHoveredCategory(cat.id)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`px-4 py-2 text-xs font-mono tracking-editorial uppercase transition-all border ${
              activeCategory === cat.id || hoveredCategory === cat.id
                ? 'border-white text-white bg-[#1A1A1A]'
                : 'border-[#2A2A2A] text-text-secondary hover:border-[#555555] hover:text-text-primary bg-[#111111]'
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* NETWORK VIEW */}
      {viewMode === 'network' ? (
        <div
          ref={containerRef}
          className="relative w-full h-[580px] sm:h-[640px] bg-[#0E0E0E] border border-[#2A2A2A] overflow-hidden select-none"
        >
          {/* Architectural coordinate grid lines (replacing generic dot matrix) */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: 'linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)',
                backgroundSize: '64px 64px'
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
                  stroke={isConnectedToActive ? '#444444' : '#1A1A1A'}
                  strokeWidth={isConnectedToActive ? '1.2' : '0.8'}
                  strokeDasharray={isConnectedToActive ? '3 3' : 'none'}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Category Hub Nodes */}
          {categories.map((cat) => {
            const hub = categoryHubCoords[cat.id];
            if (!hub) return null;

            const isFocus = !currentCategoryFocus || currentCategoryFocus === cat.id;

            return (
              <div
                key={cat.id}
                style={{
                  left: `${hub.x}%`,
                  top: `${hub.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className={`absolute z-20 px-3 py-1.5 border font-mono text-[10px] tracking-spacious uppercase transition-all duration-200 cursor-pointer ${
                  isFocus
                    ? 'border-white text-white bg-[#1C1C1C]'
                    : 'border-[#2A2A2A] text-text-muted bg-[#111111] opacity-40'
                }`}
                onClick={() => setActiveCategory(activeCategory === cat.id ? 'ALL' : cat.id)}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                [{cat.id}]
              </div>
            );
          })}

          {/* Technology Nodes with purposeful, mechanical hover states (no floating loops) */}
          {technologyNodes.map((node) => {
            const isHighlighted =
              !currentCategoryFocus || currentCategoryFocus === node.category;

            return (
              <button
                key={node.id}
                style={{
                  left: `${node.coords.x}%`,
                  top: `${node.coords.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setSelectedNode(node)}
                className={`absolute z-10 px-3.5 py-1.5 border text-xs font-mono transition-all duration-150 cursor-pointer group flex items-center gap-2 ${
                  isHighlighted
                    ? 'border-[#383838] hover:border-white text-text-primary hover:text-white bg-[#141414] hover:bg-[#202020]'
                    : 'border-[#1C1C1C] text-[#444444] bg-[#0E0E0E] opacity-30 hover:opacity-100 hover:text-text-secondary hover:border-[#333333]'
                }`}
                aria-label={`Inspect ${node.name}`}
              >
                <span className="w-1.5 h-1.5 bg-[#777777] group-hover:bg-white transition-colors" />
                <span className="tracking-tight">{node.name}</span>
              </button>
            );
          })}

          {/* Interactive Hint */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-[10px] font-mono text-text-muted bg-[#0E0E0E] px-3 py-1.5 border border-[#2A2A2A]">
            <Info className="w-3 h-3 text-[#888888]" />
            <span>Click any technology node to inspect practical implementation</span>
          </div>
        </div>
      ) : (
        /* STRUCTURED TAXONOMY MATRIX (Asymmetrical 2-column system, replacing generic 3-in-a-row cards) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Core Systems & Web Architecture */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block pb-2 border-b border-[#2A2A2A]">
              SECTION A &bull; CLIENT-SIDE & CORE SYSTEMS
            </span>

            {categories
              .filter((cat) => ['WEB', 'DEVELOPMENT', 'TOOLS'].includes(cat.id))
              .filter((cat) => activeCategory === 'ALL' || activeCategory === cat.id)
              .map((cat) => {
                const nodesInCat = technologyNodes.filter((n) => n.category === cat.id);

                return (
                  <div
                    key={cat.id}
                    className="p-6 bg-[#0E0E0E] border border-[#222222] hover:border-[#333333] transition-colors"
                  >
                    <div className="flex items-baseline justify-between pb-3 mb-3 border-b border-[#1A1A1A]">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-text-muted">[{cat.id}]</span>
                        <h3 className="font-heading font-bold text-base text-text-primary">
                          {cat.label}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono text-text-muted">
                        {cat.count} NODES
                      </span>
                    </div>

                    <p className="text-xs text-text-secondary font-light mb-5">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {nodesInCat.map((node) => (
                        <button
                          key={node.id}
                          onClick={() => setSelectedNode(node)}
                          className="px-3 py-1.5 text-xs font-mono bg-[#141414] border border-[#262626] hover:border-white text-text-secondary hover:text-white transition-all text-left flex items-center justify-between gap-3"
                        >
                          <span>{node.name}</span>
                          <span className="text-[9px] text-text-muted uppercase">[{node.status}]</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Right Column: Intelligent Systems & Quality Engineering */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block pb-2 border-b border-[#2A2A2A]">
              SECTION B &bull; AI SYSTEMS & DEFENSIVE TESTING
            </span>

            {categories
              .filter((cat) => ['AI', 'QA'].includes(cat.id))
              .filter((cat) => activeCategory === 'ALL' || activeCategory === cat.id)
              .map((cat) => {
                const nodesInCat = technologyNodes.filter((n) => n.category === cat.id);

                return (
                  <div
                    key={cat.id}
                    className="p-6 bg-[#0E0E0E] border border-[#222222] hover:border-[#333333] transition-colors"
                  >
                    <div className="flex items-baseline justify-between pb-3 mb-3 border-b border-[#1A1A1A]">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-text-muted">[{cat.id}]</span>
                        <h3 className="font-heading font-bold text-base text-text-primary">
                          {cat.label}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono text-text-muted">
                        {cat.count} NODES
                      </span>
                    </div>

                    <p className="text-xs text-text-secondary font-light mb-5">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {nodesInCat.map((node) => (
                        <button
                          key={node.id}
                          onClick={() => setSelectedNode(node)}
                          className="px-3 py-1.5 text-xs font-mono bg-[#141414] border border-[#262626] hover:border-white text-text-secondary hover:text-white transition-all text-left flex items-center justify-between gap-3"
                        >
                          <span>{node.name}</span>
                          <span className="text-[9px] text-text-muted uppercase">[{node.status}]</span>
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
    </section>
  );
}
