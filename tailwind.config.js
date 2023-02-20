/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "680px",
      md: "812px",
      lg: "1050px",
      xl: "1200px",
      "2xl": "1536px",
    },
    fontFamily: {
      nato: ["Noto Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
