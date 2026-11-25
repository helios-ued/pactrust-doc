import { cn } from "@/lib/cn";
import { EpIcon } from "./EpIcon";
import { epIconManifest } from "./epIconManifest";
import { iconCatalog, type IconName } from "./icons";

export type IconSize = "Default" | "Large" | "Small";

const sizePx: Record<IconSize, number> = {
  Small: 16,
  Default: 20,
  Large: 24,
};

const epByName = new Map(epIconManifest.map((item) => [item.name, item]));

export type IconProps = {
  name: IconName;
  size?: IconSize;
  className?: string;
};

/** Figma Icon — 优先 epIconManifest（Element Plus 全量），fallback 内置简版 */
export function Icon({ name, size = "Default", className }: IconProps) {
  const px = sizePx[size];
  const ep = epByName.get(name);
  if (ep) {
    return (
      <span className={cn("inline-flex shrink-0 text-el-text-regular", className)} role="img" aria-label={name}>
        <EpIcon item={ep} size={px} />
      </span>
    );
  }
  const Cmp = iconCatalog[name];
  if (!Cmp) return null;
  return (
    <span className={cn("inline-flex shrink-0 text-el-text-regular", className)} role="img" aria-label={name}>
      <Cmp width={px} height={px} />
    </span>
  );
}
