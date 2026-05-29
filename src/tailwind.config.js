/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        foreground: '#c9a84c',
        border: 'rgba(201,168,76, 0.25)',
        card: '#141414',
        primary: '#c9a84c',
        secondary: '#8B0000',
        muted: '#1a1a1a',
        accent: '#8B0000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}
