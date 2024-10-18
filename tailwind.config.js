/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}