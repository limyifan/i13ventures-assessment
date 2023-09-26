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
    screens:{
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl':'2000px'
    },
    extend: {
      fontFamily: {
        plus: ["Plus Jakarta Sans", "sans-serif"],
        saira: ["Saira", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
      },
      colors:{
        'primary':"#2AAA94"
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
      flex:{
        3: '3'
      }
    },
  },
  plugins: [],
};
