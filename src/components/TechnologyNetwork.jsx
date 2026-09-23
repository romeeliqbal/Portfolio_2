import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { categories, technologyNodes } from '../data/technologies';
import TechnologyModal from './TechnologyModal';
import { Network, Grid, Info, Sparkles } from 'lucide-react';

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
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

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
                className={`absolute z-20 px-3 py-1.5 border font-mono text-[10px] tracking-spacious uppercase transition-all duration-300 cursor-pointer ${
                  isFocus
                    ? 'border-white text-white bg-[#1C1C1C] shadow-md shadow-black'
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

          {/* Technology Nodes with subtle floating motion */}
          {technologyNodes.map((node, index) => {
            const isHighlighted =
              !currentCategoryFocus || currentCategoryFocus === node.category;

            return (
              <motion.button
                key={node.id}
                animate={{
                  y: [0, (index % 2 === 0 ? -4 : 4), 0],
                  x: [0, (index % 3 === 0 ? 3 : -3), 0]
                }}
                transition={{
                  duration: 4 + (index % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse'
                }}
                style={{
                  left: `${node.coords.x}%`,
                  top: `${node.coords.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setSelectedNode(node)}
                className={`absolute z-10 px-3.5 py-1.5 border text-xs font-mono transition-all duration-300 cursor-pointer group flex items-center gap-2 ${
                  isHighlighted
                    ? 'border-[#383838] hover:border-white text-text-primary hover:text-white bg-[#141414] hover:bg-[#1E1E1E]'
                    : 'border-[#1C1C1C] text-[#444444] bg-[#0E0E0E] opacity-30 hover:opacity-100 hover:text-text-secondary hover:border-[#333333]'
                }`}
                aria-label={`Inspect ${node.name}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#777777] group-hover:bg-white transition-colors" />
                <span className="tracking-tight">{node.name}</span>
              </motion.button>
            );
          })}

          {/* Interactive Hint */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-[10px] font-mono text-text-muted bg-[#0B0B0B]/80 px-3 py-1.5 border border-[#2A2A2A]">
            <Info className="w-3 h-3 text-[#888888]" />
            <span>Click any technology node to inspect practical implementation</span>
          </div>
        </div>
      ) : (
        /* MATRIX / GROUPED VIEW (Highly readable, excellent for all screen sizes) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories
            .filter((cat) => activeCategory === 'ALL' || activeCategory === cat.id)
            .map((cat) => {
              const nodesInCat = technologyNodes.filter((n) => n.category === cat.id);

              return (
                <div
                  key={cat.id}
                  className="p-6 bg-[#111111] border border-[#2A2A2A] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2A2A2A]">
                      <h3 className="font-heading font-bold text-lg text-text-primary">
                        {cat.label}
                      </h3>
                      <span className="text-[10px] font-mono text-text-muted">
                        {cat.count} NODES
                      </span>
                    </div>

                    <p className="text-xs text-text-secondary font-light mb-6">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {nodesInCat.map((node) => (
                        <button
                          key={node.id}
                          onClick={() => setSelectedNode(node)}
                          className="px-3 py-1.5 text-xs font-mono bg-[#161616] border border-[#2A2A2A] hover:border-white text-text-secondary hover:text-white transition-all text-left flex items-center justify-between gap-2"
                        >
                          <span>{node.name}</span>
                          <span className="text-[9px] text-text-muted">{node.status}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
