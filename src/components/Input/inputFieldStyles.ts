import { cn } from "@/lib/cn";
import type { InputSize, InputState } from "./Input";

export const inputSizeClasses: Record<InputSize, string> = {
  Default: "h-8 gap-pt-8 px-pt-8 py-pt-4 text-el-base leading-el-base",
  Large: "h-10 gap-pt-8 px-pt-12 py-pt-8 text-el-base leading-el-base",
  Small: "h-6 gap-pt-8 px-pt-8 py-pt-4 text-xs leading-el-base",
};

export function inputFieldStateClasses(state: InputState): string {
  switch (state) {
    case "Error":
      return "border-el-danger focus-within:border-el-danger";
    case "Disabled":
      return "cursor-not-allowed border-el-border-light bg-el-border-light/30 text-el-text-disabled";
    case "Hover":
      return "border-el-text-placeholder";
    case "Focus":
      return "border-el-primary shadow-[var(--el-box-shadow-lighter)]";
    default:
      return "border-el-border hover:border-el-text-placeholder focus-within:border-el-primary";
  }
}

export function inputWrapperClass(
  size: InputSize,
  visualState: InputState,
  className?: string,
) {
  return cn(
    "pt-input-field flex w-full items-center overflow-hidden rounded-el-base border bg-el-fill-blank",
    inputSizeClasses[size],
    inputFieldStateClasses(visualState),
    className,
  );
}

export function inputNativeClass(isDisabled: boolean, hasValue: boolean) {
  return cn(
    "min-w-0 flex-1 border-0 bg-transparent font-[family-name:var(--el-font-family)] font-[var(--el-font-weight-regular)] outline-none",
    hasValue
      ? "text-el-text-primary text-[length:var(--el-font-size-small)] leading-[var(--el-font-line-height-small)]"
      : "text-[length:var(--el-font-size-small)] leading-[var(--el-font-line-height-small)] placeholder:text-el-text-placeholder",
    isDisabled && "cursor-not-allowed",
  );
}
