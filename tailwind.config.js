/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald"],
        IBM: ["IBM Plex Mono"],
      },
      colors: {
        proTechOrange: "#DE9E36",
      },
    },
  },
  plugins: [],
};
