import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useState, type MouseEvent } from "react";
import "./rate.css";

export type RateProps = {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  max?: number;
  /** Figma Half ON/OFF */
  allowHalf?: boolean;
  disabled?: boolean;
  /** Figma showCaptions */
  showScore?: boolean;
  texts?: string[];
  className?: string;
};

/** Figma Rate：≤2 为灰蓝填充，>2 为 Warning 橙 */
function fillColorForValue(score: number): string {
  return score > 2
    ? "var(--el-color-warning)"
    : "var(--el-color-info-light-3)";
}

function defaultCaption(score: number, max: number): string {
  if (score <= 0) return "Captions";
  return `${score} / ${max}`;
}

type StarState = "empty" | "half" | "full";

function starState(index: number, display: number): StarState {
  const n = index + 1;
  if (display >= n) return "full";
  if (display >= n - 0.5) return "half";
  return "empty";
}

export function Rate({
  value: controlled,
  defaultValue = 0,
  onChange,
  max = 5,
  allowHalf = false,
  disabled = false,
  showScore = false,
  texts,
  className,
}: RateProps) {
  const [internal, setInternal] = useState(defaultValue);
  const [hover, setHover] = useState<number | null>(null);
  const value = controlled ?? internal;
  const display = hover ?? value;
  const fillColor = fillColorForValue(display);

  const setValue = (next: number) => {
    const clamped = Math.max(0, Math.min(max, next));
    if (controlled === undefined) setInternal(clamped);
    onChange?.(clamped);
  };

  const onStarClick = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const isLeftHalf = e.clientX - rect.left < rect.width / 2;
    if (allowHalf) setValue(index + (isLeftHalf ? 0.5 : 1));
    else setValue(index + 1);
  };

  const onStarMove = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const isLeftHalf = e.clientX - rect.left < rect.width / 2;
    if (allowHalf) setHover(index + (isLeftHalf ? 0.5 : 1));
    else setHover(index + 1);
  };

  const caption =
    texts?.[Math.ceil(display) - 1] ??
    texts?.[0] ??
    defaultCaption(display, max);

  return (
    <div
      className={cn("pt-rate", disabled && "pt-rate--disabled", className)}
      style={{ ["--pt-rate-fill-color" as string]: fillColor }}
      role="slider"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      onMouseLeave={() => setHover(null)}
    >
      {Array.from({ length: max }, (_, index) => {
        const state = starState(index, display);
        return (
          <button
            key={index}
            type="button"
            disabled={disabled}
            className="pt-rate__star"
            aria-label={`${index + 1} 星`}
            onMouseMove={(e) => onStarMove(e, index)}
            onClick={(e) => onStarClick(e, index)}
          >
            {state === "full" ? (
              <EpIconByName
                name="StarFilled"
                size={16}
                className="pt-rate__star-icon pt-rate__star-icon--filled"
              />
            ) : state === "half" ? (
              <>
                <EpIconByName name="Star" size={16} className="pt-rate__star-icon" />
                <span className="pt-rate__star-half" aria-hidden>
                  <EpIconByName
                    name="StarFilled"
                    size={16}
                    className="pt-rate__star-icon pt-rate__star-icon--filled"
                  />
                </span>
              </>
            ) : (
              <EpIconByName name="Star" size={16} className="pt-rate__star-icon" />
            )}
          </button>
        );
      })}
      {showScore ? <span className="pt-rate__caption">{caption}</span> : null}
    </div>
  );
}
