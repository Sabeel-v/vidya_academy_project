/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{html,js,ts,jsx,tsx}",   // catches your section file too
  ],
  theme: { extend: {} },
  plugins: [],
  // Optional: if you generate classes dynamically
  // safelist: ["left-[300px]", "translate-x-[15%]"],
}
