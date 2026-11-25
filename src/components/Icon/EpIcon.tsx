import { cn } from "@/lib/cn";
import type { EpIconManifestItem } from "./epIconManifest";

export type EpIconProps = {
  item: EpIconManifestItem;
  size?: number;
  className?: string;
};

/** Element Plus SVG（自 epIconManifest） */
export function EpIcon({ item, size = 20, className }: EpIconProps) {
  return (
    <svg
      viewBox={item.viewBox}
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      {item.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
