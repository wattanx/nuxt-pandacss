import { defineBuildConfig } from "unbuild";
export default defineBuildConfig({
  failOnWarn: false,
  externals: [
    "kleur",
    "lil-fp",
    "is-what",
    "esbuild",
    "pnpapi",
    "merge-anything",
    "bundle-n-require",
    "@pandacss/config",
    "escalade/sync",
    "@pandacss/error",
    "@pandacss/logger",
    "@pandacss/preset-base",
    "@pandacss/preset-panda",
  ],
});
