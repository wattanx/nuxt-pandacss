import { parseConfig } from "./utils/config-parser";
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

  it("generate default panda.config", async () => {
    const nuxt = useTestContext().nuxt!;

    const pandaConfig = nuxt.vfs["#build/panda.config"];

    const config = await parseConfig(pandaConfig);

    expect(config.preflight).toBe(true);
    expect(config.include).toEqual([
      `${nuxt.options.srcDir}/components/**/*.{js,jsx,ts,tsx,vue}`,
      `${nuxt.options.srcDir}/pages/**/*.{js,jsx,ts,tsx,vue}`,
    ]);
    expect(config.exclude).toEqual([]);
    expect(config.outdir).toBe("styled-system");
    expect(config.cwd).toBe(nuxt.options.buildDir);
    expect(config.theme).toEqual({
      tokens: {
        colors: {
          primary: { value: "#0FEE0F" },
          secondary: { value: "#EE0F0F" },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
        },
      },
    });
  });
});
