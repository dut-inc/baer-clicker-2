/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      text: "#050315",
      background: "#FBFEFF",
      primary: "#002866",
      secondary: "#D8D8D8",
      accent: "#009BA8",
    },
    extend: {
      fontFamily: {
        header: ["Nunito", "sans-serif"],
        body: ["PT+Sans", "serif"],
      },
    },
  },
  plugins: [],
}

