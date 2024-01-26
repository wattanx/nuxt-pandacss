<script setup lang="ts">
import { center } from "pandacss/patterns";

const card = sva({
  slots: ["root", "title", "content"],
  base: {
    root: {
      p: "6",
      m: "4",
      w: "md",
      boxShadow: "md",
      borderRadius: "md",
      _dark: { bg: "#262626", color: "white" },
    },
    content: {
      textStyle: "lg",
    },
    title: {
      textStyle: "xl",
      fontWeight: "semibold",
      pb: "2",
    },
  },
});

const styles = card();
</script>

<template>
  <div :class="center({ h: 'full' })">
    <div :class="styles.root">
      <div :class="styles.title">Team Members</div>
      <div :class="styles.content">Content</div>
    </div>
  </div>
</template>
