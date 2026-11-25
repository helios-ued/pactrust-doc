import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { FormLabel } from "./FormLabel";
import { useFormContext } from "./formContext";
import type { FormLabelAlign, FormLabelSize, FormLayout } from "./formContext";
import "./form.css";

export type FormItemProps = {
  label: ReactNode;
  required?: boolean;
  info?: boolean;
  prompt?: string;
  children: ReactNode;
  className?: string;
  error?: string;
  layout?: FormLayout;
  labelSize?: FormLabelSize;
  labelAlign?: FormLabelAlign;
};

export function FormItem({
  label,
  required,
  info,
  prompt,
  children,
  className,
  error,
  layout: layoutProp,
  labelSize: labelSizeProp,
  labelAlign: labelAlignProp,
}: FormItemProps) {
  const ctx = useFormContext();
  const layout = layoutProp ?? ctx?.layout ?? "Vertical";
  const labelSize = labelSizeProp ?? ctx?.labelSize ?? "Default";
  const labelAlign = labelAlignProp ?? ctx?.labelAlign ?? "Left";
  const horizontal = layout === "Horizontal";

  const labelNode = (
    <FormLabel
      label={label}
      required={required}
      info={info}
      size={labelSize}
      align={horizontal ? labelAlign : "Left"}
    />
  );

  const message = error ? (
    <p className="pt-form-item__error" role="alert">
      {error}
    </p>
  ) : prompt ? (
    <p className="pt-form-item__prompt">{prompt}</p>
  ) : null;

  if (horizontal) {
    return (
      <div className={cn("pt-form-item pt-form-item--horizontal", className)}>
        <div className="pt-form-item__label-col">{labelNode}</div>
        <div className="pt-form-item__control">
          {children}
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("pt-form-item pt-form-item--vertical", className)}>
      {labelNode}
      <div className="pt-form-item__control">{children}</div>
      {message}
    </div>
  );
}
