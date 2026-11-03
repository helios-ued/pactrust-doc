import {
  forwardRef,
  type InputHTMLAttributes,
  useState,
} from "react";
import { cn } from "@/lib/cn";

/** Figma Input — docs/COMPONENTS.md */
export type InputState =
  | "Default"
  | "Hover"
  | "Focus"
  | "Error"
  | "Disabled";

export type InputSize = "Default" | "Large" | "Small";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "disabled"
> & {
  state?: InputState;
  size?: InputSize;
  input?: boolean;
};

const sizeClasses: Record<InputSize, string> = {
  Default: "min-h-10 px-pt-12 py-pt-8 text-el-base leading-el-base",
  Large: "min-h-11 px-pt-3xl py-pt-8 text-el-base leading-el-base",
  Small: "min-h-6 px-pt-8 py-pt-4 text-el-base leading-el-base",
};

function stateClasses(state: InputState): string {
  switch (state) {
    case "Error":
      return "border-el-danger focus-within:border-el-danger";
    case "Disabled":
      return "cursor-not-allowed border-el-border-light bg-el-border-light/30 text-el-text-disabled";
    case "Focus":
      return "border-el-primary shadow-[var(--el-box-shadow-lighter)]";
    default:
      return "border-el-border hover:border-el-text-placeholder focus-within:border-el-primary";
  }
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      state = "Default",
      size = "Default",
      className,
      onFocus,
      onBlur,
      readOnly,
      ...rest
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const isDisabled = state === "Disabled";
    const visualState = focused && state === "Default" ? "Focus" : state;

    return (
      <div
        className={cn(
          "flex w-full items-center gap-pt-8 overflow-hidden rounded-el-base border bg-el-fill-blank",
          sizeClasses[size],
          stateClasses(visualState),
          className,
        )}
      >
        <input
          ref={ref}
          readOnly={readOnly ?? isDisabled}
          disabled={isDisabled}
          className={cn(
            "min-w-0 flex-1 border-0 bg-transparent font-[family-name:var(--el-font-family)] font-[var(--el-font-weight-regular)] text-el-text-primary outline-none",
            "placeholder:text-el-text-placeholder",
            isDisabled && "cursor-not-allowed",
          )}
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
      </div>
    );
  },
);

Input.displayName = "Input";
