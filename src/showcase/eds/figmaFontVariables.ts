/** AUTO-GENERATED — run node scripts/sync-figma-font-variables.mjs */
export type FigmaFontSizeRow = {
  figmaName: string;
  cssVar: string;
  px: string;
  lineHeightVar: string;
  lineHeightPx: string;
  mcpSource: string;
  elMapping?: string;
};

export const figmaFontSizes: FigmaFontSizeRow[] = [
  {
    figmaName: "extra-small",
    cssVar: "--pt-font-size-extra-small",
    px: "12px",
    lineHeightVar: "--pt-line-height-extra-small",
    lineHeightPx: "20px",
    mcpSource: "Font Size/extra-small + Line Height/extra-small",
  },
  {
    figmaName: "small",
    cssVar: "--pt-font-size-small",
    px: "13px",
    lineHeightVar: "--pt-line-height-small",
    lineHeightPx: "22px",
    mcpSource: "Font Size/small + Line Height/small",
  },
  {
    figmaName: "base",
    cssVar: "--pt-font-size-base",
    px: "14px",
    lineHeightVar: "--pt-line-height-base",
    lineHeightPx: "22px",
    mcpSource: "Font Size/base + Line Height/base",
  },
  {
    figmaName: "medium",
    cssVar: "--pt-font-size-medium",
    px: "16px",
    lineHeightVar: "--pt-line-height-medium",
    lineHeightPx: "24px",
    mcpSource: "Font Size/medium + Line Height/medium",
    elMapping: "--el-font-size-title-small",
  },
  {
    figmaName: "large",
    cssVar: "--pt-font-size-large",
    px: "18px",
    lineHeightVar: "--pt-line-height-large",
    lineHeightPx: "26px",
    mcpSource: "Font Size/large + Line Height/large",
  },
  {
    figmaName: "extra-large",
    cssVar: "--pt-font-size-extra-large",
    px: "20px",
    lineHeightVar: "--pt-line-height-extra-large",
    lineHeightPx: "28px",
    mcpSource: "Font Size/extra-large + Line Height/extra-large",
    elMapping: "--el-font-size-title-large",
  },
  {
    figmaName: "2XL-large",
    cssVar: "--pt-font-size-2xl-large",
    px: "24px",
    lineHeightVar: "--pt-line-height-2xl-large",
    lineHeightPx: "32px",
    mcpSource: "Display xs/Semibold (24/32) · Font Size/2XL-large",
  },
  {
    figmaName: "3XL-large",
    cssVar: "--pt-font-size-3xl-large",
    px: "28px",
    lineHeightVar: "--pt-line-height-3xl-large",
    lineHeightPx: "38px",
    mcpSource: "Font Size/3XL-large · Line Height/3XL-large (Variables 面板)",
  },
  {
    figmaName: "4XL-large",
    cssVar: "--pt-font-size-4xl-large",
    px: "32px",
    lineHeightVar: "--pt-line-height-4xl-large",
    lineHeightPx: "40px",
    mcpSource: "Font Size/4XL-large + Line Height/4XL-large",
    elMapping: "--el-font-size-extra-large",
  },
  {
    figmaName: "5XL-large",
    cssVar: "--pt-font-size-5xl-large",
    px: "40px",
    lineHeightVar: "--pt-line-height-5xl-large",
    lineHeightPx: "48px",
    mcpSource: "Font Size/5XL-large · Line Height/5XL-large (Variables 面板)",
  },
  {
    figmaName: "6XL-large",
    cssVar: "--pt-font-size-6xl-large",
    px: "48px",
    lineHeightVar: "--pt-line-height-6xl-large",
    lineHeightPx: "56px",
    mcpSource: "Font Size/6XL-large · Line Height/6XL-large (Variables 面板)",
  },
];

export const figmaFontWeights = [
  { figmaName: "Regular(400)", cssVar: "--el-font-weight-regular", value: "400" },
  { figmaName: "Meadium(500)", cssVar: "--el-font-weight-primary", value: "500" },
  { figmaName: "Semibold(600)", cssVar: "--el-font-weight-semibold", value: "600" },
  { figmaName: "Bold(700)", cssVar: "--el-font-weight-bold", value: "700" },
] as const;

export const figmaTextMatrixRows = [
  { role: "Title", size: "Default", fontSize: "large", lineHeight: "large", weights: "Regular | Medium | Bold" },
  { role: "Title", size: "Large", fontSize: "extra-large", lineHeight: "extra-large", weights: "Regular | Medium | Bold" },
  { role: "Title", size: "Small", fontSize: "medium", lineHeight: "medium", weights: "Regular | Medium | Bold" },
  { role: "Body", size: "Default", fontSize: "small", lineHeight: "small", weights: "Regular | Medium | Bold" },
  { role: "Body", size: "Large", fontSize: "base", lineHeight: "base", weights: "Regular | Medium | Bold" },
  { role: "Body", size: "Small", fontSize: "extra-small", lineHeight: "extra-small", weights: "Regular | Medium | Bold" },
] as const;

export const figmaTextTypes = [
  "Default",
  "Primary",
  "Success",
  "Warning",
  "Error",
  "Info",
] as const;

export const figmaFixedWords = {
  "footnote": {
    "sizePx": 12,
    "lineHeightPx": 16,
    "note": "集合 Fixed words · 辅助说明"
  },
  "display-sm": {
    "sizePx": 30,
    "lineHeightPx": 38,
    "weight": 600,
    "note": "Display sm/Semibold · 封面"
  }
} as const;
