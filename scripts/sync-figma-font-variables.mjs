/**
 * 从 scripts/data/figma-font-variables.json 生成 CSS 变量与 TS catalog。
 * 更新 JSON：在 Figma 打开文件后，对 Text(5803:2777) 等节点跑 MCP get_variable_defs 并合并到 JSON。
 *
 * Run: node scripts/sync-figma-font-variables.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dataPath = join(__dirname, "data/figma-font-variables.json");
const tokensPath = join(root, "src/styles/tokens.css");
const catalogPath = join(root, "src/showcase/eds/figmaFontVariables.ts");

const data = JSON.parse(readFileSync(dataPath, "utf8"));

function cssName(figmaName) {
  return figmaName.replace(/\//g, "-").toLowerCase();
}

function px(n) {
  return `${n}px`;
}

const scale = data.fontSizeScale;

const ptSizeLines = scale
  .map(
    (row) =>
      `  --pt-font-size-${cssName(row.figmaName)}: ${px(row.sizePx)};\n  --pt-line-height-${cssName(row.figmaName)}: ${px(row.lineHeightPx)};`,
  )
  .join("\n");

const footnote = data.fixedWords?.footnote;
const footnoteLine =
  footnote != null
    ? `\n  --pt-line-height-footnote: ${px(footnote.lineHeightPx)};`
    : "";

const elAliasBlock = `  --el-font-size-extra-small: var(--pt-font-size-extra-small);
  --el-font-size-small: var(--pt-font-size-small);
  --el-font-size-base: var(--pt-font-size-base);
  --el-font-size-medium: var(--pt-font-size-medium);
  --el-font-size-large: var(--pt-font-size-large);
  --el-font-size-title-large: var(--pt-font-size-extra-large);
  --el-font-line-height-title-large: var(--pt-line-height-extra-large);
  --el-font-size-title-small: var(--pt-font-size-medium);
  --el-font-line-height-title-small: var(--pt-line-height-medium);
  --el-font-size-extra-large: var(--pt-font-size-4xl-large);
  --el-font-line-height-extra-large: var(--pt-line-height-4xl-large);
  --el-font-line-height-base: var(--pt-line-height-base);
  --el-font-line-height-large: var(--pt-line-height-large);
  --el-font-line-height-small: var(--pt-line-height-small);
  --el-font-line-height-extra-small: var(--pt-line-height-extra-small);
  --el-font-line-height-medium: var(--pt-line-height-medium);`;

const weightLines = data.fontWeights
  .map((w) => `  ${w.cssVar}: ${w.value};`)
  .join("\n");

const typographyBlock = `  /* Typography — Figma 本地变量 · 字体（sync: scripts/sync-figma-font-variables.mjs） */
  --el-font-family: "Inter", system-ui, sans-serif;

${ptSizeLines}${footnoteLine}

  /* Element / Text 2.3.0 别名（--el-font-size-extra-large = Figma 4XL-large） */
${elAliasBlock}

${weightLines}`;

const tokens = readFileSync(tokensPath, "utf8");
const startMarker = "  /* Typography — Figma";
const endMarker = "  /* Radius — FOUNDATIONS Radius/*";
const start = tokens.indexOf(startMarker);
const end = tokens.indexOf(endMarker);
if (start === -1 || end === -1) {
  console.error("Could not find typography block markers in tokens.css");
  process.exit(1);
}
const nextTokens = tokens.slice(0, start) + typographyBlock + "\n\n" + tokens.slice(end);
writeFileSync(tokensPath, nextTokens);

const tsRows = scale
  .map((row) => {
    const cssKey = cssName(row.figmaName);
    const elMapping = data.elementAliases
      ? Object.entries(data.elementAliases)
          .filter(([, ref]) => ref === row.figmaName)
          .map(([k]) => k)
          .join(", ")
      : "";
    const elField = elMapping ? `\n    elMapping: "${elMapping}",` : "";
    return `  {
    figmaName: "${row.figmaName}",
    cssVar: "--pt-font-size-${cssKey}",
    px: "${px(row.sizePx)}",
    lineHeightVar: "--pt-line-height-${cssKey}",
    lineHeightPx: "${px(row.lineHeightPx)}",
    mcpSource: "${row.mcp.replace(/"/g, '\\"')}",${elField}
  }`;
  })
  .join(",\n");

const weightTs = data.fontWeights
  .map(
    (w) =>
      `  { figmaName: "${w.figmaName}", cssVar: "${w.cssVar}", value: "${w.value}" }`,
  )
  .join(",\n");

const catalogTs = `/** AUTO-GENERATED — run node scripts/sync-figma-font-variables.mjs */
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
${tsRows},
];

export const figmaFontWeights = [
${weightTs},
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

export const figmaFixedWords = ${JSON.stringify(data.fixedWords ?? {}, null, 2)} as const;
`;

writeFileSync(catalogPath, catalogTs);

console.log("Updated:", tokensPath);
console.log("Updated:", catalogPath);
