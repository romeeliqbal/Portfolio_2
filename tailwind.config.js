/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0B0B0B",
          secondary: "#111111",
          surface: "#151515",
          surfaceHover: "#1C1C1E",
        },
        border: {
          DEFAULT: "#2C2D31",
          subtle: "#1F2124",
          light: "#3E4249",
        },
        text: {
          primary: "#F8F9FA",
          secondary: "#C2C6CC",
          muted: "#808793",
          accent: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ['"Syne"', '"Space Grotesk"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', '"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        editorial: "0.15em",
        spacious: "0.25em",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
