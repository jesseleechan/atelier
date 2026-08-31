/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        atelier: {
          bg: '#F5F2EC',        // Main warm page background
          cardLight: '#ECE8E1', // Left side of Focus Service 01
          dark: '#161616',      // Dark card and hero darks
          charcoal: '#1E1E1E',
          textDark: '#222222',
          textMuted: '#666666',
          textLightMuted: '#A0A0A0',
          border: '#E2DDD4',
          accent: '#8C7A6B',
        }
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.25em',
        super: '.35em',
      }
    },
  },
  plugins: [],
}
