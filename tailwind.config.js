/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        swblue:'#005aff',
        lyblue:'#e3f8ff'
      },      fontFamily: {
        ed: ['ed', 'sans-serif'],
        ita: ['ita', 'sans-serif'],
        hel: ['hel', 'sans-serif'],
      },
    },
  },
  plugins: [],
}