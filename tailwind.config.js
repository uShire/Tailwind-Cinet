/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "light":"#ffffff",
        "dark":"#2b2b2b",
        "primary":"#005E7F",
        "accent":"#ffc139",
      },
      backgroundImage:{
        "banner-desk":"url('/dist/img/cinet-banner-desktop.svg')",
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}