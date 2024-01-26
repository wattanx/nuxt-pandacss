<script setup lang="ts">
import { square, flex, circle, center } from "pandacss/patterns";
import { Circle } from "pandacss/jsx";
</script>

<template>
  <div
    :class="
      cx(
        flex({
          gap: '4',
          direction: 'column',
        }),
        center({ h: 'full' })
      )
    "
  >
    <div :class="flex({ gap: '6', padding: '1' })">
      <div :class="square({ size: '11', bg: 'yellow.300' })">1</div>
      <div :class="square({ size: '11', bg: 'red.300' })">2</div>
      <div :class="square({ size: '11', bg: 'green.300' })">3</div>
    </div>

    <div
      :class="
        flex({
          direction: 'row',
          align: 'center',
          gap: '4',
        })
      "
    >
      <div :class="circle({ size: '12', bg: 'blue.300' })">1</div>
      <div :class="circle({ size: '12', bg: 'orange.300' })">2</div>
      <Circle size="12" bg="violet.300">3</Circle>
    </div>
  </div>
</template>
