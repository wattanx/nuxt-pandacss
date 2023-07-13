# Nuxt Panda CSS

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Panda CSS module for Nuxt.

> **Warning**
> This library is in active development. Use at your own risk.

## Features

<!-- Highlight some of the features your module provide here -->

- Zero configuration to start

## Quick Setup

1. Add `@wattanx/nuxt-pandacss` dependency to your project

```bash
# Using pnpm
pnpm add -D @wattanx/nuxt-pandacss

# Using yarn
yarn add --dev @wattanx/nuxt-pandacss

# Using npm
npm install --save-dev @wattanx/nuxt-pandacss
```

2. Add `@wattanx/nuxt-pandacss` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@wattanx/nuxt-pandacss"],
});
```

That's it! You can now use `@wattanx/nuxt-pandacss` in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@wattanx/nuxt-pandacss/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@wattanx/nuxt-pandacss
[npm-downloads-src]: https://img.shields.io/npm/dm/@wattanx/nuxt-pandacss.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@wattanx/nuxt-pandacss
[license-src]: https://img.shields.io/npm/l/@wattanx/nuxt-pandacss.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@wattanx/nuxt-pandacss
