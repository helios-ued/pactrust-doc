import type { EpIconManifestItem } from "./epIconManifest";

export type ShowcaseEpIcon = {
  kind: "ep";
  id: string;
  name: string;
  epItem: EpIconManifestItem;
};

export type ShowcaseEdsIcon = {
  kind: "eds";
  id: string;
  figmaName: string;
  svg: string;
};

export type ShowcaseIcon = ShowcaseEpIcon | ShowcaseEdsIcon;

export function showcaseIconLabel(item: ShowcaseIcon): string {
  return item.kind === "ep" ? item.id : item.figmaName;
}
