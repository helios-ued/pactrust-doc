import type { ReactNode } from "react";

export type ShowcaseDemoSplit = {
  customize: ReactNode;
  preview: ReactNode;
};

/** 由 ComponentShowcasePage 单次挂载 Demo，经 splitRender 拆分上预览 / 下定制 */
export type ShowcaseDemoProps = {
  part?: "preview" | "customize" | "all";
  splitRender?: (nodes: ShowcaseDemoSplit) => ReactNode;
  /** 定制区变更时上报 Element Plus（Vue 3）示例代码 */
  reportElementPlusCode?: (code: string) => void;
};
