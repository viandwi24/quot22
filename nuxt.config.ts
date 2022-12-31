// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'BEST QUOTES OF TI 2022',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'a collection of the best quotes from the 2022 TI. Happy New Year 2023!!!' },
        { hid: 'og:title', property: 'og:title', content: 'BEST QUOTES OF TI 2022' },
        { hid: 'og:description', property: 'og:description', content: 'a collection of the best quotes from the 2022 TI. Happy New Year 2023!!!' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://quot22.viandwi24.site/' },
      ],
    }
  },

  css: [
    '~/assets/scss/main.scss'
  ],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  plugins: [
    '~/plugins/components.client.ts'
  ],

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  }
})
