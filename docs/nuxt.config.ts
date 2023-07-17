export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  imports: {
    autoImport: true,
  },
  components: [
    {
      path: "~/components",
      global: true,
    },
  ],
});
