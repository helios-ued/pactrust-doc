import {
  createBlueFlutedGlass,
  type BlueFlutedGlassInstance,
  type BlueFlutedGlassOptions,
} from "./BlueFlutedGlassEngine";
import { PACSTRUST_MARKETING_LOGO_SVG } from "./pacstrustMarketingLogoSvg";

export type MotionRuntimeHandle = BlueFlutedGlassInstance & {
  host: HTMLElement;
};

/**
 * 框架无关挂载：多实例互不干扰，卸载时完整清理。
 */
export function mountBlueFlutedGlass(
  host: HTMLElement,
  options?: BlueFlutedGlassOptions,
): MotionRuntimeHandle {
  const brand = options?.brandLogo ?? "leibox";
  const logoSvg =
    brand === "pacstrust"
      ? PACSTRUST_MARKETING_LOGO_SVG
      : brand === "none"
        ? null
        : undefined;
  const instance = createBlueFlutedGlass(host, {
    ...options,
    brandLogo: brand,
    logoSvg,
  });
  return Object.assign(instance, { host });
}

export function unmountBlueFlutedGlass(handle: MotionRuntimeHandle | null): void {
  handle?.destroy();
}
