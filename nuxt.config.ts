// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
