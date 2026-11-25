export type BlueFlutedGlassBrandLogo = "leibox" | "pacstrust" | "none";

export type BlueFlutedGlassOptions = {
  /** 嵌入高度（px 或 CSS 长度）；未设则填满父级 */
  height?: number | string;
  /** 覆盖系统「减少动态效果」 */
  reducedMotion?: boolean;
  /** 居中标识：默认 LeiBox；登录营销区用 pacstrust */
  brandLogo?: BlueFlutedGlassBrandLogo;
  /** 内部：自定义 SVG 标记（由 motion-runtime 注入） */
  logoSvg?: string | null;
};

export type BlueFlutedGlassInstance = {
  destroy: () => void;
  setReducedMotion: (value: boolean) => void;
  isPaused: () => boolean;
};

export function createBlueFlutedGlass(
  host: HTMLElement,
  options?: BlueFlutedGlassOptions,
): BlueFlutedGlassInstance;
