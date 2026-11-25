import { cn } from "@/lib/cn";

/** 浮层箭头 · 纵 14×8 / 横 8×14 四套原生路径（不旋转，避免左右不一致） */
export const FEEDBACK_ARROW_W = 14;
export const FEEDBACK_ARROW_H = 8;

export type FeedbackArrowDir = "down" | "up" | "right" | "left";

const GEOMETRY: Record<
  FeedbackArrowDir,
  { w: number; h: number; fill: string; stroke: string }
> = {
  down: {
    w: FEEDBACK_ARROW_W,
    h: FEEDBACK_ARROW_H,
    fill: "7,8 0,0 14,0",
    stroke: "M0.5,0.5 L7,7.5 M7,7.5 L13.5,0.5",
  },
  up: {
    w: FEEDBACK_ARROW_W,
    h: FEEDBACK_ARROW_H,
    fill: "7,0 0,8 14,8",
    stroke: "M0.5,7.5 L7,0.5 M7,0.5 L13.5,7.5",
  },
  right: {
    w: FEEDBACK_ARROW_H,
    h: FEEDBACK_ARROW_W,
    fill: "8,7 0,0 0,14",
    stroke: "M0.5,0.5 L7.5,7 M7.5,7 L0.5,13.5",
  },
  left: {
    w: FEEDBACK_ARROW_H,
    h: FEEDBACK_ARROW_W,
    fill: "0,7 8,0 8,14",
    stroke: "M7.5,0.5 L0.5,7 M0.5,7 L7.5,13.5",
  },
};

export function FeedbackArrowGraphic({ dir }: { dir: FeedbackArrowDir }) {
  const g = GEOMETRY[dir];
  return (
    <span className={cn("pt-floating__arrow-shape", `pt-floating__arrow-shape--${dir}`)}>
      <svg
        width={g.w}
        height={g.h}
        viewBox={`0 0 ${g.w} ${g.h}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <polygon className="pt-floating__arrow-fill" points={g.fill} />
        <path className="pt-floating__arrow-stroke" d={g.stroke} />
      </svg>
    </span>
  );
}
