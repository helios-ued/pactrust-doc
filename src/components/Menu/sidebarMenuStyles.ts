/** Figma `Sidebar` · `3313:56233` · Style 01–04（Unfold 与 Style 独立） */
export type FigmaSidebarMenuStyle = "01" | "02" | "03" | "04";

/** Showcase · Sidebar Style 下拉 */
export type FigmaSidebarShowcaseVariant = FigmaSidebarMenuStyle;

export const FIGMA_SIDEBAR_STYLE_NODE_IDS: Record<
  FigmaSidebarMenuStyle,
  { unfoldOn: string; unfoldOff: string }
> = {
  "01": { unfoldOn: "3313:56229", unfoldOff: "3313:56228" },
  "02": { unfoldOn: "8739:830", unfoldOff: "8850:3823" },
  "03": { unfoldOn: "8837:507", unfoldOff: "8837:1803" },
  "04": { unfoldOn: "8739:1936", unfoldOff: "8832:3994" },
};

export const FIGMA_SIDEBAR_SHOWCASE_OPTIONS: {
  id: FigmaSidebarShowcaseVariant;
  label: string;
  nodeId: string;
}[] = [
  { id: "01", label: "Style 01", nodeId: FIGMA_SIDEBAR_STYLE_NODE_IDS["01"].unfoldOn },
  { id: "02", label: "Style 02", nodeId: FIGMA_SIDEBAR_STYLE_NODE_IDS["02"].unfoldOn },
  { id: "03", label: "Style 03", nodeId: FIGMA_SIDEBAR_STYLE_NODE_IDS["03"].unfoldOn },
  { id: "04", label: "Style 04", nodeId: FIGMA_SIDEBAR_STYLE_NODE_IDS["04"].unfoldOn },
];

export const FIGMA_SIDEBAR_MENU_STYLES = FIGMA_SIDEBAR_SHOWCASE_OPTIONS;
