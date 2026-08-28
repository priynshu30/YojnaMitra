/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#168447",
          greenHover: "#116b39",
          greenDark: "#0c4f2a",
          greenLight: "#EAF6EE",
          greenSubtle: "#F2FAF5",
          navy: "#142338",
          navyLight: "#203450",
          warmBg: "#FAF9F5",
          warmCard: "#FFFFFF",
          border: "#E5E8E5",
          borderLight: "#F0F2F0",
          textMain: "#142338",
          textMuted: "#5A6B7C",
          textLight: "#8C9BAE",
          gold: "#D97706",
          goldLight: "#FEF3C7"
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans Devanagari"', 'system-ui', '-apple-system', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(20, 35, 56, 0.04), 0 1px 3px rgba(20, 35, 56, 0.02)',
        'card': '0 4px 20px -2px rgba(20, 35, 56, 0.06), 0 2px 6px -1px rgba(20, 35, 56, 0.03)',
        'elevated': '0 12px 30px -4px rgba(20, 35, 56, 0.1), 0 4px 12px -2px rgba(20, 35, 56, 0.05)',
        'hero': '0 20px 40px -10px rgba(22, 132, 71, 0.12), 0 8px 20px -4px rgba(20, 35, 56, 0.08)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px'
      }
    },
  },
  plugins: [],
}
