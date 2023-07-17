export default defineNuxtConfig({
  modules: ["../src/module"],
  pandacss: {
    theme: {
      tokens: {
        colors: {
          primary: { value: "#0FEE0F" },
          secondary: { value: "#EE0F0F" },
        },
        fontSizes: {
          "2xs": { value: "0.5rem" },
          xs: { value: "0.75rem" },
          sm: { value: "0.875rem" },
          md: { value: "1rem" },
          lg: { value: "1.125rem" },
          xl: { value: "1.25rem" },
          "2xl": { value: "1.5rem" },
          "3xl": { value: "1.875rem" },
          "4xl": { value: "2.25rem" },
          "5xl": { value: "3rem" },
          "6xl": { value: "3.75rem" },
          "7xl": { value: "4.5rem" },
          "8xl": { value: "6rem" },
          "9xl": { value: "8rem" },
        },
      },
    },
    jsxFramework: "vue",
  },
  devtools: { enabled: true },
});
