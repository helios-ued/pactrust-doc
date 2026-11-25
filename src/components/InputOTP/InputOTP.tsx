import { cn } from "@/lib/cn";
import { useRef, useState, type KeyboardEvent } from "react";
import "./input-otp.css";

export type InputOTPType = "Outlined" | "Filled" | "Underlined";
export type InputOTPSize = "Default" | "Large" | "Small";
export type InputOTPState = "Default" | "Hover" | "Focus" | "Disabled";

export type InputOTPProps = {
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  type?: InputOTPType;
  size?: InputOTPSize;
  state?: InputOTPState;
  separator?: boolean;
  className?: string;
};

const sizeClass: Record<InputOTPSize, string> = {
  Default: "pt-input-otp__cell--default",
  Large: "pt-input-otp__cell--large",
  Small: "pt-input-otp__cell--small",
};

export function InputOTP({
  length = 6,
  value: controlled,
  defaultValue = "",
  onChange,
  type = "Outlined",
  size = "Default",
  state = "Default",
  separator = false,
  className,
}: InputOTPProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const [internal, setInternal] = useState(defaultValue);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const valueStr = controlled ?? internal;
  const chars = valueStr.padEnd(length, " ").slice(0, length).split("");
  const isDisabled = state === "Disabled";

  const emit = (next: string) => {
    const v = next.replace(/\s/g, "").slice(0, length);
    if (controlled === undefined) setInternal(v);
    onChange?.(v);
  };

  const setChar = (index: number, ch: string) => {
    const next = [...chars];
    next[index] = ch.slice(-1);
    emit(next.join(""));
    if (ch && index < length - 1) refs.current[index + 1]?.focus();
  };

  const onKey = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !chars[index]?.trim() && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const onPaste = (index: number, text: string) => {
    const digits = text.replace(/\D/g, "").slice(0, length);
    if (!digits) return;
    const next = [...chars];
    for (let i = 0; i < digits.length && index + i < length; i++) {
      next[index + i] = digits[i];
    }
    emit(next.join(""));
    const focusAt = Math.min(index + digits.length, length - 1);
    refs.current[focusAt]?.focus();
  };

  const cellVisualState = (index: number): InputOTPState => {
    if (isDisabled) return "Disabled";
    if (state === "Focus" || state === "Hover") return state;
    if (focusedIndex === index) return "Focus";
    return "Default";
  };

  const cells = Array.from({ length }, (_, i) => i);

  return (
    <div className={cn("pt-input-otp", className)}>
      {cells.map((i) => (
        <span key={i} className="flex items-center gap-2">
          <input
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            maxLength={1}
            disabled={isDisabled}
            value={chars[i]?.trim() ? chars[i] : ""}
            aria-label={`Digit ${i + 1} of ${length}`}
            className={cn(
              "pt-input-otp__cell",
              sizeClass[size],
              type === "Filled" && "pt-input-otp__cell--filled",
              type === "Underlined" && "pt-input-otp__cell--underlined",
              cellVisualState(i) === "Hover" && "pt-input-otp__cell--hover",
              cellVisualState(i) === "Focus" && "pt-input-otp__cell--focus",
              cellVisualState(i) === "Disabled" && "pt-input-otp__cell--disabled",
            )}
            onChange={(e) => setChar(i, e.target.value.replace(/\D/g, ""))}
            onKeyDown={(e) => onKey(i, e)}
            onFocus={() => setFocusedIndex(i)}
            onBlur={() => setFocusedIndex((cur) => (cur === i ? null : cur))}
            onPaste={(e) => {
              e.preventDefault();
              onPaste(i, e.clipboardData.getData("text"));
            }}
          />
          {separator && i === Math.floor(length / 2) - 1 ? (
            <span className="pt-input-otp__sep" aria-hidden>
              -
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
