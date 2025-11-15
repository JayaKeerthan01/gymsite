/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Red
        dark: '#0F0F0F',    // Deep black
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}