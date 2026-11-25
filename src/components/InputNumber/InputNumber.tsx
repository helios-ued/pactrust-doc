import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useState, type ReactNode } from "react";
import "./input-number.css";

export type InputNumberSize = "Default" | "Large" | "Small";
export type InputNumberState = "Default" | "Hover" | "Focus" | "Disabled";
export type InputNumberPosition = "Default" | "Right";

export type InputNumberProps = {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: InputNumberSize;
  state?: InputNumberState;
  position?: InputNumberPosition;
  prefix?: boolean;
  suffix?: boolean;
  prefixSlot?: ReactNode;
  suffixSlot?: ReactNode;
  className?: string;
};

const sizeClass: Record<InputNumberSize, string> = {
  Default: "pt-input-number--default",
  Large: "pt-input-number--large",
  Small: "pt-input-number--small",
};

const stepIconSize: Record<InputNumberSize, number> = {
  Default: 16,
  Large: 16,
  Small: 14,
};

const rightStepIconSize: Record<InputNumberSize, number> = {
  Default: 14,
  Large: 14,
  Small: 12,
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function InputNumber({
  value: controlled,
  defaultValue = 1,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  size = "Default",
  state = "Default",
  position = "Default",
  prefix = false,
  suffix = false,
  prefixSlot,
  suffixSlot,
  className,
}: InputNumberProps) {
  const [internal, setInternal] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const value = controlled ?? internal;
  const isDisabled = state === "Disabled";

  let visualState = state;
  if (focused && (state === "Default" || state === "Hover")) {
    visualState = "Focus";
  }

  const setValue = (n: number) => {
    if (isDisabled) return;
    const next = clamp(n, min, max);
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
  };

  const prefixNode =
    prefixSlot ?? (prefix ? <span className="pt-input-number__affix">￥</span> : null);
  const suffixNode =
    suffixSlot ?? (suffix ? <span className="pt-input-number__affix">RMB</span> : null);

  const icon = stepIconSize[size];
  const rightIcon = rightStepIconSize[size];

  return (
    <div
      className={cn(
        "pt-input-number",
        sizeClass[size],
        visualState === "Hover" && "pt-input-number--hover",
        visualState === "Focus" && "pt-input-number--focus",
        isDisabled && "pt-input-number--disabled",
        className,
      )}
    >
      {position === "Default" ? (
        <button
          type="button"
          disabled={isDisabled}
          className="pt-input-number__step pt-input-number__step--left"
          aria-label="Decrease"
          onClick={() => setValue(value - step)}
        >
          <EpIconByName name="Minus" size={icon} />
        </button>
      ) : null}

      <div
        className={cn(
          "pt-input-number__content",
          position === "Right" && "pt-input-number__content--pad-left",
        )}
      >
        {prefixNode}
        <input
          type="number"
          disabled={isDisabled}
          value={Number.isFinite(value) ? value : ""}
          min={min}
          max={max}
          step={step}
          className="pt-input-number__input"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        {suffixNode}
      </div>

      {position === "Default" ? (
        <button
          type="button"
          disabled={isDisabled}
          className="pt-input-number__step pt-input-number__step--right"
          aria-label="Increase"
          onClick={() => setValue(value + step)}
        >
          <EpIconByName name="Plus" size={icon} />
        </button>
      ) : (
        <div className="pt-input-number__step-group">
          <button
            type="button"
            disabled={isDisabled}
            aria-label="Increase"
            onClick={() => setValue(value + step)}
          >
            <EpIconByName name="ArrowUp" size={rightIcon} />
          </button>
          <button
            type="button"
            disabled={isDisabled}
            aria-label="Decrease"
            onClick={() => setValue(value - step)}
          >
            <EpIconByName name="ArrowDown" size={rightIcon} />
          </button>
        </div>
      )}
    </div>
  );
}
