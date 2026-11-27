/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE: string;
  readonly VITE_SHOWCASE_PRODUCT?: "all" | "desktop" | "doc" | "prototype";
  readonly VITE_PROTOTYPE_SITE_URL?: string;
  readonly VITE_DESKTOP_SITE_URL?: string;
  readonly VITE_DOC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
