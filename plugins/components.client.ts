import YouTube from 'vue3-youtube'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.component('YouTube', YouTube)
})
