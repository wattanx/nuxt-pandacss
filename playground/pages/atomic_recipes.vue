<script setup lang="ts">
import { center } from "pandacss/patterns";

const button = cva({
  base: {
    borderRadius: "md",
    fontWeight: "semibold",
    h: "10",
    px: "4",
  },
  variants: {
    visual: {
      solid: {
        bg: { base: "colorPalette.500", _dark: "colorPalette.300" },
        color: { base: "white", _dark: "gray.800" },
      },
      outline: {
        border: "1px solid",
        color: { base: "colorPalette.600", _dark: "colorPalette.200" },
        borderColor: "currentColor",
      },
    },
  },
});
</script>

<template>
  <div :class="center({ colorPalette: 'yellow', h: 'full', gap: '4' })">
    <button :class="button({ visual: 'solid' })">Button</button>
    <button :class="button({ visual: 'outline' })">Button</button>
  </div>
</template>
