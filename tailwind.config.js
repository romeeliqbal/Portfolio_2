/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0B0B',
          secondary: '#111111',
          surface: '#151515',
        },
        border: {
          DEFAULT: '#2A2A2A',
          subtle: '#1F1F1F',
          light: '#383838',
        },
        text: {
          primary: '#F2F2F2',
          secondary: '#A1A1A1',
          muted: '#666666',
          accent: '#D6D6D6',
        }
      },
      fontFamily: {
        heading: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        editorial: '0.15em',
        spacious: '0.25em',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
