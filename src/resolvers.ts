import { addTemplate, createResolver, resolvePath, useNuxt } from "@nuxt/kit";
import { existsSync } from "node:fs";
import { relative } from "node:path";
import type { ModuleOptions } from "./types";

/**
 *
 * @param cssPath - ModuleOptions.cssPath
 * @param nuxt
 * @returns resolvedCSSPath
 * @returns loggerMessage
 * @example
 * ```ts
 * const { resolvedCSSPath, loggerMessage } = await resolveCSSPath('@/assets/css/global.css', nuxt);
 * ```
 */
export async function resolveCSSPath(
  cssPath: ModuleOptions["cssPath"],
  nuxt = useNuxt()
): Promise<{
  resolvedCSSPath: NonNullable<ModuleOptions["cssPath"]>;
  loggerMessage: string;
}> {
  // if cssPath is string, find args.cssPath
  // else find cssPath from '@/assets/css/global.css'
  const resolvedCSSPath =
    typeof cssPath === "string"
      ? await resolvePath(cssPath, { extensions: [".css"] })
      : await resolvePath(`${nuxt.options.dir.assets}/css/global.css`, {
          extensions: [".css"],
        });

  return existsSync(resolvedCSSPath)
    ? {
        resolvedCSSPath,
        loggerMessage: `🐼 [info] Using Panda CSS file from @/${relative(
          nuxt.options.srcDir,
          resolvedCSSPath
        )}`,
      }
    : {
        resolvedCSSPath: createResolver(import.meta.url).resolve(
          addTemplate({
            filename: "panda.css",
            write: true,
            getContents: () =>
              "@layer reset, base, tokens, recipes, utilities;",
          }).dst
        ),
        loggerMessage: "🐼 [info] Using default Panda CSS file.",
      };
}
