// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href:
          'https://fonts.googleapis.com' },
        { rel: 'preconnect', href:
          'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href:
          'https://fonts.googleapis.com/css2?family= Lato:wght@100;300;400;700;900&display=swap' }
      ]
    }
  }
})