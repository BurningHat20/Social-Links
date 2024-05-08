/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      palanquin: ["Palanquin", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
