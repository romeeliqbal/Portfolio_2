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
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2A2A2A]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Large Editorial Headline */}
        <div className="lg:col-span-6">
          <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-4">
            00 &bull; STATEMENT
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-text-primary uppercase">
            I build
            <br />
            digital
            <br />
            experiences.
          </h2>
        </div>

        {/* Narrative and Metadata */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed font-light mb-12">
            <p>
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
          <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-[#2A2A2A]">
            {metadata.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-[10px] font-mono tracking-spacious text-text-muted uppercase mb-1">
                  {item.label}
                </span>
                <span className="font-heading text-sm sm:text-base font-medium text-text-primary">
                  {item.value}
                </span>
                <span className="text-xs text-text-secondary font-mono mt-0.5">
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
