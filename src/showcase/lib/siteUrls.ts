import { getShowcaseProduct } from "../showcaseProduct";
import { docOverviewPath, docTokensPath, templateShowcasePath } from "../nav";

export function designProductEntry(): string {
  const product = getShowcaseProduct();
  if (product === "all" || product === "desktop" || product === "doc") {
    return docTokensPath();
  }
  const url = import.meta.env.VITE_DOC_SITE_URL;
  return url ? `${url.replace(/\/$/, "")}/overview` : docOverviewPath();
}

export function templateProductEntry(): string {
  const product = getShowcaseProduct();
  if (product === "all") return templateShowcasePath("login");
  if (product === "prototype") return templateShowcasePath("login");
  if (product === "doc") {
    const desktopUrl = import.meta.env.VITE_DESKTOP_SITE_URL;
    return desktopUrl
      ? `${desktopUrl.replace(/\/$/, "")}/tokens`
      : templateShowcasePath("login");
  }
  const prototypeUrl = import.meta.env.VITE_PROTOTYPE_SITE_URL;
  if (prototypeUrl) {
    return `${prototypeUrl.replace(/\/$/, "")}/examples/login`;
  }
  return templateShowcasePath("login");
}

export function prototypeProductEntry(): string {
  const url = import.meta.env.VITE_PROTOTYPE_SITE_URL;
  return url?.replace(/\/$/, "") || "/examples/login";
}

export function isExternalProductLink(
  mode: "design" | "template" | "prototype",
): boolean {
  const product = getShowcaseProduct();
  if (product === "all") return false;
  if (mode === "design") {
    return product === "desktop" && Boolean(import.meta.env.VITE_DOC_SITE_URL);
  }
  if (mode === "template") {
    if (product === "doc") return Boolean(import.meta.env.VITE_DESKTOP_SITE_URL);
    if (product === "desktop") return Boolean(import.meta.env.VITE_PROTOTYPE_SITE_URL);
    return false;
  }
  return (
    (product === "doc" || product === "desktop") &&
    Boolean(import.meta.env.VITE_PROTOTYPE_SITE_URL)
  );
}