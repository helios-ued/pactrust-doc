import { cn } from "@/lib/cn";
import { normalizeEdsSvg } from "./edsIconSvg";

export type EdsIconProps = {
  svg: string;
  size?: number;
  className?: string;
  label?: string;
};

/** PacsTrust / Figma stroke icons (inline SVG from figmaIconCatalog) */
export function EdsIcon({ svg, size = 20, className, label }: EdsIconProps) {
  if (!svg) {
    return (
      <span
        className={cn("inline-block rounded bg-[color:var(--el-border-color-lighter)]", className)}
        style={{ width: size, height: size }}
        title={label}
        aria-hidden
      />
    );
  }
  const html = normalizeEdsSvg(svg, size);

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center text-current [&_svg]:block [&_svg]:h-full [&_svg]:w-full",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
