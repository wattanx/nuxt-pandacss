import type { Node } from "estree-walker";
import { walk } from "estree-walker";
import type { ObjectExpression } from "estree";
import { transform } from "esbuild";
import { parse } from "acorn";
import type { Config } from "@pandacss/types";

export const parseConfig = async (code: string): Promise<Config> => {
  const js = await transform(code, { loader: "ts" });

  let config: any;

  walk(
    parse(js.code, {
      sourceType: "module",
      ecmaVersion: "latest",
    }) as Node,
    {
      enter(node) {
        if (node.type === "ExportDefaultDeclaration") {
          const callexpression = node.declaration;

          if (callexpression.type === "CallExpression") {
            const argument = callexpression.arguments[0] as ObjectExpression & {
              start: number;
              end: number;
            };

            if (argument.type === "ObjectExpression") {
              const obj = js.code.slice(argument.start, argument.end);
              config = JSON.parse(obj) as Config;
            }
          }
        }
      },
    }
  );
  return config;
};
