import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import type { FigmaLayoutVariant } from "./layoutFrameSpecs";
import { LAYOUT_FRAME_SPECS } from "./layoutFrameSpecs";
import "./page-layout-card.css";

export type PageLayoutCardProps = {
  variant: FigmaLayoutVariant;
  /** Layout 01–03 · Global-header；Layout-04 用 pageBar */
  header?: ReactNode;
  children?: ReactNode;
  className?: string;
  /** Figma `8661:44880` 占位文案 */
  placeholder?: boolean;
  placeholderText?: string;
  /** Figma Layout-04 · `8745:2606` Page Layout */
  pageFrame?: boolean;
  /** Layout-04 标题区；`false` 隐藏（C1 等由业务面板自带标题） */
  pageBarTitle?: string | false;
  /** 覆盖 `layoutFrameSpecs` 的 Page Body 内边距（Figma A1：16/16/18） */
  contentPadding?: string;
  /** A2 等：自定义 Page Layout Header（替代默认标题条） */
  pageBar?: ReactNode;
};

/** Figma Main 内层 `Layout` / `Page Layout` 帧 */
export function PageLayoutCard({
  variant,
  header,
  children,
  className,
  placeholder,
  placeholderText = "内容区域",
  pageFrame,
  pageBarTitle,
  contentPadding,
  pageBar,
}: PageLayoutCardProps) {
  const spec = LAYOUT_FRAME_SPECS[variant];
  const bodyPadding = contentPadding ?? spec.contentPadding;
  const usePageFrame = pageFrame ?? spec.frameKind === "global-plus-page";
  const showPageBar = pageBarTitle !== false;
  const barTitle =
    typeof pageBarTitle === "string" ? pageBarTitle : spec.pageBarTitle ?? "标题区域";

  const canvas = (
    <div className="pt-page-layout-card__canvas">
      {placeholder && !children ? (
        <p className="pt-page-layout-card__placeholder">{placeholderText}</p>
      ) : (
        children
      )}
    </div>
  );

  if (usePageFrame) {
    return (
      <section
        className={cn(
          "pt-page-layout-card",
          "pt-page-layout-card--page-frame",
          !showPageBar && "pt-page-layout-card--no-page-bar",
          className,
        )}
        data-node-id={spec.layoutNodeId}
      >
        {pageBar ??
          (showPageBar ? (
            <header className="pt-page-layout-card__page-bar">{barTitle}</header>
          ) : null)}
        <div
          className="pt-page-layout-card__content pt-page-layout-card__content--page-frame"
          style={{ padding: bodyPadding }}
        >
          {canvas}
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "pt-page-layout-card",
        spec.layoutRounded && "pt-page-layout-card--rounded",
        className,
      )}
      data-node-id={spec.layoutNodeId}
    >
      {header}
      <div
        className="pt-page-layout-card__content"
        style={{ padding: spec.contentPadding }}
      >
        {canvas}
      </div>
    </section>
  );
}
