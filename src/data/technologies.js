/**
 * Technologies and Live Network data for Romeel Iqbal.
 * Sourced from actual projects, coursework, and technical skills.
 */

export const categories = [
  {
    id: "WEB",
    label: "WEB",
    count: 5,
    description:
      "Client-side architecture, component-based interfaces, and modern styling.",
  },
  {
    id: "DEVELOPMENT",
    label: "DEVELOPMENT",
    count: 4,
    description:
      "Core programming languages, algorithms, and object-oriented systems.",
  },
  {
    id: "AI",
    label: "AI",
    count: 4,
    description:
      "Intelligent systems, prompt engineering, NLP, and API integrations.",
  },
  {
    id: "QA",
    label: "QA & TESTING",
    count: 5,
    description:
      "Software quality assurance, performance testing, and accessibility.",
  },
  {
    id: "TOOLS",
    label: "TOOLS",
    count: 5,
    description:
      "Version control, development environments, and cloud deployment pipelines.",
  },
];

export const technologyNodes = [
  // WEB
  {
    id: "react",
    name: "React",
    category: "WEB",
    status: "CURRENT FOCUS",
    description:
      "Building modular component-based user interfaces, declarative state management, and SPA architectures.",
    related: ["JavaScript", "Tailwind CSS", "HTML5", "Vite"],
    coords: { x: 20, y: 28 },
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "WEB",
    status: "WORKING WITH",
    description:
      "Modern ES6+ syntax, asynchronous programming, DOM manipulation, and interactive client logic.",
    related: ["React", "HTML5", "CSS3"],
    coords: { x: 10, y: 24 },
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "WEB",
    status: "USED IN PROJECTS",
    description:
      "Utility-first design systems, custom configuration, responsive layouts, and editorial typography.",
    related: ["React", "CSS3", "HTML5"],
    coords: { x: 30, y: 24 },
  },
  {
    id: "html5",
    name: "HTML5",
    category: "WEB",
    status: "EXPERIENCE",
    description:
      "Semantic document structuring, accessible markup (ARIA), and SEO-friendly document outlines.",
    related: ["CSS3", "JavaScript", "Accessibility"],
    coords: { x: 10, y: 38 },
  },
  {
    id: "css3",
    name: "CSS3",
    category: "WEB",
    status: "EXPERIENCE",
    description:
      "Custom layouts via Flexbox and Grid, CSS variables, transitions, and media queries.",
    related: ["HTML5", "Tailwind CSS"],
    coords: { x: 28, y: 38 },
  },

  // DEVELOPMENT
  {
    id: "python",
    name: "Python",
    category: "DEVELOPMENT",
    status: "USED IN PROJECTS",
    description:
      "Scripting, defensive security lab simulation (file cryptography), data manipulation, and desktop GUIs.",
    related: ["OOP", "Sentiment Analysis", "Data Structures"],
    coords: { x: 42, y: 26 },
  },
  {
    id: "dsa",
    name: "Data Structures",
    category: "DEVELOPMENT",
    status: "WORKING WITH",
    description:
      "Foundational computer science algorithms, arrays, trees, graphs, sorting, and algorithmic complexity.",
    related: ["Python", "OOP"],
    coords: { x: 58, y: 26 },
  },
  {
    id: "oop",
    name: "OOP Concepts",
    category: "DEVELOPMENT",
    status: "EXPERIENCE",
    description:
      "Object-oriented software design, encapsulation, abstraction, inheritance, and clean architecture patterns.",
    related: ["Python", "Data Structures"],
    coords: { x: 44, y: 40 },
  },
  {
    id: "databases",
    name: "Database Systems",
    category: "DEVELOPMENT",
    status: "WORKING WITH",
    description:
      "Relational data modeling, SQL schema design, normal forms, and CRUD operations.",
    related: ["Python", "OOP"],
    coords: { x: 58, y: 40 },
  },

  // AI
  {
    id: "ai-apis",
    name: "AI APIs",
    category: "AI",
    status: "CURRENT FOCUS",
    description:
      "Integrating large language model endpoints into functional workflows, structured outputs, and agentic tasks.",
    related: ["Prompt Engineering", "Python", "LLM Applications"],
    coords: { x: 72, y: 26 },
  },
  {
    id: "prompt-eng",
    name: "Prompt Engineering",
    category: "AI",
    status: "USED IN PROJECTS",
    description:
      "System prompting, zero-shot and few-shot conditioning, and constrained format extraction (Google certified).",
    related: ["AI APIs", "LLM Applications"],
    coords: { x: 88, y: 26 },
  },
  {
    id: "llm-apps",
    name: "LLM Applications",
    category: "AI",
    status: "CURRENT FOCUS",
    description:
      "Building interactive tools with conversational UI, feedback loops, and intelligent text analysis.",
    related: ["AI APIs", "Prompt Engineering", "Python"],
    coords: { x: 72, y: 40 },
  },
  {
    id: "sentiment-nlp",
    name: "Sentiment Analysis",
    category: "AI",
    status: "USED IN PROJECTS",
    description:
      "Automated extraction of sentiment polarities, review categorization, and keyword distillation.",
    related: ["Python", "AI APIs", "LLM Applications"],
    coords: { x: 88, y: 40 },
  },

  // QA & TESTING
  {
    id: "manual-testing",
    name: "Manual Testing",
    category: "QA",
    status: "EXPERIENCE",
    description:
      "Systematic test case design, exploratory testing, bug logging, and user journey validation.",
    related: ["Accessibility", "Performance", "Lighthouse"],
    coords: { x: 14, y: 78 },
  },
  {
    id: "accessibility",
    name: "Accessibility (a11y)",
    category: "QA",
    status: "WORKING WITH",
    description:
      "WCAG compliance audits, screen reader friendly markup, high-contrast checks, and keyboard navigation.",
    related: ["Manual Testing", "Lighthouse", "HTML5"],
    coords: { x: 25, y: 84 },
  },
  {
    id: "performance",
    name: "Performance Audits",
    category: "QA",
    status: "WORKING WITH",
    description:
      "Benchmarking load times, Core Web Vitals, bundle size reduction, and asset compression.",
    related: ["Lighthouse", "Playwright"],
    coords: { x: 36, y: 78 },
  },
  {
    id: "playwright",
    name: "Playwright",
    category: "QA",
    status: "CURRENT FOCUS",
    description:
      "End-to-end automated browser test scripting, regression verification, and flow simulation.",
    related: ["Manual Testing", "Performance Audits"],
    coords: { x: 15, y: 62 },
  },
  {
    id: "lighthouse",
    name: "Lighthouse",
    category: "QA",
    status: "USED IN PROJECTS",
    description:
      "Automated performance, accessibility, SEO, and best-practices auditing.",
    related: ["Performance Audits", "Accessibility (a11y)"],
    coords: { x: 35, y: 62 },
  },

  // TOOLS
  {
    id: "git",
    name: "Git",
    category: "TOOLS",
    status: "EXPERIENCE",
    description:
      "Version control, atomic commits, branching strategies, rebase workflows, and conflict resolution.",
    related: ["GitHub", "VS Code"],
    coords: { x: 64, y: 78 },
  },
  {
    id: "github",
    name: "GitHub",
    category: "TOOLS",
    status: "EXPERIENCE",
    description:
      "Repository management, pull requests, issue tracking, and collaborative code reviews.",
    related: ["Git", "Netlify"],
    coords: { x: 75, y: 84 },
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "TOOLS",
    status: "EXPERIENCE",
    description:
      "Primary IDE workflow, debugging, extensions ecosystem, and integrated terminal management.",
    related: ["Git", "Vite"],
    coords: { x: 86, y: 78 },
  },
  {
    id: "netlify",
    name: "Netlify",
    category: "TOOLS",
    status: "USED IN PROJECTS",
    description:
      "Continuous deployment, DNS routing, custom domains, and edge-served static production builds.",
    related: ["GitHub", "Vite"],
    coords: { x: 65, y: 62 },
  },
  {
    id: "vite",
    name: "Vite",
    category: "TOOLS",
    status: "CURRENT FOCUS",
    description:
      "Modern front-end tooling, hot module replacement, and lightning-fast Rollup-based production builds.",
    related: ["React", "VS Code", "Netlify"],
    coords: { x: 85, y: 62 },
  },
];
