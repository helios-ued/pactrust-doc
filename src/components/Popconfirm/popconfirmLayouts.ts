/** Figma Component Set `1477:51596` · Layout 变体（12） */
import { POPCONFIRM_LAYOUT_CONFIG as CONFIG } from "@/components/feedback/floatingPanelLayout";

export const POPCONFIRM_LAYOUTS = [
  "Up-left",
  "Up-center",
  "Up-right",
  "下左",
  "下中",
  "下右",
  "Left-up",
  "Left-center",
  "Left-down",
  "Right-up",
  "Right-center",
  "Right-down",
] as const;

export type PopconfirmLayout = (typeof POPCONFIRM_LAYOUTS)[number];

export type PopconfirmLayoutConfig = (typeof CONFIG)[PopconfirmLayout];

export const POPCONFIRM_LAYOUT_CONFIG = CONFIG as Record<PopconfirmLayout, PopconfirmLayoutConfig>;

export function layoutToCssSlug(layout: PopconfirmLayout): string {
  return layout
    .replace(/下左/g, "down-left")
    .replace(/下中/g, "down-center")
    .replace(/下右/g, "down-right")
    .toLowerCase();
}
