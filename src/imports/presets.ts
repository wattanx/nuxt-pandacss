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
    defineUnimportPreset({
      from: `${outdir}/jsx`,
      imports: [
        "styled", // TODO: styled doesn't work with auto imports
        "AspectRatio",
        "Bleed",
        "Box",
        "Center",
        "Circle",
        "Container",
        "Divider",
        "Flex",
        "Float",
        "GridItem",
        "Grid",
        "HStack",
        "LinkBox",
        "LinkOverlay",
        "Spacer",
        "Square",
        "Stack",
        "VisuallyHidden",
        "VStack",
        "Wrap",
      ],
    }),
  ];
};
