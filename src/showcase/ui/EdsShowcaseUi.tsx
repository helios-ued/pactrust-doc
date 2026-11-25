import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/** EDS 式预览区内分段（EgAvatar / EgTag） */
export function EdsPreviewSegmented<T extends string>({
  value,
  options,
  onChange,
  className,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex rounded-el-base border border-[color:var(--ds-stroke-divider)] bg-[color:var(--el-fill-color-blank)] p-0.5",
        className,
      )}
      role="tablist"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="tab"
          aria-selected={value === opt.value}
          className={cn(
            "rounded-[3px] px-3 py-1.5 text-sm transition-colors",
            value === opt.value
              ? "bg-[color:var(--el-fill-color-blank)] font-medium text-el-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
              : "text-[color:var(--el-text-color-secondary)] hover:text-el-text-primary",
          )}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

/** 预览区内容栈：在 Preview 卡片内水平居中 */
export function EdsPreviewStack({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto flex w-full max-w-3xl flex-col items-center gap-8", className)}>
      {children}
    </div>
  );
}

/** 预览区内分段，无标题文案 */
export function EdsPreviewDivider({ className }: { className?: string }) {
  return (
    <hr
      className={cn("w-full border-0 border-t border-[color:var(--ds-stroke-divider)]", className)}
    />
  );
}

export function EdsVariantSection({
  title,
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {title ? (
        <p className="mb-3 text-center text-xs text-[color:var(--el-text-color-secondary)]">{title}</p>
      ) : null}
      <div className="flex flex-wrap items-end justify-center gap-4 md:gap-6">{children}</div>
    </div>
  );
}

export function EdsVariantTile({
  label,
  active,
  onClick,
  children,
  className,
}: {
  label?: string;
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}) {
  const body = (
    <>
      {children}
      {label ? (
        <span className="max-w-[5.5rem] text-center text-[11px] leading-tight text-[color:var(--el-text-color-secondary)]">
          {label}
        </span>
      ) : null}
    </>
  );
  const tileClass = cn(
    "flex shrink-0 flex-col items-center gap-2 rounded-el-base p-2",
    active && "bg-[color:var(--el-fill-color)] ring-1 ring-[color:var(--el-border-color-light)]",
    onClick && "transition-colors hover:bg-[color:var(--el-fill-color)]/60",
    className,
  );

  if (!onClick) {
    return <div className={tileClass}>{body}</div>;
  }

  return (
    <button type="button" className={tileClass} onClick={onClick}>
      {body}
    </button>
  );
}

export function EdsHeroStage({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex min-h-[88px] w-full items-center justify-center py-4", className)}>{children}</div>
  );
}
