<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

defineProps<{
  link: NuxtLinkProps;
}>();
</script>
<template>
  <NuxtLink v-bind="link">
    <button class="primary-button">
      <span v-if="!$slots?.default">Hello Amsterdam 👋</span>
      <span v-else>
        <ContentSlot :use="$slots.default" unwrap="p" />
      </span>
    </button>
  </NuxtLink>
</template>
<style lang="ts">
css({
  '.primary-button': {
    backgroundColor: '{color.yellow.300}',
    color: '#000',
    width: '100%',
    fontSize: '1.5rem',
    border: '3px solid #000',
    borderRadius: '13px',
    paddingInline: '1.5rem',
    paddingBlock: '0.75rem',
    '@md': {
      width: '240px'
    }
  }
})
</style>
