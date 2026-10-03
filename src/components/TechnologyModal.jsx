import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function TechnologyModal({ node, onClose, onSelectRelated }) {
  if (!node) return null;

  const statusColorMap = {
    "CURRENT FOCUS": "border-accent text-accent bg-surface-hover",
    "USED IN PROJECTS": "border-border-strong text-text bg-surface-hover",
    "WORKING WITH": "border-border text-text-secondary bg-surface-hover",
    EXPERIENCE: "border-border text-text-muted bg-surface-hover",
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-surface border border-border-strong p-6 sm:p-8 shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tech-modal-title"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-border">
            <div>
              <span className="text-[10px] font-mono tracking-spacious text-accent uppercase block mb-1">
                DOMAIN: {node.category}
              </span>
              <h3
                id="tech-modal-title"
                className="font-heading font-bold text-2xl sm:text-3xl text-text"
              >
                {node.name}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center border border-border hover:border-accent text-text-secondary hover:text-text transition-colors bg-surface-hover"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="py-6 space-y-6">
            {/* Status */}
            <div>
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2">
                PRACTICAL CONTEXT
              </span>
              <span
                className={`inline-block text-xs font-mono px-3 py-1 border uppercase tracking-editorial ${
                  statusColorMap[node.status] ||
                  "border-border text-text-secondary"
                }`}
              >
                {node.status}
              </span>
            </div>

            {/* Description */}
            <div>
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2">
                APPLICATION IN WORKFLOW
              </span>
              <p className="text-sm sm:text-base text-text-secondary font-normal leading-relaxed">
                {node.description}
              </p>
            </div>

            {/* Related Tools */}
            {node.related && node.related.length > 0 && (
              <div>
                <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2">
                  RELATED TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {node.related.map((relName) => (
                    <button
                      key={relName}
                      onClick={() => onSelectRelated(relName)}
                      className="text-xs font-mono px-3 py-1.5 min-h-[38px] bg-surface-hover border border-border text-text-secondary hover:border-accent hover:text-text transition-all flex items-center gap-1.5"
                    >
                      <span>{relName}</span>
                      <ArrowRight className="w-3 h-3 text-text-muted" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <span className="text-[10px] font-mono text-text-muted">
              Live Network Node &bull; Verified Technical Skill
            </span>
            <button
              onClick={onClose}
              className="min-h-[44px] inline-flex items-center text-xs font-mono uppercase tracking-editorial text-accent hover:text-accent-hover transition-colors"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
