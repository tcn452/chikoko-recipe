/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold" : "#FFD700",
        "apple-green" : "#008000",
        "dire-wolf": "#292727",
    },
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"],
      "roboto": ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}}

