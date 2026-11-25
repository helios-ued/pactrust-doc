/**
 * One-off / pre-build: extract SVG paths from @element-plus/icons-vue for React showcase.
 * Run: node scripts/generate-ep-icon-manifest.mjs
 */
import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";

const require = createRequire(import.meta.url);
const icons = require("@element-plus/icons-vue");

function toEpId(name) {
  return `ep-${name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`;
}

const names = Object.keys(icons).filter((k) => /^[A-Z]/.test(k));

const manifest = [];

for (const name of names.sort()) {
  const Comp = icons[name];
  const app = createSSRApp({ render: () => h(Comp) });
  const html = await renderToString(app);
  const viewBoxMatch = html.match(/viewBox="([^"]+)"/);
  const paths = [...html.matchAll(/<path[^>]*d="([^"]+)"/g)].map((m) => m[1]);
  if (!viewBoxMatch || !paths.length) continue;
  manifest.push({
    name,
    id: toEpId(name),
    viewBox: viewBoxMatch[1],
    paths,
  });
}

const out = `/* AUTO-GENERATED — node scripts/generate-ep-icon-manifest.mjs */
export type EpIconManifestItem = {
  name: string;
  id: string;
  viewBox: string;
  paths: string[];
};

export const epIconManifest: EpIconManifestItem[] = ${JSON.stringify(manifest, null, 2)} as const;

export const epIconCount = ${manifest.length};
`;

writeFileSync(new URL("../src/components/Icon/epIconManifest.ts", import.meta.url), out);
console.log(`Wrote ${manifest.length} icons to src/components/Icon/epIconManifest.ts`);
