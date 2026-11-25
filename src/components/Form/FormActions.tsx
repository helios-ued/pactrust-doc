import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import { useFormContext } from "./formContext";
import "./form.css";

export type FormActionsProps = {
  className?: string;
  children: ReactNode;
};

export function FormActions({ className, children }: FormActionsProps) {
  const ctx = useFormContext();
  const horizontal = ctx?.layout !== "Vertical";

  return (
    <div
      className={cn(
        "pt-form-actions",
        horizontal && "pt-form-actions--horizontal",
        className,
      )}
    >
      {children}
    </div>
  );
}
