<template>
  <div :class="center({ h: 'full' })">
    <div
      :class="
        css({
          display: 'flex',
          flexDirection: 'column',
          fontWeight: 'semibold',
          color: 'yellow.300',
          textAlign: 'center',
          textStyle: '4xl',
        })
      "
    >
      <span>🐼</span>
      <span>Hello from Panda</span>
    </div>
  </div>
</template>
