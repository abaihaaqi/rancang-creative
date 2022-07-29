/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'daxline' : ['"Daxline Pro"', 'sans-serif'],
      'poppins' : ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#80E4E2',
        'secondary': '#F1545D',
      },
      screens: {
        'xs': '420px',
      }
    },
  },
  plugins: [],
}
