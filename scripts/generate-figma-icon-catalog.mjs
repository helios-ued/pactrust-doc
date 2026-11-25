/**
 * Build Figma-aligned icon catalog (EP categories + PacsTrust eds-* icons).
 * Run: node scripts/generate-figma-icon-catalog.mjs
 * Requires Figma MCP asset server for eds SVG embed: FIGMA_MCP_BASE=http://localhost:3845 (default)
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const require = createRequire(import.meta.url);
const icons = require("@element-plus/icons-vue");

const MCP_BASE = process.env.FIGMA_MCP_BASE ?? "http://localhost:3845";
const metadataPath = join(__dirname, "data/figma-icon-page-metadata.xml");
const mcpDir = join(__dirname, "data/mcp-context");

const EP_SECTION_HEADERS = new Set([
  "System",
  "Arrow",
  "Document",
  "Media",
  "Traffic",
  "Food",
  "Items",
  "Weather",
  "Other",
]);

const EDS_SECTION_LABELS = {
  Action: "Action",
  Arrow: "Arrow (PacsTrust)",
  Fill: "Fill",
  Other: "Other (PacsTrust)",
  Social: "Social + communication",
  Payment: "Payment",
  Document: "Document (file type)",
};

const NAME_ALIASES = {
  "Sunrise-1": "Sunrise",
  "s-help": "Help",
  Kruck: "Truck",
  Right: "Right",
  ChatSquare: "ChatLineSquare",
  Notification: "Bell",
};

function toEpId(name) {
  return `ep-${name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`;
}

function slugEdsId(category, slug) {
  const s = slug
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9@_-]+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
  return `eds-${category.toLowerCase().replace(/\s+/g, "-")}-${s.replace(/^@/, "at-")}`;
}

function parseEpCategories(xml) {
  const categories = [];
  let current = null;
  for (const line of xml.split("\n")) {
    const header = line.match(
      /name="(System|Arrow|Document|Media|Traffic|Food|Items|Weather|Other)" x="0" y="0" width="1340"/,
    );
    if (header) {
      current = header[1];
      categories.push({ id: current, label: current, names: [] });
      continue;
    }
    if (!current) continue;
    const m = line.match(/<text id="5839:[^"]+" name="([^"]+)"/);
    if (m && line.includes('height="22"')) {
      const n = m[1];
      if (n !== "Text") categories[categories.length - 1].names.push(n);
    }
  }
  return categories;
}

function parseEdsFromMetadata(xml) {
  const entries = [];
  const re = /<(?:symbol|instance) id="([^"]+)" name="([^"]+)"[^/]*\/>/g;
  let m;
  while ((m = re.exec(xml))) {
    const [, nodeId, name] = m;
    if (!name.includes("/")) continue;
    const [cat, slug] = name.split("/");
    const edsCats = new Set(["Action", "Arrow", "Fill", "Other", "Social", "Payment"]);
    const isFileDoc = cat === "Document";
    if (!edsCats.has(cat) && !isFileDoc) continue;
    entries.push({
      nodeId,
      figmaName: name,
      category: cat === "Document" ? "Document" : cat,
      sectionLabel: EDS_SECTION_LABELS[cat] ?? cat,
      slug,
      id: slugEdsId(cat, slug),
    });
  }
  const seen = new Set();
  return entries.filter((e) => {
    if (seen.has(e.id)) return false;
    seen.add(e.id);
    return true;
  });
}

/** Parse Figma MCP get_design_context dumps for data-name → asset URL */
function parseMcpContextFiles() {
  const byFigmaName = new Map();
  if (!existsSync(mcpDir)) return byFigmaName;

  for (const file of readdirSync(mcpDir).filter((f) => f.endsWith(".txt"))) {
    const text = readFileSync(join(mcpDir, file), "utf8");
    const urlByVar = new Map();
    for (const line of text.split("\n")) {
      const urlM = line.match(/^const (\w+) = "(http:\/\/localhost:3845\/assets\/[^"]+\.svg)";/);
      if (urlM) urlByVar.set(urlM[1], urlM[2]);
    }
    const blocks = text.split(/function \w+/);
    for (const block of blocks) {
      const nameM = block.match(/data-name="([^"]+)"/);
      if (!nameM) continue;
      const figmaName = nameM[1];
      const srcM = block.match(/src=\{(\w+)\}/);
      if (!srcM) continue;
      const url = urlByVar.get(srcM[1]);
      if (url) byFigmaName.set(figmaName, url);
    }
  }
  return byFigmaName;
}

