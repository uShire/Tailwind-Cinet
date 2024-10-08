/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "light":"#f4f6f3",
        "dark":"#2b2b2b",
        "primary":"#005E7F",
        "accent":"#ffc139",
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}