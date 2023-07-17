<script setup lang="ts">
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
</script>

<template>
  <styled.h1 fontSize="5xl" fontWeight="bold">Panda CSS x Nuxt</styled.h1>
  <div :class="css({ fontSize: '5xl', fontWeight: 'bold', color: 'primary' })">
    Hello 🐼!
  </div>
</template>
