/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#252729",
        graphite: "#303337",
        elevated: "#393D41",
        ivory: "#F3F0E8",
        stone: "#E7E3DA",
        bg: {
          DEFAULT: "var(--bg)",
          alt: "var(--bg-alt)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
        },
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
        },
        text: {
          DEFAULT: "var(--text)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          onAccent: "var(--on-accent)",
        },
        accent: {
          DEFAULT: "#D97745",
          hover: "#A84E25",
          tint: "#F0DFD3",
        },
        status: {
          success: "#4F8F6A",
          error: "#C45C4A",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "sans-serif"],
        heading: ['"Space Grotesk"', "Inter", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tight: "-0.03em",
        editorial: "0.04em",
      },
      maxWidth: {
        site: "72rem",
      },
      boxShadow: {
        lift: "0 18px 40px -24px rgba(37, 39, 41, 0.45)",
      },
    },
  },
  plugins: [],
};
