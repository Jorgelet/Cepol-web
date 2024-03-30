// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  vite: {
    css:{
      preprocessorOptions:{
        scss: {
          additionalData: `
            @import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
            @import '@fortawesome/fontawesome-free/scss/solid.scss';
            @import '@fortawesome/fontawesome-free/scss/regular.scss';
            @import '@fortawesome/fontawesome-free/scss/brands.scss';
            @import '@/styles/main.scss';
            @import '@nabux-crush/crush-styles/nabuxLayoutVariables';
          `
        }
      }
    }
  }
})