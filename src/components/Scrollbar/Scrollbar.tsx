import { cn } from "@/lib/cn";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import "./scrollbar.css";

/** Figma Direction: vertical | Horizontal */
export type ScrollbarDirection = "vertical" | "horizontal";

export type ScrollbarProps = HTMLAttributes<HTMLDivElement> & {
  direction?: ScrollbarDirection;
  height?: number | string;
  width?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  children: ReactNode;
};

function toCssSize(value: number | string | undefined): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

/** el-scrollbar — 原生滚动 + Figma 6px 滑轨样式 */
export function Scrollbar({
  direction = "vertical",
  height,
  width,
  maxHeight,
  maxWidth,
  className,
  children,
  style,
  ...rest
}: ScrollbarProps) {
  const isHorizontal = direction === "horizontal";

  const boxStyle: CSSProperties = {
    ...style,
    height: toCssSize(height ?? (isHorizontal ? 130 : undefined)),
    width: toCssSize(width),
    maxHeight: toCssSize(maxHeight ?? (isHorizontal ? undefined : 160)),
    maxWidth: toCssSize(maxWidth ?? (isHorizontal ? 400 : undefined)),
  };

  return (
    <div
      className={cn(
        "pt-scrollbar rounded-el-base border border-[color:var(--el-border-color-light)] bg-[color:var(--el-fill-color-blank)]",
        isHorizontal ? "overflow-x-auto overflow-y-hidden" : "overflow-y-auto overflow-x-hidden",
        className,
      )}
      style={boxStyle}
      data-direction={direction}
      {...rest}
    >
      {children}
    </div>
  );
}
