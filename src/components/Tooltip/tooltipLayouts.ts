/** Figma Component Set `69:18869` · Arrow 变体（12） */
import { TOOLTIP_LAYOUT_CONFIG as CONFIG } from "@/components/feedback/floatingPanelLayout";

export const TOOLTIP_LAYOUTS = [
  "Top",
  "Top Start",
  "Top End",
  "Bottom",
  "Bottom Start",
  "Bottom End",
  "Left",
  "Left Start",
  "Left End",
  "Right",
  "Right Start",
  "Right End",
] as const;

export type TooltipLayout = (typeof TOOLTIP_LAYOUTS)[number];

export type TooltipLayoutConfig = (typeof CONFIG)[TooltipLayout];

export const TOOLTIP_LAYOUT_CONFIG = CONFIG as Record<TooltipLayout, TooltipLayoutConfig>;

export function tooltipLayoutToCssSlug(layout: TooltipLayout): string {
  return layout
    .replace(/\s+/g, "-")
    .replace(/^Top/, "top")
    .replace(/^Bottom/, "bottom")
    .replace(/^Left/, "left")
    .replace(/^Right/, "right")
    .replace(/Start$/, "start")
    .replace(/End$/, "end")
    .toLowerCase();
}
