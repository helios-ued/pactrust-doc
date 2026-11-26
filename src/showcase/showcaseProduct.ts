/** `all` = 本地一体（顶栏切换）；`desktop` / `doc` = 分仓 GitHub Pages 构建 */
export type ShowcaseProduct = "all" | "desktop" | "doc";

export function getShowcaseProduct(): ShowcaseProduct {
  const raw = import.meta.env.VITE_SHOWCASE_PRODUCT;
  if (raw === "desktop" || raw === "doc") return raw;
  return "all";
}

export function isUnifiedShowcase(): boolean {
  return getShowcaseProduct() === "all";
}