/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif']
    },
    screens: {
      'hp': '375px'
    },
    extend: {},
  },
  plugins: [],
}