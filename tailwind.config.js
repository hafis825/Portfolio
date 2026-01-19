/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "#011526",
        primaryBase: "#8b99ae",
        primaryTitle: "#038C65",
        primaryContent: "#e2e8f0",
        primaryAccent: "#025959",
        
        primarybtn: "#59deca",
        primarybgbtn: "#122b39",
        primaryHover: "#162032",
      }
    },
  },
  plugins: [],
}