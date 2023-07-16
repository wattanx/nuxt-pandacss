import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { setup, useTestContext } from "@nuxt/test-utils";

describe("basic test", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
    server: true,
    nuxtConfig: {
      buildDir: ".nuxt",
    },
  });

  it("generate default panda.config", () => {
    const nuxt = useTestContext().nuxt!;

    expect(nuxt.vfs["#build/panda.config"]).toMatchInlineSnapshot(`
      "
      import { defineConfig } from \\"@pandacss/dev\\"
       
      export default defineConfig({
        theme: {
        \\"tokens\\": {
          \\"colors\\": {
            \\"primary\\": {
              \\"value\\": \\"#0FEE0F\\"
            },
            \\"secondary\\": {
              \\"value\\": \\"#EE0F0F\\"
            }
          },
          \\"fonts\\": {
            \\"body\\": {
              \\"value\\": \\"system-ui, sans-serif\\"
            }
          }
        }
      },
        // Whether to use css reset
        preflight: true,
       
        // Where to look for your css declarations
        include: [\\"/Users/wattanx/repo/nuxt-pandacss/test/fixtures/basic/components/**/*.{js,jsx,ts,tsx,vue}\\",
        \\"/Users/wattanx/repo/nuxt-pandacss/test/fixtures/basic/pages/**/*.{js,jsx,ts,tsx,vue}\\"],
       
        // Files to exclude
        exclude: [],
       
        // The output directory for your css system
        outdir: \\"styled-system\\",
        cwd: \\"/Users/wattanx/repo/nuxt-pandacss/test/fixtures/basic/.nuxt\\",
      })"
    `);
  });
});
