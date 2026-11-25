import { cn } from "@/lib/cn";
import {
  useCallback,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

export type SplitterProps = {
  direction?: "horizontal" | "vertical";
  defaultSize?: number;
  min?: number;
  max?: number;
  first: ReactNode;
  second: ReactNode;
  className?: string;
};

export function Splitter({
  direction = "horizontal",
  defaultSize = 50,
  min = 20,
  max = 80,
  first,
  second,
  className,
}: SplitterProps) {
  const [ratio, setRatio] = useState(defaultSize);
  const rootRef = useRef<HTMLDivElement>(null);

  const onPointerDown = useCallback(
    (e: ReactPointerEvent) => {
      e.preventDefault();
      const root = rootRef.current;
      if (!root) return;
      const rect = root.getBoundingClientRect();
      const move = (ev: globalThis.PointerEvent) => {
        const pct =
          direction === "horizontal"
            ? ((ev.clientX - rect.left) / rect.width) * 100
            : ((ev.clientY - rect.top) / rect.height) * 100;
        setRatio(Math.min(max, Math.max(min, pct)));
      };
      const up = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    },
    [direction, max, min],
  );

  const isH = direction === "horizontal";

  return (
    <div
      ref={rootRef}
      className={cn(
        "flex h-48 w-full overflow-hidden rounded-el-base border border-el-border-light",
        isH ? "flex-row" : "flex-col",
        className,
      )}
    >
      <div
        className="overflow-auto bg-[color:var(--el-color-primary-light-9)] p-3 text-sm text-el-text-primary"
        style={isH ? { width: `${ratio}%` } : { height: `${ratio}%` }}
      >
        {first}
      </div>
      <div
        role="separator"
        aria-orientation={isH ? "vertical" : "horizontal"}
        className={cn(
          "shrink-0 bg-el-border-light hover:bg-el-primary/30 active:bg-el-primary/50",
          isH ? "w-1 cursor-col-resize" : "h-1 cursor-row-resize",
        )}
        onPointerDown={onPointerDown}
      />
      <div className="min-h-0 min-w-0 flex-1 overflow-auto p-3 text-sm text-el-text-regular">
        {second}
      </div>
    </div>
  );
}
