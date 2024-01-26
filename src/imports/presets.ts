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
    // TODO: jsx doesn't work with auto imports
    // defineUnimportPreset({
    //   from: `${outdir}/jsx`,
    //   imports: [
    //     "styled",
    //     "AspectRatio",
    //     "Bleed",
    //     "Box",
    //     "Center",
    //     "Circle",
    //     "Container",
    //     "Divider",
    //     "Flex",
    //     "Float",
    //     "GridItem",
    //     "Grid",
    //     "HStack",
    //     "LinkBox",
    //     "LinkOverlay",
    //     "Spacer",
    //     "Square",
    //     "Stack",
    //     "VisuallyHidden",
    //     "VStack",
    //     "Wrap",
    //   ],
    // }),
    // TODO: pattenrs doesn't work with auto imports
    // defineUnimportPreset({
    //   from: `${outdir}/patterns`,
    //   imports: [
    //     "aspectRatio",
    //     "bleed",
    //     "box",
    //     "center",
    //     "circle",
    //     "container",
    //     "divider",
    //     "flex",
    //     "float",
    //     "gridItem",
    //     "grid",
    //     "hStack",
    //     "linkBox",
    //     "linkOverlay",
    //     "spacer",
    //     "square",
    //     "stack",
    //     "visuallyHidden",
    //     "vStack",
    //     "wrap",
    //   ],
    // }),
  ];
};
