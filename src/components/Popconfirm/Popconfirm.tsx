import { EpIconByName } from "@/components/Icon/EpIconByName";
import { FloatingPanelArrow } from "@/components/feedback/FloatingPanelArrow";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import {
  POPCONFIRM_LAYOUT_CONFIG,
  type PopconfirmLayout,
  layoutToCssSlug,
} from "./popconfirmLayouts";
import "./popconfirm.css";

export type { PopconfirmLayout } from "./popconfirmLayouts";
export { POPCONFIRM_LAYOUTS } from "./popconfirmLayouts";

export type PopconfirmProps = {
  layout?: PopconfirmLayout;
  title?: ReactNode;
  className?: string;
};

function PopconfirmPanel({ title }: { title: ReactNode }) {
  return (
    <div className="pt-popconfirm__panel">
      <div className="pt-popconfirm__text-row">
        <EpIconByName name="QuestionFilled" size={16} className="pt-popconfirm__status-icon" />
        <span className="pt-popconfirm__title">{title}</span>
      </div>
      <div className="pt-popconfirm__actions">
        <button type="button" className="pt-popconfirm__no">
          No
        </button>
        <button type="button" className="pt-popconfirm__yes">
          Yes
        </button>
      </div>
    </div>
  );
}

export function Popconfirm({
  layout = "Up-center",
  title = "Are you sure to delete this?",
  className,
}: PopconfirmProps) {
  const cfg = POPCONFIRM_LAYOUT_CONFIG[layout];
  const slug = layoutToCssSlug(layout);

  const panel = <PopconfirmPanel title={title} />;
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
        "pt-popconfirm",
        `pt-popconfirm--${slug}`,
        cfg.axis === "horizontal" && "pt-popconfirm--axis-h",
        `pt-popconfirm--cross-${cfg.rootCrossAlign}`,
        className,
      )}
      role="dialog"
      aria-label="Popconfirm"
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
