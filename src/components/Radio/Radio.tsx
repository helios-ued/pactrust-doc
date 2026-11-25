import { cn } from "@/lib/cn";
import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import "./radio.css";

/** Figma Radio — Size · Border · State (node 19:2021) */
export type RadioSize = "Default" | "Large" | "Small";

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  label?: ReactNode;
  size?: RadioSize;
  /** Figma: Border False | True */
  border?: boolean;
};

const ringSize: Record<RadioSize, string> = {
  Default: "size-[length:var(--pt-radio-size-default)]",
  Large: "size-[length:var(--pt-radio-size-large)]",
  Small: "size-[length:var(--pt-radio-size-small)]",
};

const rowHeight: Record<RadioSize, string> = {
  Default: "min-h-8",
  Large: "min-h-10",
  Small: "min-h-6",
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
            "rounded-el-base border border-el-border-light px-pt-12 py-pt-4",
          disabled && "cursor-not-allowed opacity-60",
          className,
        )}
      >
        <span className={cn("relative inline-block shrink-0", ringSize[size])}>
          <input
            ref={ref}
            id={id}
            type="radio"
            disabled={disabled}
            className="pt-radio__control peer sr-only"
            {...rest}
          />
          <span className="pt-radio__ring" aria-hidden />
        </span>
        {label ? (
          <span className="pt-radio__label select-none font-[family-name:var(--el-font-family)] text-el-base font-[var(--el-font-weight-regular)] leading-el-base">
            {label}
          </span>
        ) : null}
      </label>
    );
  },
);

Radio.displayName = "Radio";
