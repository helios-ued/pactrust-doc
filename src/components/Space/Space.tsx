import { cn } from "@/lib/cn";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

/**
 * Figma Space/width · Space/height — Small(8) | Default(12) | Large(16)
 * 语义间距 — spacing-3xl(24) · spacing-4xl(32) · Custom(number)
 */
export type SpaceSize =
  | "small"
  | "default"
  | "large"
  | "spacing3xl"
  | "spacing4xl"
  | number;

export type SpaceDirection = "horizontal" | "vertical";

export type SpaceProps = HTMLAttributes<HTMLDivElement> & {
  size?: SpaceSize;
  direction?: SpaceDirection;
  wrap?: boolean;
  align?: CSSProperties["alignItems"];
  children: ReactNode;
};

export function resolveSpaceGap(size: SpaceSize = "default"): number {
  if (typeof size === "number") return Math.max(0, size);
  const map = {
    small: 8,
    default: 12,
    large: 16,
    spacing3xl: 24,
    spacing4xl: 32,
  } as const;
  return map[size];
}

/** el-space — 子项间距由 Figma Space 组件 width/height 尺寸定义 */
export function Space({
  size = "default",
  direction = "horizontal",
  wrap = false,
  align = "center",
  className,
  style,
  children,
  ...rest
}: SpaceProps) {
  const gap = resolveSpaceGap(size);
  const isVertical = direction === "vertical";

  return (
    <div
      className={cn(
        "inline-flex max-w-full",
        isVertical ? "flex-col" : "flex-row",
        wrap && "flex-wrap",
        className,
      )}
      style={{
        gap,
        alignItems: align,
        ...style,
      }}
      data-direction={direction}
      data-size={typeof size === "number" ? "custom" : size}
      {...rest}
    >
      {children}
    </div>
  );
}
