/** `all` = 本地一体；`desktop` = Showcase；`doc` = pactrust-doc 文档站（对标 eds-doc）；`prototype` = 中台可点击原型 */
export type ShowcaseProduct = "all" | "desktop" | "doc" | "prototype";

export function getShowcaseProduct(): ShowcaseProduct {
  const raw = import.meta.env.VITE_SHOWCASE_PRODUCT;
  if (raw === "desktop" || raw === "doc" || raw === "prototype") return raw;
  return "all";
}

/** pactrust-doc 分仓：设计说明站（职责对标 eds-doc） */
export function isDesignDocSite(): boolean {
  return getShowcaseProduct() === "doc";
}

export function isUnifiedShowcase(): boolean {
  return getShowcaseProduct() === "all";
}