import { version as pkgVersion } from "../package.json";

export default defineAppConfig({
  ui: {
    primary: "green",
    gray: "slate",
    footer: {
      bottom: {
        left: "text-sm text-gray-500 dark:text-gray-400",
        wrapper: "border-t border-gray-200 dark:border-gray-800",
      },
    },
  },
  seo: {
    siteName: "Nuxt PandaCSS",
  },
  header: {
    logo: {
      alt: "",
      light: "",
      dark: "",
    },
    pkgVersion,
    search: false,
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/wattanx/nuxt-pandacss",
        target: "_blank",
        "aria-label": "Docs template on GitHub",
      },
    ],
  },
  footer: {
    credits: "Copyright © 2023",
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-nuxtdotjs",
        to: "https://nuxt.com",
        target: "_blank",
        "aria-label": "Nuxt Website",
      },
    ],
  },
  toc: {
    title: "Table of Contents",
    bottom: {
      title: "Community",
      links: [
        {
          icon: "i-heroicons-star",
          label: "Star on GitHub",
          to: "https://github.com/wattanx/nuxt-pandacss",
          target: "_blank",
        },
      ],
    },
  },
});
