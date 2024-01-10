/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':"#2dd4bf -4px 4px",
        '6xl':"#86efac -8px 8px",
      }
    },
  },
  plugins: [],
}

