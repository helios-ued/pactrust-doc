/** Figma `Sidebar` · `3313:56233` · 变体 Style × State */
export type FigmaSidebarMenuStyle = "01" | "02" | "03" | "04";

export type FigmaSidebarState = "Expanded" | "Collapsed";

export type FigmaSidebarShowcaseVariant = FigmaSidebarMenuStyle;

/** Figma 组件集 · Style=0n, State=Expanded|Collapsed */
export const FIGMA_SIDEBAR_STYLE_VALUES: FigmaSidebarMenuStyle[] = ["01", "02", "03", "04"];

export const FIGMA_SIDEBAR_STATE_VALUES: FigmaSidebarState[] = ["Expanded", "Collapsed"];

export const FIGMA_SIDEBAR_STYLE_NODE_IDS: Record<
  FigmaSidebarMenuStyle,
  { Expanded: string; Collapsed: string }
> = {
  "01": { Expanded: "3313:56229", Collapsed: "3313:56228" },
  "02": { Expanded: "8739:830", Collapsed: "8832:3813" },
  "03": { Expanded: "8837:507", Collapsed: "8850:3823" },
  "04": { Expanded: "8739:1936", Collapsed: "8832:3994" },
};

export function figmaSidebarStateToUnfolded(state: FigmaSidebarState): boolean {
  return state === "Expanded";
}

export function figmaSidebarNodeId(style: FigmaSidebarMenuStyle, state: FigmaSidebarState): string {
  return FIGMA_SIDEBAR_STYLE_NODE_IDS[style][state];
}

export const FIGMA_SIDEBAR_SHOWCASE_OPTIONS: {
  id: FigmaSidebarShowcaseVariant;
  label: string;
  nodeId: string;
}[] = FIGMA_SIDEBAR_STYLE_VALUES.map((id) => ({
  id,
  label: id,
  nodeId: FIGMA_SIDEBAR_STYLE_NODE_IDS[id].Expanded,
}));

export const FIGMA_SIDEBAR_MENU_STYLES = FIGMA_SIDEBAR_SHOWCASE_OPTIONS;