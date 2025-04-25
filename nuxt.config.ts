export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001', // Your API base URL
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt', // Automatically sets up Pinia
    '@nuxtjs/tailwindcss', // Tailwind CSS Nuxt module
  ],
  css: ['~/assets/css/main.css'], // Your custom CSS
})
