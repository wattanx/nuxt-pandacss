<script setup lang="ts">
import { css, cva } from "pandacss/css";
import type { SystemStyleObject } from "pandacss/types";

const props = withDefaults(
  defineProps<{
    css?: SystemStyleObject;
  }>(),
  {
    css: () => ({}),
  }
);

const buttonRecipe = cva({
  base: { display: "flex", fontSize: "lg" },
  variants: {
    variant: {
      primary: { color: "white", backgroundColor: "blue.500" },
    },
  },
});

const className = css(
  // using the button recipe
  buttonRecipe.raw({ variant: "primary" }),

  // adding style overrides (internal)
  { _hover: { color: "blue.400" } },

  // adding style overrides (external)
  props.css
);
</script>

<template>
  <button :class="className"><slot /></button>
</template>
