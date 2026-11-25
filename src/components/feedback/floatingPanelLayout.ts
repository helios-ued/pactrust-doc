import type { FeedbackArrowDir } from "./FeedbackArrowGraphic";

export type FloatingPanelLayoutConfig = {
  placement: string;
  axis: "vertical" | "horizontal";
  panelBeforeArrow: boolean;
  arrowDir: FeedbackArrowDir;
  arrowAlign: "start" | "center" | "end";
  rootCrossAlign: "start" | "center" | "end";
};

/** Popconfirm `1477:51596` · Up-center / Left-center 等 */
export const POPCONFIRM_LAYOUT_CONFIG: Record<string, FloatingPanelLayoutConfig> = {
  "Up-left": {
    placement: "top-start",
    axis: "vertical",
    panelBeforeArrow: true,
    arrowDir: "down",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "Up-center": {
    placement: "top",
    axis: "vertical",
    panelBeforeArrow: true,
    arrowDir: "down",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "Up-right": {
    placement: "top-end",
    axis: "vertical",
    panelBeforeArrow: true,
    arrowDir: "down",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
  "下左": {
    placement: "bottom-start",
    axis: "vertical",
    panelBeforeArrow: false,
    arrowDir: "up",
    arrowAlign: "start",
    rootCrossAlign: "center",
  },
  "下中": {
    placement: "bottom",
    axis: "vertical",
    panelBeforeArrow: false,
    arrowDir: "up",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "下右": {
    placement: "bottom-end",
    axis: "vertical",
    panelBeforeArrow: false,
    arrowDir: "up",
    arrowAlign: "end",
    rootCrossAlign: "center",
  },
  "Left-up": {
    placement: "left-start",
    axis: "horizontal",
    panelBeforeArrow: true,
    arrowDir: "right",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "Left-center": {
    placement: "left",
    axis: "horizontal",
    panelBeforeArrow: true,
    arrowDir: "right",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "Left-down": {
    placement: "left-end",
    axis: "horizontal",
    panelBeforeArrow: true,
    arrowDir: "right",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
  "Right-up": {
    placement: "right-start",
    axis: "horizontal",
    panelBeforeArrow: false,
    arrowDir: "left",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "Right-center": {
    placement: "right",
    axis: "horizontal",
    panelBeforeArrow: false,
    arrowDir: "left",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "Right-down": {
    placement: "right-end",
    axis: "horizontal",
    panelBeforeArrow: false,
    arrowDir: "left",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
};

/** Popover `1477:51961` · up-middle / left-middle 等 */
export const POPOVER_LAYOUT_CONFIG: Record<string, FloatingPanelLayoutConfig> = {
  "up-left": {
    placement: "top-start",
    axis: "vertical",
    panelBeforeArrow: true,
    arrowDir: "down",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "up-middle": {
    placement: "top",
    axis: "vertical",
    panelBeforeArrow: true,
    arrowDir: "down",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "up-right": {
    placement: "top-end",
    axis: "vertical",
    panelBeforeArrow: true,
    arrowDir: "down",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
  "下左": {
    placement: "bottom-start",
    axis: "vertical",
    panelBeforeArrow: false,
    arrowDir: "up",
    arrowAlign: "start",
    rootCrossAlign: "center",
  },
  "下中": {
    placement: "bottom",
    axis: "vertical",
    panelBeforeArrow: false,
    arrowDir: "up",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "下右": {
    placement: "bottom-end",
    axis: "vertical",
    panelBeforeArrow: false,
    arrowDir: "up",
    arrowAlign: "end",
    rootCrossAlign: "center",
  },
  "left-up": {
    placement: "left-start",
    axis: "horizontal",
    panelBeforeArrow: true,
    arrowDir: "right",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "left-middle": {
    placement: "left",
    axis: "horizontal",
    panelBeforeArrow: true,
    arrowDir: "right",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "left-bottom": {
    placement: "left-end",
    axis: "horizontal",
    panelBeforeArrow: true,
    arrowDir: "right",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
  "right-up": {
    placement: "right-start",
    axis: "horizontal",
    panelBeforeArrow: false,
    arrowDir: "left",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "right-middle": {
    placement: "right",
    axis: "horizontal",
    panelBeforeArrow: false,
    arrowDir: "left",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "right-bottom": {
    placement: "right-end",
    axis: "horizontal",
    panelBeforeArrow: false,
    arrowDir: "left",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
};

/** Tooltip `69:18869` · Arrow 变体（12）× Effect */
export const TOOLTIP_LAYOUT_CONFIG: Record<string, FloatingPanelLayoutConfig> = {
  Top: {
    placement: "top",
    axis: "vertical",
    panelBeforeArrow: true,
    arrowDir: "down",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "Top Start": {
    placement: "top-start",
    axis: "vertical",
    panelBeforeArrow: true,
    arrowDir: "down",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "Top End": {
    placement: "top-end",
    axis: "vertical",
    panelBeforeArrow: true,
    arrowDir: "down",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
  Bottom: {
    placement: "bottom",
    axis: "vertical",
    panelBeforeArrow: false,
    arrowDir: "up",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "Bottom Start": {
    placement: "bottom-start",
    axis: "vertical",
    panelBeforeArrow: false,
    arrowDir: "up",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "Bottom End": {
    placement: "bottom-end",
    axis: "vertical",
    panelBeforeArrow: false,
    arrowDir: "up",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
  Left: {
    placement: "left",
    axis: "horizontal",
    panelBeforeArrow: true,
    arrowDir: "right",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "Left Start": {
    placement: "left-start",
    axis: "horizontal",
    panelBeforeArrow: true,
    arrowDir: "right",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "Left End": {
    placement: "left-end",
    axis: "horizontal",
    panelBeforeArrow: true,
    arrowDir: "right",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
  Right: {
    placement: "right",
    axis: "horizontal",
    panelBeforeArrow: false,
    arrowDir: "left",
    arrowAlign: "center",
    rootCrossAlign: "center",
  },
  "Right Start": {
    placement: "right-start",
    axis: "horizontal",
    panelBeforeArrow: false,
    arrowDir: "left",
    arrowAlign: "start",
    rootCrossAlign: "start",
  },
  "Right End": {
    placement: "right-end",
    axis: "horizontal",
    panelBeforeArrow: false,
    arrowDir: "left",
    arrowAlign: "end",
    rootCrossAlign: "end",
  },
};

export function floatingPanelJoinRules(panelSelector: string) {
  return `
${panelSelector}:has(+ .pt-floating__arrow-row) {
  border-bottom: 0;
}

${panelSelector} + .pt-floating__arrow-row {
  margin-top: -1px;
  z-index: 1;
}

.pt-floating__arrow-row:has(+ ${panelSelector}) {
  margin-bottom: -1px;
  z-index: 1;
}

.pt-floating__arrow-row:has(+ ${panelSelector}) + ${panelSelector} {
  margin-top: -1px;
  border-top: 0;
}

${panelSelector}:has(+ .pt-floating__arrow-rail) {
  border-right: 0;
}

${panelSelector} + .pt-floating__arrow-rail {
  margin-left: -1px;
  z-index: 1;
}

.pt-floating__arrow-rail:has(+ ${panelSelector}) {
  margin-right: -1px;
  z-index: 1;
}

.pt-floating__arrow-rail:has(+ ${panelSelector}) + ${panelSelector} {
  margin-left: -1px;
  border-left: 0;
}
`;
}
