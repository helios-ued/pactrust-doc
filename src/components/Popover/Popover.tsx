import { FloatingPanelArrow } from "@/components/feedback/FloatingPanelArrow";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import {
  POPOVER_LAYOUT_CONFIG,
  type PopoverLayout,
  popoverLayoutToCssSlug,
} from "./popoverLayouts";
import "./popover.css";

export type { PopoverLayout } from "./popoverLayouts";
export { POPOVER_LAYOUTS } from "./popoverLayouts";

export type PopoverProps = {
  layout?: PopoverLayout;
  title?: ReactNode;
  showTitle?: boolean;
  children?: ReactNode;
  className?: string;
};

const DEFAULT_BODY =
  "this is content, this is content, this is content";

function PopoverPanel({
  title,
  showTitle,
  children,
}: {
  title: ReactNode;
  showTitle: boolean;
  children: ReactNode;
}) {
  return (
    <div className="pt-popover__panel">
      {showTitle ? <div className="pt-popover__title">{title}</div> : null}
      <div className="pt-popover__body">{children}</div>
    </div>
  );
}

export function Popover({
  layout = "up-middle",
  title = "Title",
  showTitle = true,
  children = DEFAULT_BODY,
  className,
}: PopoverProps) {
  const cfg = POPOVER_LAYOUT_CONFIG[layout];
  const slug = popoverLayoutToCssSlug(layout);

  const panel = (
    <PopoverPanel title={title} showTitle={showTitle}>
      {children}
    </PopoverPanel>
  );
  const arrow = (
    <FloatingPanelArrow
      axis={cfg.axis}
      arrowDir={cfg.arrowDir}
      arrowAlign={cfg.arrowAlign}
    />
  );

  return (
    <div
      className={cn(
        "pt-popover",
        `pt-popover--${slug}`,
        cfg.axis === "horizontal" && "pt-popover--axis-h",
        `pt-popover--cross-${cfg.rootCrossAlign}`,
        className,
      )}
      role="dialog"
      aria-label="Popover"
    >
      {cfg.panelBeforeArrow ? (
        <>
          {panel}
          {arrow}
        </>
      ) : (
        <>
          {arrow}
          {panel}
        </>
      )}
    </div>
  );
}
