/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      text: "#141C11",
      textalt: "#EAF1F3",
      wood: "#733F1A",
      woodsecondary: "#DA9432",
      leaveslight: "#E7E8A6",
      leavesdark: "#5C6B28",
    },
    extend: {
      fontFamily: {
        default: ["MedievalSharp", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      },
      animation: {
        wiggle: "wiggle 100ms ease-in-out"
      }
    },
  },
  plugins: [],
}

