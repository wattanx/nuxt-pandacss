import { createResolver, useNuxt, resolvePath } from "nuxt/kit";
import type { ModuleOptions } from "./module";
import { existsSync } from "node:fs";
import { relative } from "node:path";

/**
 *
 * @param cssPath
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
  const { resolve } = createResolver(import.meta.url);
  const defaultCSSPath = `${nuxt.options.dir.assets}/css/global.css`;

  const resolvedCSSPath =
    typeof cssPath === "string"
      ? await resolvePath(cssPath, { extensions: [".css"] })
      : resolve(defaultCSSPath);

  // TODO: if @/assets/css/global does not exist, throw error
  // TODO: used panda css logger
  return existsSync(resolvedCSSPath)
    ? {
        resolvedCSSPath,
        loggerMessage: `🐼 [info] Using Panda CSS file from @/${relative(
          nuxt.options.srcDir,
          resolvedCSSPath
        )}`,
      }
    : {
        resolvedCSSPath,
        loggerMessage: `🐼 [info] Using default Panda CSS file from @/${defaultCSSPath}`,
      };
}
