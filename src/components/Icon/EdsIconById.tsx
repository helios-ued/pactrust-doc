import { cn } from "@/lib/cn";
import { EdsIcon } from "./EdsIcon";
import { resolveEdsIconSvg } from "./figmaIconCatalog";

export type EdsIconByIdProps = {
  id: string;
  size?: number;
  className?: string;
  label?: string;
};

/** Figma Icon 页 · PacsTrust stroke 图标（figmaIconCatalog eds-*） */
export function EdsIconById({ id, size = 16, className, label }: EdsIconByIdProps) {
  const svg = resolveEdsIconSvg(id);
  return (
    <EdsIcon
      svg={svg ?? ""}
      size={size}
      className={cn("text-current", className)}
      label={label}
    />
  );
}

/** 常用 EDS id（与 Figma 组件实例一致） */
export const PT_EDS_ICONS = {
  eyeOpen: "eds-action-eye-open",
  eyeHidden: "eds-action-eye-hidden",
  chevronDown: "eds-arrow-chevron-down",
  chevronRight: "eds-arrow-chevron-right",
} as const;
