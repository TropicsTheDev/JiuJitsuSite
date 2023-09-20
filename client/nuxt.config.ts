// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["sanitize.css/sanitize.css", "~/assets/scss/globals.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/scss/_color.scss" as *; @use "@/assets/scss/_mixins.scss" as *;',
        },
      },
    },
  },
});
