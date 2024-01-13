export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxthq/studio",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "nuxt-og-image",
  ],
  ui: {
    icons: ["heroicons", "simple-icons"],
  },
  devtools: { enabled: true },
  typescript: {
    strict: false,
  },
});
