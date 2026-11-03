import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Figma Form Item — label + control slot */
export type FormItemProps = {
  label: ReactNode;
  required?: boolean;
  children: ReactNode;
  className?: string;
  error?: string;
};

export function FormItem({
  label,
  required,
  children,
  className,
  error,
}: FormItemProps) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      <div className="flex min-h-8 flex-col justify-center gap-pt-0">
        <div className="flex items-center gap-pt-4">
          <span className="font-[family-name:var(--el-font-family)] text-el-base leading-el-base font-[var(--el-font-weight-regular)] text-el-text-primary">
            {label}
          </span>
          {required ? (
            <span className="text-el-danger" aria-hidden>
              *
            </span>
          ) : null}
        </div>
      </div>
      <div className="mt-pt-4">{children}</div>
      {error ? (
        <p className="mt-pt-4 text-el-base leading-el-base text-el-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
