import { cn } from "@/lib/cn";
import { forwardRef, type TextareaHTMLAttributes } from "react";

export type TextareaState = "Default" | "Hover" | "Focus" | "Error" | "Disable";

export type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "disabled"> & {
  state?: TextareaState;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ state = "Default", className, ...rest }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[80px] w-full resize-y rounded-el-base border px-pt-12 py-pt-8 text-el-base leading-el-base",
        state === "Error" && "border-el-danger",
        state === "Disable" && "cursor-not-allowed opacity-50",
        state !== "Error" && state !== "Disable" && "border-el-border focus:border-el-primary",
        className,
      )}
      disabled={state === "Disable"}
      {...rest}
    />
  ),
);
Textarea.displayName = "Textarea";
