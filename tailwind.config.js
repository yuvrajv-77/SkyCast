/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
  ],
  theme: {
    extend: {
     
    },
    fontFamily:{
      outfit:["Outfit", "sans-serif"]
    },
    screens:{
      'desk':'1600px',
    },
  },
  darkMode: "class",
  plugins: [],
  
}

