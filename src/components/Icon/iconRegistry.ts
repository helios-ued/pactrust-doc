import { epIconManifest } from "./epIconManifest";

export type { EpIconManifestItem } from "./epIconManifest";
export { epIconManifest, epIconCount } from "./epIconManifest";
export { iconNameToEpId } from "./iconEpUtils";

/** @deprecated 使用 epIconManifest */
export const iconRegistry = epIconManifest.map((item) => ({
  id: item.id,
  name: item.name,
}));
