/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        krub: ["Krub", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors:{
        'primary':"#091242"
      },
      flexGrow: {
        2: '2'
      },
      height: {
        '15': '3.75rem',
        '17': '4.25rem',
        '27': '5.75rem',
      },
      inset: {
        '15': '3.75rem',
        '17': '4.25rem',
        '27': '5.75rem',
      },
      padding: {
        '15': '3.75rem',
        '17': '4.25rem',
        '27': '5.75rem',
      },
      margin: {
        '15': '3.75rem',
        '17': '4.25rem',
        '27': '5.75rem',
      },
    },
  },
  plugins: [],
};
