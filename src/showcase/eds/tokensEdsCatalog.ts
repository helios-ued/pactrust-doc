export type TokensEdsNavItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

/** 锚点顺序对齐 EDS Desktop · /tokens */
export const tokensEdsNav: TokensEdsNavItem[] = [
  { id: "color-base", label: "Color Base", level: 2 },
  { id: "color-semantic", label: "Color Semantic", level: 2 },
  { id: "semantic-box", label: "Box", level: 3 },
  { id: "semantic-text", label: "Text", level: 3 },
  { id: "semantic-status", label: "Status", level: 3 },
  { id: "semantic-stroke", label: "Stroke", level: 3 },
  { id: "scale-base", label: "Scale Base", level: 2 },
  { id: "scale-semantic", label: "Scale Semantic", level: 2 },
  { id: "semantic-spacing", label: "Spacing", level: 3 },
  { id: "semantic-radius", label: "Radius", level: 3 },
  { id: "semantic-icon", label: "Icon", level: 3 },
  { id: "semantic-depth", label: "Depth", level: 3 },
  { id: "typography-base", label: "Typography Base", level: 2 },
  { id: "typography-semantic", label: "Typography Semantic", level: 2 },
  { id: "text-style", label: "Text Style", level: 2 },
  { id: "motion-base", label: "Motion Base", level: 2 },
  { id: "effect-base", label: "Effect Base", level: 2 },
];

export type TokenPairRow = {
  name: string;
  cssVar: string;
  light: string;
  dark?: string;
  note?: string;
};

export const colorBaseRows: TokenPairRow[] = [
  { name: "brand", cssVar: "--pt-brand-color", light: "#1677ff", note: "→ --el-color-primary" },
  { name: "brand-dark-2", cssVar: "--pt-brand-color-dark-2", light: "#125fcc" },
  { name: "success", cssVar: "--el-color-success", light: "#00b42a", note: "Figma Success/color" },
  { name: "warning", cssVar: "--el-color-warning", light: "#ff7d00", note: "Figma Warning/color" },
  { name: "danger", cssVar: "--el-color-danger", light: "#f53f3f", note: "Figma Error/color（组件 Danger）" },
  { name: "info", cssVar: "--el-color-info", light: "#909399" },
  { name: "text-primary", cssVar: "--el-text-color-primary", light: "#303133" },
  { name: "text-regular", cssVar: "--el-text-color-regular", light: "#606266" },
  { name: "text-placeholder", cssVar: "--el-text-color-placeholder", light: "#909399" },
  { name: "text-disabled", cssVar: "--el-text-color-disabled", light: "#c0c4cc" },
  { name: "bg-base", cssVar: "--el-bg-color", light: "#ffffff" },
  { name: "fill-blank", cssVar: "--el-fill-color-blank", light: "#ffffff" },
  { name: "border-base", cssVar: "--el-border-color", light: "#dcdfe6" },
  { name: "border-light", cssVar: "--el-border-color-light", light: "#e4e7ed" },
  { name: "feedback-primary", cssVar: "--pt-feedback-primary", light: "#409eff", note: "Figma Primary/color · Alert/Message/Loading" },
  { name: "feedback-primary-7", cssVar: "--pt-feedback-primary-7", light: "#c6e2ff", note: "Message 边框" },
  { name: "feedback-primary-9", cssVar: "--pt-feedback-primary-9", light: "#ecf5ff", note: "Figma Primary/color-9" },
  { name: "success-9", cssVar: "--el-color-success-light-9", light: "#e6f8ea" },
  { name: "success-7", cssVar: "--el-color-success-light-7", light: "#b3e9bf" },
  { name: "warning-9", cssVar: "--el-color-warning-light-9", light: "#fff2e6" },
  { name: "warning-7", cssVar: "--el-color-warning-light-7", light: "#ffd8b3" },
  { name: "danger-9", cssVar: "--el-color-danger-light-9", light: "#feecec" },
  { name: "danger-7", cssVar: "--el-color-danger-light-7", light: "#fcc5c5" },
  { name: "info-7", cssVar: "--el-color-info-light-7", light: "#dedfe0" },
  { name: "fill-lighter", cssVar: "--el-fill-color-lighter", light: "#fafafa", note: "Figma Fill/Lighter · Loading" },
  { name: "brand-9", cssVar: "--pt-brand-color-9", light: "#e8f1ff", note: "→ --el-color-primary-light-9（非 Feedback Primary-9）" },
  { name: "brand-8", cssVar: "--pt-brand-color-8", light: "#d0e4ff", note: "→ --el-color-primary-light-8" },
  { name: "brand-7", cssVar: "--pt-brand-color-7", light: "#b9d6ff", note: "→ --el-color-primary-light-7" },
  { name: "brand-5", cssVar: "--pt-brand-color-5", light: "#8bbbff", note: "→ --el-color-primary-light-5" },
  { name: "brand-3", cssVar: "--pt-brand-color-3", light: "#5ca0ff" },
];

export type SemanticTokenRow = {
  name: string;
  expression: string;
  note?: string;
};

export const colorSemanticGroups: Record<string, SemanticTokenRow[]> = {
  box: [
    { name: "surface-page", expression: "var(--el-bg-color)", note: "页面底" },
    { name: "surface-canvas", expression: "var(--ds-bg-canvas)", note: "Showcase 预览区" },
    { name: "surface-muted", expression: "var(--ds-bg-muted)", note: "定制区 / 灰底" },
    { name: "surface-popup", expression: "var(--ds-bg-popup)", note: "浮层容器" },
  ],
  text: [
    { name: "text-primary", expression: "var(--el-text-color-primary)" },
    { name: "text-regular", expression: "var(--el-text-color-regular)" },
    { name: "text-on-primary", expression: "var(--el-text-color-write)" },
    { name: "text-link", expression: "var(--pt-brand-color)" },
  ],
  status: [
    { name: "status-success", expression: "var(--el-color-success)" },
    { name: "status-warning", expression: "var(--el-color-warning)" },
    { name: "status-danger", expression: "var(--el-color-danger)" },
    { name: "status-info", expression: "var(--el-color-info)" },
  ],
  stroke: [
    { name: "stroke-divider", expression: "var(--ds-stroke-divider)" },
    { name: "stroke-border", expression: "var(--el-border-color)" },
    { name: "stroke-focus", expression: "var(--pt-brand-color-5)" },
  ],
};

export const scaleBaseRows: TokenPairRow[] = [
  { name: "space-0", cssVar: "--pt-space-0", light: "0" },
  { name: "space-4", cssVar: "--pt-space-4", light: "4px" },
  { name: "space-8", cssVar: "--pt-space-8", light: "8px" },
  { name: "spacing-lg", cssVar: "--pt-spacing-lg", light: "12px" },
  { name: "spacing-xl", cssVar: "--pt-spacing-xl", light: "16px" },
  { name: "spacing-3xl", cssVar: "--pt-spacing-3xl", light: "24px" },
  { name: "spacing-4xl", cssVar: "--pt-spacing-4xl", light: "32px" },
  { name: "radius-small", cssVar: "--el-border-radius-small", light: "2px" },
  { name: "radius-base", cssVar: "--el-border-radius-base", light: "4px" },
  { name: "radius-xl", cssVar: "--el-border-radius-xl", light: "12px" },
];

export const iconScalePx = [10, 12, 14, 16, 18, 20, 24, 28, 32, 48, 64, 104, 128] as const;
