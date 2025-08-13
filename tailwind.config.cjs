// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#9333ea",
        dark: "#0f172a",
        light: "#f8fafc",
      },
    },
  },
  plugins: [],
}