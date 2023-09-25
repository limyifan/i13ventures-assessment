
export default defineNuxtConfig({
  // server side rendering mode
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  scss:["~/assets/sass/variables.scss","~/assets/sass/mixins.scss"],
  components: true,
  vite: {
    plugins: [
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              '@import "@/assets/sass/variables.scss";@import "@/assets/sass/mixins.scss";',
        },
      },
    },
  },
})
