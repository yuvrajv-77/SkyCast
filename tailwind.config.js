/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/theme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
  ],
  theme: {
    extend: {},
    fontFamily:{
      outfit:["Outfit", "sans-serif"]
    }
  },
  darkMode: "class",
  plugins: [nextui()],
  
}

