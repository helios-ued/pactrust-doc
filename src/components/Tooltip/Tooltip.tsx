import { FloatingPanelArrow } from "@/components/feedback/FloatingPanelArrow";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import {
  TOOLTIP_LAYOUT_CONFIG,
  type TooltipLayout,
  tooltipLayoutToCssSlug,
} from "./tooltipLayouts";
import "./tooltip.css";

export type TooltipEffect = "Light" | "Dark";

export type { TooltipLayout } from "./tooltipLayouts";
export { TOOLTIP_LAYOUTS } from "./tooltipLayouts";

export type TooltipProps = {
  layout?: TooltipLayout;
  content?: ReactNode;
  effect?: TooltipEffect;
  className?: string;
};

function TooltipPanel({ content }: { content: ReactNode }) {
  return <div className="pt-tooltip__panel">{content}</div>;
}

export function Tooltip({
  layout = "Top",
  content = "Tooltip content",
  effect = "Light",
  className,
}: TooltipProps) {
  const cfg = TOOLTIP_LAYOUT_CONFIG[layout];
  const slug = tooltipLayoutToCssSlug(layout);

  const panel = <TooltipPanel content={content} />;
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
        "pt-tooltip",
        `pt-tooltip--${slug}`,
        cfg.axis === "horizontal" && "pt-tooltip--axis-h",
        `pt-tooltip--cross-${cfg.rootCrossAlign}`,
        effect === "Dark" && "pt-tooltip--dark",
        className,
      )}
      role="tooltip"
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
