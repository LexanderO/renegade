/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      platinum: "#E5E5E5",
      black: "#030303",
      blackbean: "#390B10",
      burgundy: "#70131C",
      madder: "#A61B29",
      grey: "#111212",
    },
    fontFamily: {
      yellowtail: ["Yellowtail", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
