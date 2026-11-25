/** Normalize Figma MCP SVG (32×32 stroke) for inline display at `size` px. */
export function normalizeEdsSvg(raw: string, size: number): string {
  const viewMatch = raw.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);
  const base = viewMatch ? Number(viewMatch[1]) : 32;
  const scale = size / base;

  let svg = raw
    .replace(/\s*preserveAspectRatio="[^"]*"/g, "")
    .replace(/\s*overflow="[^"]*"/g, "")
    .replace(/\s*style="[^"]*"/g, "")
    .replace(/\s*width="[^"]*"/g, "")
    .replace(/\s*height="[^"]*"/g, "")
    .replace(/\sstroke="black"/gi, ' stroke="currentColor"')
    .replace(/\sstroke="#1C2024"/gi, ' stroke="currentColor"');

  if (scale !== 1) {
    svg = svg.replace(/stroke-width="([\d.]+)"/g, (_, w) => {
      const next = Number(w) * scale;
      return `stroke-width="${next.toFixed(3).replace(/\.?0+$/, "")}"`;
    });
  }

  return svg;
}
