export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false},
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/css/main.css'],
})
