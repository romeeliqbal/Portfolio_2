import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function TechnologyModal({ node, onClose, onSelectRelated }) {
  useEffect(() => {
    if (!node) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [node, onClose]);

  const statusColorMap = {
    "CURRENT FOCUS": "border-accent text-accent",
    "USED IN PROJECTS": "border-border-strong text-text",
    "WORKING WITH": "border-border text-text-secondary",
    EXPERIENCE: "border-border text-text-muted",
  };

  return (
    <AnimatePresence>
      {node && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            data-theme="light"
            className="relative w-full max-w-lg border border-border bg-bg p-6 text-text shadow-lift sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tech-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
              <div>
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-editorial text-accent">
                  {node.category}
                </span>
                <h3
                  id="tech-modal-title"
                  className="font-heading text-2xl font-semibold sm:text-3xl"
                >
                  {node.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-border text-text-secondary hover:border-accent hover:text-text"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-6 py-6">
              <div>
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-editorial text-text-muted">
                  Practical context
                </span>
                <span
                  className={`inline-block border px-3 py-1 font-mono text-xs uppercase tracking-editorial ${
                    statusColorMap[node.status] || "border-border"
                  }`}
                >
                  {node.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                {node.description}
              </p>
              {node.related?.length > 0 && (
                <div>
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-editorial text-text-muted">
                    Related
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {node.related.map((relName) => (
                      <button
                        key={relName}
                        onClick={() => onSelectRelated(relName)}
                        className="chip inline-flex min-h-[38px] items-center gap-1.5"
                      >
                        {relName}
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="font-mono text-[10px] text-text-muted">
                Used in coursework and projects
              </span>
              <button
                onClick={onClose}
                className="min-h-[44px] font-mono text-xs uppercase tracking-editorial text-accent hover:text-accent-hover"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
