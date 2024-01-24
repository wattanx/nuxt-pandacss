export default defineNuxtConfig({
  modules: ["../src/module", "@nuxt/devtools"],
  pandacss: {
    theme: { extend: {} },
    globalCss: {
      html: {
        h: "full",
      },
      body: {
        bg: { base: "white", _dark: "#2C2C2C" },
      },
    },
    jsxFramework: "vue",
    cssPath: "@/css/global.css",
    outdir: "pandacss",
  },
  devtools: { enabled: true },
});
