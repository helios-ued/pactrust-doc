import { cn } from "@/lib/cn";
import { FeedbackArrowGraphic, type FeedbackArrowDir } from "./FeedbackArrowGraphic";

export function FloatingPanelArrow({
  axis,
  arrowDir,
  arrowAlign,
}: {
  axis: "vertical" | "horizontal";
  arrowDir: FeedbackArrowDir;
  arrowAlign: "start" | "center" | "end";
}) {
  const shape = <FeedbackArrowGraphic dir={arrowDir} />;

  if (axis === "vertical") {
    return (
      <div
        className={cn("pt-floating__arrow-row", `pt-floating__arrow-row--${arrowAlign}`)}
        aria-hidden
      >
        {shape}
      </div>
    );
  }

  return (
    <div
      className={cn("pt-floating__arrow-rail", `pt-floating__arrow-rail--${arrowAlign}`)}
      aria-hidden
    >
      <span className="pt-floating__arrow-rail-slot">{shape}</span>
    </div>
  );
}
