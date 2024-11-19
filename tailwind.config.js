/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.razor", // Scan all Razor files
    "./wwwroot/index.html", // Scan the main HTML file
    "./**/*.cshtml", // If you have any .cshtml files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
