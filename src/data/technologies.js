/**
 * Technologies and Live Network data for Romeel Iqbal.
 * Sourced from actual projects, coursework, and technical skills.
 */

export const categories = [
  { id: 'WEB', label: 'WEB', count: 5, description: 'Client-side architecture, component-based interfaces, and modern styling.' },
  { id: 'DEVELOPMENT', label: 'DEVELOPMENT', count: 4, description: 'Core programming languages, algorithms, and object-oriented systems.' },
  { id: 'AI', label: 'AI', count: 4, description: 'Intelligent systems, prompt engineering, NLP, and API integrations.' },
  { id: 'QA', label: 'QA & TESTING', count: 5, description: 'Software quality assurance, performance testing, and accessibility.' },
  { id: 'TOOLS', label: 'TOOLS', count: 5, description: 'Version control, development environments, and cloud deployment pipelines.' },
];

export const technologyNodes = [
  // WEB
  {
    id: 'react',
    name: 'React',
    category: 'WEB',
    status: 'CURRENT FOCUS',
    description: 'Building modular component-based user interfaces, declarative state management, and SPA architectures.',
    related: ['JavaScript', 'Tailwind CSS', 'HTML5', 'Vite'],
    coords: { x: 22, y: 22 }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'WEB',
    status: 'WORKING WITH',
    description: 'Modern ES6+ syntax, asynchronous programming, DOM manipulation, and interactive client logic.',
    related: ['React', 'HTML5', 'CSS3'],
    coords: { x: 33, y: 14 }
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'WEB',
    status: 'USED IN PROJECTS',
    description: 'Utility-first design systems, custom configuration, responsive layouts, and editorial typography.',
    related: ['React', 'CSS3', 'HTML5'],
    coords: { x: 18, y: 36 }
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'WEB',
    status: 'EXPERIENCE',
    description: 'Semantic document structuring, accessible markup (ARIA), and SEO-friendly document outlines.',
    related: ['CSS3', 'JavaScript', 'Accessibility'],
    coords: { x: 12, y: 20 }
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'WEB',
    status: 'EXPERIENCE',
    description: 'Custom layouts via Flexbox and Grid, CSS variables, transitions, and media queries.',
    related: ['HTML5', 'Tailwind CSS'],
    coords: { x: 30, y: 32 }
  },

  // DEVELOPMENT
  {
    id: 'python',
    name: 'Python',
    category: 'DEVELOPMENT',
    status: 'USED IN PROJECTS',
    description: 'Scripting, defensive security lab simulation (file cryptography), data manipulation, and desktop GUIs.',
    related: ['OOP', 'Sentiment Analysis', 'Data Structures'],
    coords: { x: 50, y: 16 }
  },
  {
    id: 'dsa',
    name: 'Data Structures',
    category: 'DEVELOPMENT',
    status: 'WORKING WITH',
    description: 'Foundational computer science algorithms, arrays, trees, graphs, sorting, and algorithmic complexity.',
    related: ['Python', 'OOP'],
    coords: { x: 42, y: 28 }
  },
  {
    id: 'oop',
    name: 'OOP Concepts',
    category: 'DEVELOPMENT',
    status: 'EXPERIENCE',
    description: 'Object-oriented software design, encapsulation, abstraction, inheritance, and clean architecture patterns.',
    related: ['Python', 'Data Structures'],
    coords: { x: 56, y: 30 }
  },
  {
    id: 'databases',
    name: 'Database Systems',
    category: 'DEVELOPMENT',
    status: 'WORKING WITH',
    description: 'Relational data modeling, SQL schema design, normal forms, and CRUD operations.',
    related: ['Python', 'OOP'],
    coords: { x: 62, y: 18 }
  },

  // AI
  {
    id: 'ai-apis',
    name: 'AI APIs',
    category: 'AI',
    status: 'CURRENT FOCUS',
    description: 'Integrating large language model endpoints into functional workflows, structured outputs, and agentic tasks.',
    related: ['Prompt Engineering', 'Python', 'LLM Applications'],
    coords: { x: 74, y: 22 }
  },
  {
    id: 'prompt-eng',
    name: 'Prompt Engineering',
    category: 'AI',
    status: 'USED IN PROJECTS',
    description: 'System prompting, zero-shot and few-shot conditioning, and constrained format extraction (Google certified).',
    related: ['AI APIs', 'LLM Applications'],
    coords: { x: 86, y: 16 }
  },
  {
    id: 'llm-apps',
    name: 'LLM Applications',
    category: 'AI',
    status: 'CURRENT FOCUS',
    description: 'Building interactive tools with conversational UI, feedback loops, and intelligent text analysis.',
    related: ['AI APIs', 'Prompt Engineering', 'Python'],
    coords: { x: 82, y: 34 }
  },
  {
    id: 'sentiment-nlp',
    name: 'Sentiment Analysis',
    category: 'AI',
    status: 'USED IN PROJECTS',
    description: 'Automated extraction of sentiment polarities, review categorization, and keyword distillation.',
    related: ['Python', 'AI APIs', 'LLM Applications'],
    coords: { x: 70, y: 36 }
  },

  // QA & TESTING
  {
    id: 'manual-testing',
    name: 'Manual Testing',
    category: 'QA',
    status: 'EXPERIENCE',
    description: 'Systematic test case design, exploratory testing, bug logging, and user journey validation.',
    related: ['Accessibility', 'Performance', 'Lighthouse'],
    coords: { x: 26, y: 68 }
  },
  {
    id: 'accessibility',
    name: 'Accessibility (a11y)',
    category: 'QA',
    status: 'WORKING WITH',
    description: 'WCAG compliance audits, screen reader friendly markup, high-contrast checks, and keyboard navigation.',
    related: ['Manual Testing', 'Lighthouse', 'HTML5'],
    coords: { x: 16, y: 80 }
  },
  {
    id: 'performance',
    name: 'Performance Audits',
    category: 'QA',
    status: 'WORKING WITH',
    description: 'Benchmarking load times, Core Web Vitals, bundle size reduction, and asset compression.',
    related: ['Lighthouse', 'Playwright'],
    coords: { x: 38, y: 78 }
  },
  {
    id: 'playwright',
    name: 'Playwright',
    category: 'QA',
    status: 'CURRENT FOCUS',
    description: 'End-to-end automated browser test scripting, regression verification, and flow simulation.',
    related: ['Manual Testing', 'Performance Audits'],
    coords: { x: 22, y: 90 }
  },
  {
    id: 'lighthouse',
    name: 'Lighthouse',
    category: 'QA',
    status: 'USED IN PROJECTS',
    description: 'Automated performance, accessibility, SEO, and best-practices auditing.',
    related: ['Performance Audits', 'Accessibility (a11y)'],
    coords: { x: 34, y: 92 }
  },

  // TOOLS
  {
    id: 'git',
    name: 'Git',
    category: 'TOOLS',
    status: 'EXPERIENCE',
    description: 'Version control, atomic commits, branching strategies, rebase workflows, and conflict resolution.',
    related: ['GitHub', 'VS Code'],
    coords: { x: 68, y: 70 }
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'TOOLS',
    status: 'EXPERIENCE',
    description: 'Repository management, pull requests, issue tracking, and collaborative code reviews.',
    related: ['Git', 'Netlify'],
    coords: { x: 80, y: 64 }
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'TOOLS',
    status: 'EXPERIENCE',
    description: 'Primary IDE workflow, debugging, extensions ecosystem, and integrated terminal management.',
    related: ['Git', 'Vite'],
    coords: { x: 74, y: 82 }
  },
  {
    id: 'netlify',
    name: 'Netlify',
    category: 'TOOLS',
    status: 'USED IN PROJECTS',
    description: 'Continuous deployment, DNS routing, custom domains, and edge-served static production builds.',
    related: ['GitHub', 'Vite'],
    coords: { x: 88, y: 80 }
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'TOOLS',
    status: 'CURRENT FOCUS',
    description: 'Modern front-end tooling, hot module replacement, and lightning-fast Rollup-based production builds.',
    related: ['React', 'VS Code', 'Netlify'],
    coords: { x: 64, y: 90 }
  }
];
