import { createElement, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Figma Text 2.3.0 — `5803:2777` */
export type TextRole = "Title" | "Body";
/** Figma Type 为 Error；代码保留 Danger 作为同义别名 */
export type TextType =
  | "Default"
  | "Primary"
  | "Success"
  | "Warning"
  | "Danger"
  | "Error"
  | "Info";
export type TextSize = "Default" | "Large" | "Small";
export type TextWeight = "Regular" | "Medium" | "Bold";

export type TextProps = HTMLAttributes<HTMLElement> & {
  role?: TextRole;
  textType?: TextType;
  size?: TextSize;
  weight?: TextWeight;
  as?: "p" | "span" | "h1" | "h2" | "h3";
};

const typeClasses: Record<TextType, string> = {
  Default: "text-[color:var(--el-text-color-primary)]",
  Primary: "text-[color:var(--el-color-primary)]",
  Success: "text-[color:var(--el-color-success)]",
  Warning: "text-[color:var(--el-color-warning)]",
  Danger: "text-el-danger",
  Error: "text-el-danger",
  Info: "text-[color:var(--el-color-info)]",
};

const weightClasses: Record<TextWeight, string> = {
  Regular: "font-[number:var(--el-font-weight-regular)]",
  Medium: "font-[number:var(--el-font-weight-primary)]",
  Bold: "font-[number:var(--el-font-weight-bold)]",
};

const sizeStyles: Record<TextRole, Record<TextSize, { fontSize: string; lineHeight: string }>> = {
  Title: {
    Default: {
      fontSize: "var(--el-font-size-large)",
      lineHeight: "var(--el-font-line-height-large)",
    },
    Large: {
      fontSize: "var(--el-font-size-title-large)",
      lineHeight: "var(--el-font-line-height-title-large)",
    },
    Small: {
      fontSize: "var(--el-font-size-title-small)",
      lineHeight: "var(--el-font-line-height-title-small)",
    },
  },
  Body: {
    Default: {
      fontSize: "var(--el-font-size-small)",
      lineHeight: "var(--el-font-line-height-small)",
    },
    Large: {
      fontSize: "var(--el-font-size-base)",
      lineHeight: "var(--el-font-line-height-base)",
    },
    Small: {
      fontSize: "var(--el-font-size-extra-small)",
      lineHeight: "var(--el-font-line-height-extra-small)",
    },
  },
};

export function Text({
  role = "Body",
  textType = "Default",
  size = "Default",
  weight = "Regular",
  as,
  className,
  style,
  children,
  ...rest
}: TextProps) {
  const tag = as ?? (role === "Title" ? "p" : "p");
  const scale = sizeStyles[role][size];

  return createElement(
    tag,
    {
      className: cn(
        "font-[family-name:var(--el-font-family)] [word-break:break-word]",
        typeClasses[textType],
        weightClasses[weight],
        className,
      ),
      style: {
        fontSize: scale.fontSize,
        lineHeight: scale.lineHeight,
        ...style,
      },
      ...rest,
    },
    children,
  );
}
