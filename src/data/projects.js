/**
 * Selected projects data for Romeel Iqbal.
 * Sourced directly from verified project documents and technical case studies.
 */

export const projects = [
  {
    id: "01",
    title: "EduPulse",
    tagline: "Student Management System & Dashboard",
    category: "Full-Stack Web / React",
    year: "2025 – 2026",
    summary: "A reactive academic administrative dashboard replacing fragmented spreadsheets with real-time tracking of enrollments, attendance, and grades.",
    problem: "Academic tracking across departments frequently relies on disjointed spreadsheets, resulting in data desynchronization, lost records, and delayed reporting.",
    solution: "Engineered a multi-page administrative single-page app with full CRUD operations, live analytics charts, attendance tracking, and dynamic course capacity bars.",
    technologies: ["React", "Vite", "Recharts", "Tailwind CSS", "LocalStorage"],
    highlights: [
      "Real-time visual metrics dashboard with enrollment charts and KPI cards",
      "Searchable, filterable student registry with modal edit workflows",
      "Dynamic course capacity management with visual percentage indicators",
      "Persistent state management with resilient client-side schema migrations"
    ],
    githubUrl: "https://github.com/romeeliqbal/edupulse",
    liveUrl: null,
    featured: true
  },
  {
    id: "02",
    title: "Ransomware Simulation",
    tagline: "Defensive Security & Cryptographic Analysis",
    category: "Security Engineering / Python",
    year: "2025",
    summary: "Architected a fully controlled lab simulation in Python to systematically analyze file-encryption mechanics, vector propagation, and defensive mitigation.",
    problem: "Developing effective ransomware response strategies requires an empirical understanding of cryptographic execution flows and endpoint vulnerabilities.",
    solution: "Engineered a safe, modular Python simulation that isolates file-encryption routines, validates encryption key generation, and evaluates automated recovery mechanisms.",
    technologies: ["Python", "Cryptography", "Threat Modeling", "Defensive Security"],
    highlights: [
      "Engineered mock cryptographic file-encryption pipeline in a strictly isolated sandbox",
      "Systematically mapped attack patterns and evaluated endpoint response timings",
      "Authored detailed mitigation documentation emphasizing zero-trust defensive policies"
    ],
    githubUrl: "https://github.com/romeeliqbal/ransomware-simulation",
    liveUrl: null,
    featured: true
  },
  {
    id: "03",
    title: "StudyFlow AI",
    tagline: "Sentiment Agent & Feedback Intelligence",
    category: "AI Systems / Python",
    year: "2025",
    summary: "An intelligent feedback evaluation tool that parses unstructured student evaluations into sentiment metrics, keyword topics, and action items.",
    problem: "Reviewing hundreds of free-text student feedback responses manually creates bottlenecks and leads to overlooked negative sentiment trends.",
    solution: "Built an NLP feedback processing agent that extracts sentiment polarity, assigns automated ratings, highlights recurring keywords, and produces structured exports.",
    technologies: ["Python", "AI APIs", "Prompt Engineering", "NLP", "JSON Export"],
    highlights: [
      "Automated sentiment scoring and keyword distillation from raw text",
      "Formatted data export pipelines for administrative review cycles",
      "Integrated prompt templates for extracting constructive recommendations"
    ],
    githubUrl: "https://github.com/romeeliqbal/studyflow-ai",
    liveUrl: null,
    featured: true
  },
  {
    id: "04",
    title: "Madams Boutique",
    tagline: "7-Page E-Commerce Architecture",
    category: "Web Engineering / Frontend",
    year: "2024",
    summary: "A bespoke 7-page e-commerce storefront crafted with pure modern JavaScript and CSS, prioritizing raw page speed and responsive visual hierarchy.",
    problem: "Modern online boutique retail requires rich product showcase interactions without the heavy bundle size and layout shifts of heavyweight plugins.",
    solution: "Delivered a lightweight, highly responsive multi-page storefront featuring a custom product gallery, cart drawer interactions, and zero layout shift.",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3 Grid/Flexbox", "Netlify"],
    highlights: [
      "Zero external runtime dependencies for maximum load performance",
      "Fluid responsive breakpoints tested across mobile, tablet, and ultra-wide viewports",
      "Accessible navigation with custom modal drawers and structured product schemas"
    ],
    githubUrl: "https://github.com/romeeliqbal/madams-boutique",
    liveUrl: "https://romeelportfolio2.netlify.app",
    featured: false
  }
];
