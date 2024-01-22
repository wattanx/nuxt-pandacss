<script setup lang="ts">
import { styled } from "pandacss/jsx";
</script>

<template>
  <styled.h1 fontSize="5xl" fontWeight="bold">Panda CSS x Nuxt</styled.h1>
  <div :class="css({ fontSize: '5xl', fontWeight: 'bold', color: 'primary' })">
    Hello 🐼!
  </div>
  <PButton :css="{ borderRadius: '16px', px: '8px', cursor: 'pointer' }"
    >Panda</PButton
  >
</template>
