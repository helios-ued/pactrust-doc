import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type InputHTMLAttributes,
  type ReactNode,
  useId,
} from "react";
import { cn } from "@/lib/cn";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import "./checkbox.css";

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
  /** Figma: Selected(Partially) / Not all selected */
  indeterminate?: boolean;
};

const boxWrap: Record<CheckboxSize, string> = {
  Default: "size-[length:var(--pt-checkbox-size-default)] pt-checkbox--size-default",
  Large: "size-[length:var(--pt-checkbox-size-large)] pt-checkbox--size-large",
  Small: "size-[length:var(--pt-checkbox-size-small)] pt-checkbox--size-small",
};

const checkIconSize: Record<CheckboxSize, number> = {
  Default: 12,
  Large: 12,
  Small: 10,
};

const rowHeight: Record<CheckboxSize, string> = {
  Default: "min-h-8",
  Large: "min-h-10",
  Small: "min-h-6",
};

const labelType: Record<CheckboxSize, string> = {
  Default: "text-el-base leading-el-base",
  Large: "text-el-base leading-el-base",
  Small: "text-el-small leading-el-small",
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = "Default",
      border = false,
      indeterminate = false,
      className,
      disabled,
      id: idProp,
      checked,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const id = idProp ?? autoId;
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, checked]);

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
        <span className={cn("relative inline-flex shrink-0", boxWrap[size])}>
          <input
            ref={inputRef}
            id={id}
            type="checkbox"
            disabled={disabled}
            checked={checked}
            className="pt-checkbox__control peer sr-only"
            {...rest}
          />
          <span className="pt-checkbox__box" aria-hidden>
            <span
              className="pt-checkbox__check flex size-[length:var(--pt-checkbox-check-size)] items-center justify-center"
              aria-hidden
            >
              <EpIconByName name="Check" size={checkIconSize[size]} />
            </span>
            <span className="pt-checkbox__indeterminate-bar" aria-hidden />
          </span>
        </span>
        {label ? (
          <span
            className={cn(
              "pt-checkbox__label select-none font-[family-name:var(--el-font-family)] font-[var(--el-font-weight-regular)]",
              labelType[size],
            )}
          >
            {label}
          </span>
        ) : null}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
