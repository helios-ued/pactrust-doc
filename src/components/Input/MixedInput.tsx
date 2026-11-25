import { cn } from "@/lib/cn";
import { forwardRef, type InputHTMLAttributes, type ReactNode, useState } from "react";
import type { InputSize, InputState } from "./Input";

export type MixedInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "disabled"
> & {
  state?: InputState;
  size?: InputSize;
  prefix?: ReactNode;
  suffix?: ReactNode;
};

const sizeClasses: Record<InputSize, string> = {
  Default: "min-h-10 text-el-base",
  Large: "min-h-11 text-el-base",
  Small: "min-h-6 text-xs",
};

export const MixedInput = forwardRef<HTMLInputElement, MixedInputProps>(
  (
    { state = "Default", size = "Default", prefix, suffix, className, onFocus, onBlur, ...rest },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const isDisabled = state === "Disabled";
    const border =
      state === "Error"
        ? "border-el-danger"
        : focused
          ? "border-el-primary"
          : "border-el-border hover:border-el-text-placeholder";

    return (
      <div
        className={cn(
          "flex w-full items-center gap-2 overflow-hidden rounded-el-base border bg-el-fill-blank px-pt-12",
          sizeClasses[size],
          border,
          isDisabled && "cursor-not-allowed bg-el-border-light/30 opacity-60",
          className,
        )}
      >
        {prefix ? (
          <span className="shrink-0 text-sm text-el-text-secondary">{prefix}</span>
        ) : null}
        <input
          ref={ref}
          disabled={isDisabled}
          className="min-w-0 flex-1 border-0 bg-transparent py-pt-8 outline-none placeholder:text-el-text-placeholder"
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />
        {suffix ? (
          <span className="shrink-0 text-sm text-el-text-secondary">{suffix}</span>
        ) : null}
      </div>
    );
  },
);
MixedInput.displayName = "MixedInput";
