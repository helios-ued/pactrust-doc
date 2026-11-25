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

    const textColors: Record<ButtonType, string> = {
      Default: "text-el-text-primary hover:text-el-primary",
      Primary: "text-el-primary hover:opacity-80",
      Success: "text-[color:var(--el-color-success)] hover:opacity-80",
      Warning: "text-[color:var(--el-color-warning)] hover:opacity-80",
      Danger: "text-el-danger hover:opacity-80",
      Info: "text-el-text-regular hover:text-el-text-primary",
    };

    const plainColors: Record<ButtonType, string> = {
      Default: "text-el-text-primary hover:bg-el-border-light/50 hover:text-el-primary",
      Primary: "text-el-primary hover:bg-[color:var(--el-color-primary-light-9)]",
      Success:
        "text-[color:var(--el-color-success)] hover:bg-[color:var(--el-color-success)]/10",
      Warning:
        "text-[color:var(--el-color-warning)] hover:bg-[color:var(--el-color-warning)]/10",
      Danger: "text-el-danger hover:bg-el-danger/10",
      Info: "text-el-text-regular hover:bg-el-border-light/40",
    };

    const color = plain ? plainColors[buttonType] : textColors[buttonType];

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-pt-8 rounded-el-base px-pt-8 py-pt-4",
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
