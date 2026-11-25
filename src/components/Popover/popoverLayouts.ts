/** Figma Component Set `1477:51961` · Layout 变体（12） */
import { POPOVER_LAYOUT_CONFIG as CONFIG } from "@/components/feedback/floatingPanelLayout";

export const POPOVER_LAYOUTS = [
  "up-left",
  "up-middle",
  "up-right",
  "下左",
  "下中",
  "下右",
  "left-up",
  "left-middle",
  "left-bottom",
  "right-up",
  "right-middle",
  "right-bottom",
] as const;

export type PopoverLayout = (typeof POPOVER_LAYOUTS)[number];

export type PopoverLayoutConfig = (typeof CONFIG)[PopoverLayout];

export const POPOVER_LAYOUT_CONFIG = CONFIG as Record<PopoverLayout, PopoverLayoutConfig>;

export function popoverLayoutToCssSlug(layout: PopoverLayout): string {
  return layout.replace(/下/g, "down-");
}
