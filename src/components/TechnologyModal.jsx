import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function TechnologyModal({ node, onClose, onSelectRelated }) {
  if (!node) return null;

  const statusColorMap = {
    'CURRENT FOCUS': 'border-[#D6D6D6] text-text-primary bg-[#1C1C1C]',
    'USED IN PROJECTS': 'border-[#444444] text-text-secondary bg-[#151515]',
    'WORKING WITH': 'border-[#333333] text-text-secondary bg-[#121212]',
    'EXPERIENCE': 'border-[#2A2A2A] text-text-muted bg-[#0E0E0E]'
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-[#101010] border border-[#333333] p-6 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tech-modal-title"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#2A2A2A]">
            <div>
              <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1">
                DOMAIN: {node.category}
              </span>
              <h3
                id="tech-modal-title"
                className="font-heading font-bold text-2xl sm:text-3xl text-text-primary"
              >
                {node.name}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-[#2A2A2A] hover:border-white text-text-secondary hover:text-white transition-colors"
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
                  statusColorMap[node.status] || 'border-[#2A2A2A] text-text-secondary'
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
              <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed">
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
                      className="text-xs font-mono px-3 py-1.5 bg-[#151515] border border-[#2A2A2A] text-text-secondary hover:border-white hover:text-white transition-all flex items-center gap-1.5"
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
          <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
            <span className="text-[10px] font-mono text-text-muted">
              Live Network Node &bull; Verified Profile Data
            </span>
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-editorial text-text-primary hover:text-white"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
