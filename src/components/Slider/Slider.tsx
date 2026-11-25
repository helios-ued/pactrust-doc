import { cn } from "@/lib/cn";
import {
  useCallback,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import "./slider.css";

export type SliderVisualState = "Default" | "Hover" | "Disable";

export type SliderProps = {
  value?: number;
  defaultValue?: number;
  rangeValue?: [number, number];
  defaultRangeValue?: [number, number];
  onChange?: (value: number) => void;
  onRangeChange?: (value: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Figma Steps */
  showSteps?: boolean;
  /** Figma Range */
  range?: boolean;
  disabled?: boolean;
  /** Figma State（Showcase 可强制 Hover 样式） */
  visualState?: SliderVisualState;
  className?: string;
};

type DragTarget = "single" | "start" | "end" | null;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function snapToStep(raw: number, min: number, max: number, step: number) {
  const stepped = min + Math.round((raw - min) / step) * step;
  return clamp(stepped, min, max);
}

function toPercent(value: number, min: number, max: number) {
  if (max <= min) return 0;
  return ((value - min) / (max - min)) * 100;
}

export function Slider({
  value: controlledSingle,
  defaultValue = 56,
  rangeValue: controlledRange,
  defaultRangeValue = [30, 70],
  onChange,
  onRangeChange,
  min = 0,
  max = 100,
  step = 1,
  showSteps = false,
  range = false,
  disabled = false,
  visualState = "Default",
  className,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [internalSingle, setInternalSingle] = useState(defaultValue);
  const [internalRange, setInternalRange] = useState<[number, number]>(defaultRangeValue);
  const [dragging, setDragging] = useState<DragTarget>(null);

  const isDisabled = disabled || visualState === "Disable";
  const showHoverHandle = visualState === "Hover" || dragging !== null;
  const showTooltip =
    !isDisabled &&
    !range &&
    (visualState === "Hover" || dragging === "single");

  const singleValue = controlledSingle ?? internalSingle;
  const rangeValue = controlledRange ?? internalRange;
  const [low, high] = range
    ? [Math.min(rangeValue[0], rangeValue[1]), Math.max(rangeValue[0], rangeValue[1])]
    : [min, singleValue];

  const stopCount = Math.floor((max - min) / step) + 1;

  const setSingle = useCallback(
    (next: number) => {
      const v = snapToStep(next, min, max, step);
      if (controlledSingle === undefined) setInternalSingle(v);
      onChange?.(v);
    },
    [controlledSingle, max, min, onChange, step],
  );

  const setRange = useCallback(
    (next: [number, number], active: DragTarget = null) => {
      let a = snapToStep(next[0], min, max, step);
      let b = snapToStep(next[1], min, max, step);
      if (a > b) [a, b] = [b, a];
      if (b - a < step) {
        if (active === "start") a = clamp(b - step, min, max);
        else b = clamp(a + step, min, max);
      }
      a = clamp(a, min, max);
      b = clamp(b, min, max);
      if (a > b) [a, b] = [b, a];
      const pair: [number, number] = [a, b];
      if (controlledRange === undefined) setInternalRange(pair);
      onRangeChange?.(pair);
    },
    [controlledRange, max, min, onRangeChange, step],
  );

  const valueFromPointer = useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el) return min;
      const rect = el.getBoundingClientRect();
      const inset = showSteps ? 6 : 0;
      const width = rect.width - inset * 2;
      const x = clamp(clientX - rect.left - inset, 0, width);
      const ratio = width > 0 ? x / width : 0;
      return snapToStep(min + ratio * (max - min), min, max, step);
    },
    [max, min, showSteps, step],
  );

  const onTrackPointer = (clientX: number, target: DragTarget) => {
    if (isDisabled) return;
    const v = valueFromPointer(clientX);
    if (!range) {
      setSingle(v);
      return;
    }
    if (target === "start") setRange([v, high], "start");
    else if (target === "end") setRange([low, v], "end");
    else {
      const distStart = Math.abs(v - low);
      const distEnd = Math.abs(v - high);
      if (distStart <= distEnd) setRange([v, high], "start");
      else setRange([low, v], "end");
    }
  };

  const onPointerDown =
    (target: DragTarget) => (e: ReactPointerEvent<HTMLDivElement>) => {
      if (isDisabled) return;
      e.preventDefault();
      setDragging(target);
      onTrackPointer(e.clientX, target);
      e.currentTarget.setPointerCapture(e.pointerId);
    };

  const onPointerMove = (target: DragTarget) => (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragging !== target || isDisabled) return;
    onTrackPointer(e.clientX, target);
  };

  const onPointerUp = (target: DragTarget) => (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragging === target) setDragging(null);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* released */
    }
  };

  const labelId = useId();
  const singlePct = toPercent(singleValue, min, max);
  const lowPct = toPercent(low, min, max);
  const highPct = toPercent(high, min, max);

  const onTrackBackgroundDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    if ((e.target as HTMLElement).closest(".pt-slider__handle-wrap")) return;
    const target: DragTarget = range ? null : "single";
    onPointerDown(target)(e);
  };

  const renderHandle = (
    target: DragTarget,
    percent: number,
    ariaValue: number,
    withTooltip = false,
  ) => (
    <div
      className={cn(
        "pt-slider__handle-wrap",
        dragging === target && "pt-slider__handle-wrap--dragging",
      )}
      style={{ left: `${percent}%` }}
    >
      {showTooltip && withTooltip ? (
        <div className="pt-slider__tooltip" role="tooltip">
          <span className="pt-slider__tooltip-content">{ariaValue}</span>
          <span className="pt-slider__tooltip-arrow" aria-hidden />
        </div>
      ) : null}
      <div
        className="pt-slider__handle"
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={ariaValue}
        aria-labelledby={labelId}
        onPointerDown={onPointerDown(target)}
        onPointerMove={onPointerMove(target)}
        onPointerUp={onPointerUp(target)}
        onPointerCancel={onPointerUp(target)}
      >
        <span className="pt-slider__hit" aria-hidden />
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "pt-slider",
        showSteps && "pt-slider--steps",
        range && "pt-slider--range",
        showSteps && range && "pt-slider--with-marks",
        showHoverHandle && "pt-slider--hover-handle",
        isDisabled && "pt-slider--disabled",
        className,
      )}
    >
      <span id={labelId} className="sr-only">
        Slider
      </span>
      <div
        ref={trackRef}
        className="pt-slider__track-wrap"
        onPointerDown={onTrackBackgroundDown}
        onPointerMove={(e) => {
          if (!dragging || isDisabled) return;
          onTrackPointer(e.clientX, dragging);
        }}
        onPointerUp={() => setDragging(null)}
        onPointerCancel={() => setDragging(null)}
      >
        <div className="pt-slider__rail" aria-hidden />
        {showSteps ? (
          <div className="pt-slider__stops" aria-hidden>
            {Array.from({ length: stopCount }, (_, i) => (
              <span key={i} className="pt-slider__stop" />
            ))}
          </div>
        ) : null}

        {!range ? (
          <div
            className="pt-slider__bar"
            style={{ width: `${singlePct}%` }}
            aria-hidden
          />
        ) : (
          <div
            className="pt-slider__bar"
            style={{ left: `${lowPct}%`, width: `${highPct - lowPct}%` }}
            aria-hidden
          />
        )}

        {!range ? (
          renderHandle("single", singlePct, Math.round(singleValue), true)
        ) : (
          <>
            {renderHandle("start", lowPct, low)}
            {renderHandle("end", highPct, high)}
          </>
        )}
      </div>

      {showSteps && range ? (
        <div className="pt-slider__marks" aria-hidden>
          {Array.from({ length: stopCount }, (_, i) => {
            const mark = min + i * step;
            const active = mark >= low && mark <= high;
            return (
              <span
                key={mark}
                className={cn("pt-slider__mark", active && "pt-slider__mark--active")}
              >
                {mark}
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
