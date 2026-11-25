import type { ReactNode } from "react";
import type { ShowcaseDemoProps } from "../demos/types";
import type { PropRow } from "../ui/PropsTable";

export type ShowcaseDemoFn = (props?: ShowcaseDemoProps) => ReactNode;

export type SlotDoc = { name: string; description: string };

export type DocSubVariant = {
  id: string;
  label: string;
  description?: string;
  variants?: string[];
  Demo?: ShowcaseDemoFn;
  codeTemplate?: string;
  props?: PropRow[];
};

export type ComponentDoc = {
  slug: string;
  title: string;
  subtitle: string;
  figmaNodeId: string;
  elementMapping: string;
  props: PropRow[];
  slots?: SlotDoc[];
  variants?: string[];
  /** 至少一个可交互预览（非占位） */
  interactive?: boolean;
  Demo?: ShowcaseDemoFn;
  codeTemplate?: string;
  subVariants?: DocSubVariant[];
};
