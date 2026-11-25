import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";
import "./badge.css";

/** Figma Badge — Style × Dot (`88:22025`)；Figma Error → Danger */
export type BadgeStyle = "Primary" | "Success" | "Warning" | "Danger";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  badgeStyle?: BadgeStyle;
  /** Figma Dot=True 时为点状；否则为数字/文案徽章 */
  dot?: boolean;
  /** 数字或短文案；dot 时忽略 */
  value?: ReactNode;
  /** 包裹触发元素；无 children 时仅渲染徽章本体（Showcase） */
  children?: ReactNode;
  /** 值为 0 时仍显示 */
  showZero?: boolean;
};

const toneKey: Record<BadgeStyle, string> = {
  Primary: "primary",
  Success: "success",
  Warning: "warning",
  Danger: "danger",
};

function BadgeContent({
  badgeStyle,
  dot,
  value,
}: Pick<BadgeProps, "badgeStyle" | "dot" | "value">) {
  const tone = toneKey[badgeStyle ?? "Primary"];
  if (dot) {
    return <span className={cn("pt-badge__dot", `pt-badge__dot--${tone}`)} />;
  }
  return (
    <span className={cn("pt-badge__count", `pt-badge__count--${tone}`)}>
      {value ?? "9"}
    </span>
  );
}

export function Badge({
  badgeStyle = "Primary",
  dot = false,
  value,
  showZero = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  const hidden =
    !dot &&
    (value === undefined || value === null || value === "" || (value === 0 && !showZero));

  if (!children) {
    return (
      <span className={cn("pt-badge-standalone", className)} {...rest}>
        <BadgeContent badgeStyle={badgeStyle} dot={dot} value={value} />
      </span>
    );
  }

  return (
    <span className={cn("pt-badge", className)} {...rest}>
      {children}
      {!hidden ? (
        <span className="pt-badge__content">
          <BadgeContent badgeStyle={badgeStyle} dot={dot} value={value} />
        </span>
      ) : null}
    </span>
  );
}
