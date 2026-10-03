/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0B0C", // Primary background: hero, About, Tech, Education
          alt: "#121211", // Alternating sections: Experience, Projects, Résumé
          accent: "#15110B", // Contact section only (amber-tinted dark)
        },
        surface: {
          DEFAULT: "#181816", // Panels, form container
          hover: "#1F1F1C", // Hover states, elevated cards
        },
        border: {
          DEFAULT: "#2A2A27", // Subtle hairlines
          strong: "#3D3D38", // Inputs, buttons
          accent: "#5C4524", // Subtle accent borders on contact section
        },
        text: {
          DEFAULT: "#F2F0EB", // Primary text: warm off-white (14:1 contrast)
          secondary: "#B8B5AD", // Secondary body text (8:1 contrast)
          muted: "#8A877F", // Metadata, timestamps (5.5:1 contrast)
          onAccent: "#0B0B0C", // High-contrast text on amber buttons
        },
        accent: {
          DEFAULT: "#D99A3D", // Primary warm amber accent
          hover: "#E8B068", // Accent hover
          border: "#5C4524", // Subtle accent borders
          focus: "#F0C27A", // Focus ring color
        },
        status: {
          success: "#5FB88C", // Live status dot and form success only
          error: "#E5786D", // Form validation errors only
        },
      },
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        heading: ['"Space Grotesk"', '"Syne"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', '"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        normal: "0em",
        tight: "-0.02em",
        editorial: "0.08em",
        spacious: "0.14em",
      },
    },
  },
  plugins: [],
};
