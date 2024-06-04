/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      text: "#141C11",
      textalt: "#FBFEFF",
      wood: "#733F1A",
      woodsecondary: "#DA9432",
      leaveslight: "#E7E8A6",
      leavesdark: "#5C6B28",
    },
    extend: {
      fontFamily: {
        default: ["MedievalSharp", "sans-serif"],
      },
    },
  },
  plugins: [],
}

