/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown-light": "#fff1e8",
        "brown-dark": "#71461c",
        "brown-secondary": "#b79d8c",
        "brown-primary": "#a17359",
        "green-pastel": "#817a5e",
      },
    },
  },
  plugins: [],
};
