import { BasePanel } from "@/components/Layout/BasePanel";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import type { FigmaLayoutVariant } from "./layoutFrameSpecs";
import { LAYOUT_FRAME_SPECS } from "./layoutFrameSpecs";
import "./page-layout-card.css";

export type PageLayoutCardProps = {
  variant: FigmaLayoutVariant;
  /** Layout 01–03 · Global-header；Layout-04 标题在 BasePanel 槽内 */
  header?: ReactNode;
  children?: ReactNode;
  className?: string;
  placeholder?: boolean;
  placeholderText?: string;
  /** Figma Layout-04 · `8745:2603` */
  pageFrame?: boolean;
  pageBarTitle?: string | false;
  contentPadding?: string;
  pageBar?: ReactNode;
};

/** Figma Main 内层 `Layout` / `8745:2603` + BasePanel */
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
  const usePageFrame = pageFrame ?? spec.frameKind === "global-plus-page";
  const showPageBar = pageBarTitle !== false;
  const barTitle =
    typeof pageBarTitle === "string" ? pageBarTitle : spec.pageBarTitle ?? "标题区域";
  const bodyPadding = contentPadding ?? spec.contentPadding;

  const pageBarNode =
    pageBar ??
    (showPageBar ? <header className="pt-page-layout-card__page-bar">{barTitle}</header> : null);

  if (usePageFrame && variant === "layout-04") {
    return (
      <section
        className={cn("pt-page-layout-card", "pt-page-layout-card--layout-04-main", className)}
        data-node-id={spec.layoutNodeId}
      >
        <BasePanel
          padding={spec.basePanelPadding}
          slotPadding={spec.basePanelSlotPadding}
          placeholder={false}
          className="pt-page-layout-card__base-panel"
        >
          {pageBarNode}
          {placeholder && !children ? (
            <div className="pt-page-layout-card__canvas pt-page-layout-card__canvas--fill">
              <p className="pt-page-layout-card__placeholder">{placeholderText}</p>
            </div>
          ) : (
            <div
              className="pt-page-layout-card__canvas pt-page-layout-card__canvas--fill"
              style={bodyPadding ? { padding: bodyPadding } : undefined}
            >
              {children}
            </div>
          )}
        </BasePanel>
      </section>
    );
  }

  const canvas = (
    <BasePanel
      padding={spec.basePanelPadding}
      slotPadding={spec.basePanelSlotPadding}
      placeholder={placeholder && !children}
      placeholderText={placeholderText}
      className="pt-page-layout-card__base-panel"
    >
      {children ? (
        <div
          className="pt-page-layout-card__canvas"
          style={bodyPadding ? { padding: bodyPadding } : undefined}
        >
          {children}
        </div>
      ) : null}
    </BasePanel>
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
        {pageBarNode}
        <div className="pt-page-layout-card__content pt-page-layout-card__content--page-frame">
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
      <div className="pt-page-layout-card__content">{canvas}</div>
    </section>
  );
}