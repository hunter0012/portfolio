// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
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
  app: {
    baseURL: '/portfolio/' // if your repo name is `portfolio`
  }
})