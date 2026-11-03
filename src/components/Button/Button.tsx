import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

/** Figma Button — docs/COMPONENTS.md */
export type ButtonType =
  | "Default"
  | "Primary"
  | "Success"
  | "Warning"
  | "Danger"
  | "Info";

export type ButtonSize = "Default" | "Large" | "Small";

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  buttonType?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  type?: "button" | "submit" | "reset";
};

const sizeClasses: Record<ButtonSize, string> = {
  Default: "min-h-10 px-pt-12 py-pt-8 text-el-base leading-el-base",
  Large: "min-h-11 px-pt-3xl py-pt-8 text-el-base leading-el-base",
  Small: "min-h-6 px-pt-8 py-pt-4 text-el-base leading-el-base",
};

const variantClasses = (
  buttonType: ButtonType,
  plain: boolean,
): string => {
  if (plain) {
    const map: Record<ButtonType, string> = {
      Default:
        "border border-el-border bg-el-fill-blank text-el-text-primary hover:border-el-primary hover:text-el-primary",
      Primary:
        "border border-el-primary bg-el-primary/10 text-el-primary hover:bg-el-primary/20",
      Success:
        "border border-[color:var(--el-color-success)] bg-[color:var(--el-color-success)]/10 text-[color:var(--el-color-success)]",
      Warning:
        "border border-[color:var(--el-color-warning)] bg-[color:var(--el-color-warning)]/10 text-[color:var(--el-color-warning)]",
      Danger: "border border-el-danger bg-el-danger/10 text-el-danger",
      Info: "border border-el-text-placeholder bg-el-text-placeholder/10 text-el-text-regular",
    };
    return map[buttonType];
  }

  const map: Record<ButtonType, string> = {
    Default:
      "border border-el-border bg-el-fill-blank text-el-text-primary hover:border-el-primary hover:text-el-primary",
    Primary:
      "border border-el-primary bg-el-primary text-el-text-write hover:opacity-90",
    Success:
      "border border-[color:var(--el-color-success)] bg-[color:var(--el-color-success)] text-el-text-write",
    Warning:
      "border border-[color:var(--el-color-warning)] bg-[color:var(--el-color-warning)] text-el-text-write",
    Danger: "border border-el-danger bg-el-danger text-el-text-write",
    Info: "border border-el-text-placeholder bg-el-text-placeholder text-el-text-write",
  };
  return map[buttonType];
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      buttonType = "Default",
      size = "Default",
      plain = false,
      className,
      disabled,
      type = "button",
      children,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex w-full items-center justify-center overflow-hidden rounded-el-base font-[family-name:var(--el-font-family)] font-[var(--el-font-weight-primary)] transition-opacity",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--el-color-primary)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        variantClasses(buttonType, plain),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
