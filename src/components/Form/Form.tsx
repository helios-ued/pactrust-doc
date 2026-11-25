import { cn } from "@/lib/cn";
import type { CSSProperties, FormHTMLAttributes, ReactNode } from "react";
import {
  FormProvider,
  type FormLabelAlign,
  type FormLabelSize,
  type FormLayout,
} from "./formContext";
import "./form.css";

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  layout?: FormLayout;
  labelSize?: FormLabelSize;
  labelAlign?: FormLabelAlign;
  /** Label column width for horizontal layout (px). Figma copy-me uses ~100px + 12px gap → actions at 112px. */
  labelWidth?: number;
  className?: string;
  children: ReactNode;
};

export function Form({
  layout = "Horizontal",
  labelSize = "Default",
  labelAlign = "Right",
  labelWidth = 100,
  className,
  style,
  children,
  ...rest
}: FormProps) {
  const mergedStyle = {
    ...style,
    ["--pt-form-label-width" as string]: `${labelWidth}px`,
  } as CSSProperties;

  return (
    <FormProvider value={{ layout, labelSize, labelAlign, labelWidth }}>
      <form
        className={cn("pt-form", className)}
        style={mergedStyle}
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export function FormItems({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("pt-form__items", className)}>{children}</div>;
}

export { FormActions, type FormActionsProps } from "./FormActions";
