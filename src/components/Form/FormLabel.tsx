import type { ReactNode } from "react";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { FormLabelAlign, FormLabelSize } from "./formContext";
import "./form.css";

export type FormLabelProps = {
  label: ReactNode;
  required?: boolean;
  info?: boolean;
  size?: FormLabelSize;
  align?: FormLabelAlign;
  className?: string;
  htmlFor?: string;
};

const sizeClasses: Record<FormLabelSize, string> = {
  Default: "pt-form-label--default",
  Large: "pt-form-label--large",
  Small: "pt-form-label--small",
};

export function FormLabel({
  label,
  required,
  info,
  size = "Default",
  align = "Left",
  className,
  htmlFor,
}: FormLabelProps) {
  return (
    <div
      className={cn(
        "pt-form-label",
        sizeClasses[size],
        align === "Right" && "pt-form-label--align-right",
        className,
      )}
    >
      <div
        className={cn(
          "pt-form-label__row",
          align === "Right" && "justify-end",
        )}
      >
        {required ? (
          <span className="pt-form-label__required" aria-hidden>
            *
          </span>
        ) : null}
        {htmlFor ? (
          <label htmlFor={htmlFor} className="pt-form-label__text">
            {label}
          </label>
        ) : (
          <span className="pt-form-label__text">{label}</span>
        )}
        {info ? (
          <EpIconByName
            name="InfoFilled"
            size={14}
            className="shrink-0 text-el-text-placeholder"
            aria-label="More information"
          />
        ) : null}
      </div>
    </div>
  );
}
