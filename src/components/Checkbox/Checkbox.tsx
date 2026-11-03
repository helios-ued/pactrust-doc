import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useId,
} from "react";
import { cn } from "@/lib/cn";

/** Figma Checkbox — State · Size · Border (node 33:1507) */
export type CheckboxSize = "Default" | "Large" | "Small";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> & {
  label?: ReactNode;
  size?: CheckboxSize;
  /** Figma: Border False | True */
  border?: boolean;
};

const boxSize: Record<CheckboxSize, string> = {
  Default: "size-[length:var(--pt-checkbox-size-default)]",
  Large: "size-[length:var(--pt-checkbox-size-large)]",
  Small: "size-[length:var(--pt-checkbox-size-small)]",
};

const rowHeight: Record<CheckboxSize, string> = {
  Default: "min-h-8",
  Large: "min-h-10",
  Small: "min-h-6",
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="size-[length:var(--pt-checkbox-check-size)] text-el-text-write opacity-0 peer-checked:opacity-100"
      aria-hidden
    >
      <path
        d="M2.5 6.2 5.1 8.8 9.8 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = "Default",
      border = false,
      className,
      disabled,
      id: idProp,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const id = idProp ?? autoId;

    return (
      <label
        htmlFor={id}
        className={cn(
          "inline-flex cursor-pointer items-center gap-pt-8 p-pt-0",
          rowHeight[size],
          border &&
            "rounded-el-base border border-el-border px-pt-12 py-pt-4",
          disabled && "cursor-not-allowed opacity-60",
          className,
        )}
      >
        <span
          className={cn(
            "relative inline-flex shrink-0 items-center justify-center",
            boxSize[size],
          )}
        >
          <input
            ref={ref}
            id={id}
            type="checkbox"
            disabled={disabled}
            className="peer sr-only"
            {...rest}
          />
          <span
            className={cn(
              "pointer-events-none absolute inset-0 flex items-center justify-center rounded-el-base border border-[length:var(--el-border-width)] bg-el-fill-blank transition-colors",
              "border-el-border-light",
              "peer-checked:border-el-primary peer-checked:bg-el-primary",
              "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[color:var(--el-color-primary)]",
              "peer-enabled:peer-hover:border-el-text-placeholder",
            )}
            aria-hidden
          />
          <CheckIcon />
        </span>
        {label ? (
          <span className="font-[family-name:var(--el-font-family)] text-el-base leading-el-base font-[var(--el-font-weight-regular)] text-el-text-primary select-none">
            {label}
          </span>
        ) : null}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
