export type Rgba = { r: number; g: number; b: number; a: number };

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function parseHex(hex: string): Rgba | null {
  const raw = hex.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{3,8}$/.test(raw)) return null;
  const full =
    raw.length === 3
      ? raw
          .split("")
          .map((c) => c + c)
          .join("")
      : raw.length === 6
        ? raw
        : raw.slice(0, 6);
  const n = Number.parseInt(full, 16);
  if (Number.isNaN(n)) return null;
  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255,
    a: raw.length === 8 ? Number.parseInt(raw.slice(6, 8), 16) / 255 : 1,
  };
}

export function parseColor(input: string): Rgba {
  const hex = parseHex(input);
  if (hex) return hex;
  const m = input.trim().match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/i);
  if (m) {
    return {
      r: clamp(Number(m[1]), 0, 255),
      g: clamp(Number(m[2]), 0, 255),
      b: clamp(Number(m[3]), 0, 255),
      a: m[4] !== undefined ? clamp(Number(m[4]), 0, 1) : 1,
    };
  }
  return { r: 22, g: 119, b: 255, a: 1 };
}

export function rgbaToString({ r, g, b, a }: Rgba): string {
  if (a >= 0.999) return toHex({ r, g, b, a: 1 });
  const rr = Math.round(r);
  const gg = Math.round(g);
  const bb = Math.round(b);
  const aa = Math.round(a * 100) / 100;
  return `rgba(${rr}, ${gg}, ${bb}, ${aa})`;
}

export function toHex({ r, g, b }: Rgba): string {
  const h = (n: number) => clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0");
  return `#${h(r)}${h(g)}${h(b)}`;
}

export function rgbToHsv(r: number, g: number, b: number) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === rn) h = ((gn - bn) / d) % 6;
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const s = max === 0 ? 0 : d / max;
  const v = max;
  return { h, s, v };
}

export function hsvToRgb(h: number, s: number, v: number): Rgba {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let rp = 0;
  let gp = 0;
  let bp = 0;
  if (h < 60) [rp, gp, bp] = [c, x, 0];
  else if (h < 120) [rp, gp, bp] = [x, c, 0];
  else if (h < 180) [rp, gp, bp] = [0, c, x];
  else if (h < 240) [rp, gp, bp] = [0, x, c];
  else if (h < 300) [rp, gp, bp] = [x, 0, c];
  else [rp, gp, bp] = [c, 0, x];
  return {
    r: (rp + m) * 255,
    g: (gp + m) * 255,
    b: (bp + m) * 255,
    a: 1,
  };
}
