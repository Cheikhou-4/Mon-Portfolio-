/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6', // Example primary color
        secondary: '#64748b',
        dark: '#0f172a',
        light: '#f8fafc',
      }
    },
  },
  plugins: [],
}
