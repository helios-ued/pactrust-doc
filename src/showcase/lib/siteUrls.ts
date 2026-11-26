import { getShowcaseProduct } from "../showcaseProduct";
import { docTokensPath, templateShowcasePath } from "../nav";

export function designProductEntry(): string {
  if (getShowcaseProduct() === "all" || getShowcaseProduct() === "desktop") {
    return docTokensPath();
  }
  const url = import.meta.env.VITE_DESKTOP_SITE_URL;
  return url?.replace(/\/$/, "") || docTokensPath();
}

export function templateProductEntry(): string {
  if (getShowcaseProduct() === "all" || getShowcaseProduct() === "doc") {
    return templateShowcasePath("login");
  }
  const url = import.meta.env.VITE_DOC_SITE_URL;
  return url
    ? `${url.replace(/\/$/, "")}/templates/login`
    : templateShowcasePath("login");
}

export function isExternalProductLink(mode: "design" | "template"): boolean {
  const product = getShowcaseProduct();
  if (product === "all") return false;
  if (mode === "design") return product === "doc" && Boolean(import.meta.env.VITE_DESKTOP_SITE_URL);
  return product === "desktop" && Boolean(import.meta.env.VITE_DOC_SITE_URL);
}