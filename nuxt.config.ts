// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: ['@/assets/css/tailwind.css', '~/assets/css/main.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  ssr: true,
  target: 'static', // not needed anymore but doesn't hurt
  nitro: {
    preset: 'static'
  },
  vite: {
    plugins: [
      require('@tailwindcss/vite')
    ],
    base: '/' // makes paths relative
  },
  image: {
    dir: 'public/images', // explicitly set image directory
    domains: [],
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 80
        }
      }
    }
  },
  app: {
    baseURL: '/',// or empty string if serving from root
    buildAssetsDir: '_nuxt/', // ensure this matches your setup
    head: {
      title: 'Bouzeed',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' }
      ]
    }
  }
})