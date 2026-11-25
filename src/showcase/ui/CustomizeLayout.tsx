import { Checkbox } from "@/components/Checkbox/Checkbox";
import { cn } from "@/lib/cn";
import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import type { ShowcaseDemoProps } from "../demos/types";

/** EDS Desktop — 定制区（灰底整区 + 标签在上 + 白底控件） */
export const customizeToolbarClass =
  "flex flex-wrap items-end gap-x-6 gap-y-4";

export const customizeFieldClass =
  "flex flex-col gap-1.5 text-xs font-normal text-[color:var(--ds-text-secondary)]";

export const customizeControlClass =
  "h-8 w-full min-w-[7.5rem] rounded-el-base border border-[color:var(--ds-customize-control-border)] bg-[color:var(--ds-customize-control-bg)] px-2.5 text-sm leading-8 text-el-text-primary shadow-none outline-none transition-colors hover:border-[color:var(--el-border-color)] focus:border-[color:var(--el-color-primary)]";

export const customizeSelectClass = cn(
  customizeControlClass,
  "cursor-pointer appearance-none bg-[length:12px] bg-[position:right_8px_center] bg-no-repeat pr-8",
  "bg-[image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23909399'%3E%3Cpath d='M3 4.5 6 7.5 9 4.5'/%3E%3C/svg%3E\")]",
);

export const previewStageClass =
  "flex w-full min-h-[160px] items-center justify-center p-6 md:p-8";

type CustomizeRootProps = ShowcaseDemoProps & {
  customize?: ReactNode;
  preview: ReactNode;
  className?: string;
};

export function CustomizeRoot({
  part = "all",
  customize,
  preview,
  splitRender,
  className,
}: CustomizeRootProps) {
  if (splitRender && part === "all") {
    return <>{splitRender({ customize: customize ?? null, preview })}</>;
  }
  if (part === "preview") return <>{preview}</>;
  if (part === "customize") return customize ? <>{customize}</> : null;
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {customize}
      {preview}
    </div>
  );
}

/** 定制字段行（无内嵌卡片，由 CustomizeSection 提供灰底） */
export function CustomizeToolbar({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(customizeToolbarClass, className)}>{children}</div>;
}

export function CustomizeField({
  label,
  children,
  className,
  wide,
}: {
  label: ReactNode;
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <label className={cn(customizeFieldClass, wide && "min-w-[8rem] flex-1", className)}>
      <span className="leading-none">{label}</span>
      {children}
    </label>
  );
}

export function CustomizeSelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(customizeSelectClass, props.className)} />;
}

export function CustomizeInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(customizeControlClass, props.className)} />;
}

/** EDS Button 页：Plain / Disable — 与下拉同基线，标签在勾选框右侧 */
export function CustomizeInlineCheck({
  label,
  checked,
  onChange,
  className,
}: {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col justify-end gap-1.5", className)}>
      <span className="h-[12px]" aria-hidden />
      <div className="flex min-h-8 items-center">
        <Checkbox size="Small" checked={checked} onChange={onChange} label={label} />
      </div>
    </div>
  );
}

/** EDS Input 页：禁用 / 只读 — 标签在上、控件在下 */
export function CustomizeBooleanField({
  label,
  checked,
  onChange,
  className,
}: {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return (
    <CustomizeField label={label} className={className}>
      <div className="flex min-h-8 items-center">
        <Checkbox size="Small" checked={checked} onChange={onChange} label="" aria-label={label} />
      </div>
    </CustomizeField>
  );
}

export function DemoStage({
  children,
  className,
  minHeight = 160,
}: {
  children: ReactNode;
  className?: string;
  minHeight?: number;
}) {
  return (
    <div className={cn(previewStageClass, className)} style={{ minHeight }}>
      {children}
    </div>
  );
}

const edsPanelClass =
  "overflow-visible rounded-el-xl border border-[color:var(--ds-stroke-divider)] shadow-[var(--el-box-shadow-lighter)]";

export function PreviewShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        edsPanelClass,
        "bg-[color:var(--ds-bg-preview)] px-4 pb-6 pt-4 md:px-6 [--pt-avatar-overlap-border:var(--ds-bg-preview)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** 与「变体 / Props」同级：标题 + 内容，无卡片外框 */
export function CustomizeSection({
  children,
  title = "定制",
  className,
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  if (!children) return null;
  return (
    <section className={cn("mt-10", className)}>
      <h2 className="text-lg font-semibold text-el-text-primary">{title}</h2>
      <div className="mt-3 rounded-el-xl border border-dashed border-[color:var(--ds-stroke-divider)] bg-[color:var(--ds-bg-canvas)] p-4 md:p-5">
        {children}
      </div>
    </section>
  );
}

/** 预览独立卡片；定制区与下方文档块同级排版 */
export function ShowcasePlaygroundFrame({
  preview,
  customize,
}: {
  preview: ReactNode;
  customize?: ReactNode | null;
}) {
  return (
    <>
      <div className="mt-6">{preview}</div>
      {customize ? <CustomizeSection>{customize}</CustomizeSection> : null}
    </>
  );
}
