import type { ModuleOptions } from "./../types";
import type { InlinePreset } from "unimport";
import { defineUnimportPreset } from "unimport";

export const createPresets = ({
  outdir,
}: Pick<ModuleOptions, "outdir">): InlinePreset[] => {
  return [
    defineUnimportPreset({
      from: `${outdir}/css`,
      imports: ["css", "cva", "sva", "cx"],
    }),
    // TODO: styled doesn't work with auto imports
    defineUnimportPreset({
      from: `${outdir}/jsx`,
      imports: ["styled"],
    }),
  ];
};
