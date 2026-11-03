import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { ButtonSize, ButtonType } from "./Button";

/** Figma Text-button — same variant dims as Button */
export type TextButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  buttonType?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
};

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      buttonType = "Default",
      size = "Default",
      plain = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      type = "button",
      ...rest
    },
    ref,
  ) => {
    const height =
      size === "Large"
        ? "min-h-10"
        : size === "Small"
          ? "min-h-6"
          : "min-h-8";

    const color =
      buttonType === "Primary" || plain
        ? "text-el-primary hover:opacity-80"
        : "text-el-text-primary hover:text-el-primary";

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-pt-8 rounded-el-base px-pt-0 py-pt-4",
          "font-[family-name:var(--el-font-family)] font-[var(--el-font-weight-primary)] text-el-base leading-el-base",
          "disabled:cursor-not-allowed disabled:opacity-50",
          height,
          color,
          className,
        )}
        {...rest}
      >
        {leftIcon ? <span className="flex shrink-0">{leftIcon}</span> : null}
        {children}
        {rightIcon ? <span className="flex shrink-0">{rightIcon}</span> : null}
      </button>
    );
  },
);

TextButton.displayName = "TextButton";
