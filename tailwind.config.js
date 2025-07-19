/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
      colors: {
        fuchsia: {
          400: '#e879f9',
          500: '#d946ef',
        },
        sky: {
          400: '#38bdf8',
        },
      }
    },
  },
  plugins: [],
}
