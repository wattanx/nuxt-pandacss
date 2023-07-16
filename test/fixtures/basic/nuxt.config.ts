import MyModule from "../../../src/module";

export default defineNuxtConfig({
  modules: [MyModule],
  pandacss: {
    theme: {
      tokens: {
        colors: {
          primary: { value: "#0FEE0F" },
          secondary: { value: "#EE0F0F" },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
        },
      },
    },
  },
});
