import { cn } from "@/lib/cn";
import { EpIcon } from "./EpIcon";
import { epIconManifest, type EpIconManifestItem } from "./epIconManifest";

const epByName = new Map<string, EpIconManifestItem>(
  epIconManifest.map((item) => [item.name, item]),
);

export function resolveEpIconByName(name: string): EpIconManifestItem | undefined {
  return epByName.get(name);
}

export type EpIconByNameProps = {
  name: string;
  size?: number;
  className?: string;
};

/** Figma Icon 页 · Element Plus 图标集（epIconManifest） */
export function EpIconByName({ name, size = 16, className }: EpIconByNameProps) {
  const item = resolveEpIconByName(name);
  if (!item) return null;
  return (
    <span className={cn("inline-flex shrink-0", className)} aria-hidden>
      <EpIcon item={item} size={size} />
    </span>
  );
}
