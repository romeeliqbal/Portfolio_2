import React from "react";

export default function Summary() {
  const metadata = [
    {
      label: "EDUCATION",
      value: "B.E. Software Engineering",
      sub: "Mehran University (MUET)",
    },
    {
      label: "FOCUS",
      value: "Full-Stack Web & AI Systems",
      sub: "Defensive Architecture & QA",
    },
    {
      label: "CURRENTLY",
      value: "Building & Experimenting",
      sub: "Modern React & Intelligent Agents",
    },
    {
      label: "LOCATION",
      value: "Hyderabad, Pakistan",
      sub: "Open to Remote & Relocation",
    },
  ];

  return (
    <section
      id="summary"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Large Editorial Headline */}
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
              00 &bull; STATEMENT
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.0] text-text-primary uppercase break-words">
              I build
              <br />
              digital
              <br />
              <span className="text-text-muted">experiences.</span>
            </h2>
            <div className="w-12 h-[1px] bg-border mt-6 mb-4" />
            <p className="text-xs font-mono tracking-editorial text-text-muted uppercase">
              Full-Stack &bull; Defensive Architecture &bull; QA
            </p>
          </div>
        </div>

        {/* Narrative and Metadata */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed font-normal mb-10">
            <p className="text-text-primary font-medium">
              I am an undergraduate software engineer grounded in core computer
              science principles, modern full-stack web engineering, and applied
              intelligent systems. I believe software is best evaluated by how
              reliably it solves real user pain points.
            </p>
            <p>
              My work spans interactive React applications, clean automated
              testing and QA methodologies, and security-conscious
              systems—ranging from responsive administrative platforms to
              defensive cryptographic simulations. I emphasize structured
              problem-solving, clean codebases, and disciplined execution.
            </p>
          </div>

          {/* Editorial Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border">
            {metadata.map((item) => (
              <div
                key={item.label}
                className="p-4 bg-[#101216] border border-border hover:border-border-light transition-colors flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase mb-1.5">
                  {item.label}
                </span>
                <span className="font-heading text-sm sm:text-base font-semibold text-text-primary">
                  {item.value}
                </span>
                <span className="text-xs text-text-secondary font-mono mt-1">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