async function fetchSvgInline(url) {
  const res = await fetch(url.replace("http://localhost:3845", MCP_BASE));
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  let svg = await res.text();
  svg = svg
    .replace(/stroke="#303133"/gi, 'stroke="currentColor"')
    .replace(/stroke="#000000"/gi, 'stroke="currentColor"')
    .replace(/fill="#303133"/gi, 'fill="currentColor"')
    .replace(/fill="#000000"/gi, 'fill="currentColor"');
  return svg.trim();
}

function buildEpManifestLookup() {
  const byName = new Map();
  for (const name of Object.keys(icons).filter((k) => /^[A-Z]/.test(k))) {
    byName.set(name, { name, id: toEpId(name) });
  }
  return byName;
}

async function main() {
  const xml = readFileSync(metadataPath, "utf8");
  const epCategoriesRaw = parseEpCategories(xml);
  const epByName = buildEpManifestLookup();
  const mcpAssets = parseMcpContextFiles();
  const edsMeta = parseEdsFromMetadata(xml);

  const epCategories = epCategoriesRaw.map((cat) => ({
    id: cat.id,
    label: cat.label,
    icons: cat.names
      .map((raw) => {
        const name = NAME_ALIASES[raw] ?? raw;
        const hit = epByName.get(name);
        if (!hit) return { rawName: raw, name, id: toEpId(name), missing: true };
        return { rawName: raw, name: hit.name, id: hit.id, missing: false };
      })
      .filter(Boolean),
  }));

  const edsIcons = [];
  let fetchOk = 0;
  let fetchFail = 0;
  for (const e of edsMeta) {
    const assetUrl = mcpAssets.get(e.figmaName);
    let svg = "";
    if (assetUrl) {
      try {
        svg = await fetchSvgInline(assetUrl);
        fetchOk++;
      } catch (err) {
        fetchFail++;
        console.warn(`SVG fetch failed ${e.figmaName}:`, err.message);
      }
    } else {
      fetchFail++;
    }
    edsIcons.push({ ...e, svg });
  }

  const edsBySection = [];
  const sectionOrder = [
    "Action",
    "Arrow (PacsTrust)",
    "Fill",
    "Other (PacsTrust)",
    "Social + communication",
    "Payment",
    "Document (file type)",
  ];
  for (const label of sectionOrder) {
    const items = edsIcons.filter((i) => i.sectionLabel === label);
    if (items.length) edsBySection.push({ id: label.replace(/\s+/g, "-").toLowerCase(), label, icons: items });
  }

  const epCount = epCategories.reduce((n, c) => n + c.icons.filter((i) => !i.missing).length, 0);
  const edsCount = edsIcons.filter((i) => i.svg).length;

  const outPath = join(root, "src/components/Icon/figmaIconCatalog.ts");
  const body = `/* AUTO-GENERATED — node scripts/generate-figma-icon-catalog.mjs */
import type { EpIconManifestItem } from "./epIconManifest";
import { epIconManifest } from "./epIconManifest";

export type FigmaEpCatalogIcon = {
  kind: "ep";
  rawName: string;
  name: string;
  id: string;
  missing?: boolean;
};

export type FigmaEdsCatalogIcon = {
  kind: "eds";
  id: string;
  figmaName: string;
  slug: string;
  nodeId: string;
  svg: string;
};

export type FigmaIconCategory =
  | { kind: "ep"; id: string; label: string; icons: FigmaEpCatalogIcon[] }
  | { kind: "eds"; id: string; label: string; icons: FigmaEdsCatalogIcon[] };

export const figmaEpCategories = ${JSON.stringify(epCategories.map((c) => ({ ...c, kind: "ep" })), null, 2)} as const;

export const figmaEdsSections = ${JSON.stringify(edsBySection.map((s) => ({ ...s, kind: "eds" })), null, 2)} as const;

export const figmaIconCategories: FigmaIconCategory[] = [
  ...figmaEpCategories.map((c) => ({ kind: "ep" as const, id: c.id, label: c.label, icons: c.icons.map((i) => ({ kind: "ep" as const, ...i })) })),
  ...figmaEdsSections.map((s) => ({ kind: "eds" as const, id: s.id, label: s.label, icons: s.icons.map((i) => ({ kind: "eds" as const, id: i.id, figmaName: i.figmaName, slug: i.slug, nodeId: i.nodeId, svg: i.svg })) })),
];

export const figmaIconTotalCount = ${epCount + edsCount};
export const figmaEpListedCount = ${epCount};
export const figmaEdsCount = ${edsCount};

const epById = new Map(epIconManifest.map((item) => [item.id, item]));

export function resolveEpManifestItem(id: string): EpIconManifestItem | undefined {
  return epById.get(id);
}
`;

  writeFileSync(outPath, body);
  console.log(
    `Wrote ${outPath}\n  EP (Figma doc): ${epCount} resolved, eds: ${edsCount}/${edsMeta.length} with SVG (${fetchOk} ok, ${fetchFail} missing/failed)`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
