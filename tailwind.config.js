/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald"],
        IBM: ["IBM Plex Mono"],
      },
    },
  },
  plugins: [],
};
