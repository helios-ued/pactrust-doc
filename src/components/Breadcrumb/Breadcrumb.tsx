import { EdsIconById } from "@/components/Icon/EdsIconById";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./breadcrumb.css";

/** Figma Breadcrumb/item · State */
export type BreadcrumbItemVisualState = "Default" | "Hover" | "Not current page";

export type BreadcrumbNumber = 2 | 3 | 4;

export type BreadcrumbItemData = {
  label: ReactNode;
  href?: string;
  /** Figma Not current page（末级 Current） */
  current?: boolean;
};

export type BreadcrumbProps = {
  /** Figma Custom=False */
  custom?: boolean;
  /** Figma Number（Custom=false） */
  number?: BreadcrumbNumber;
  items?: BreadcrumbItemData[];
  className?: string;
  children?: ReactNode;
};

const PRESET_LABELS: Record<BreadcrumbNumber, string[]> = {
  2: ["homepage", "promotion management"],
  3: ["homepage", "promotion management", "promotion list"],
  4: ["homepage", "promotion management", "promotion list", "promotion detail"],
};

const CUSTOM_LABELS = [
  "homepage",
  "promotion management",
  "...",
  "promotion list",
  "promotion detail",
];

function buildPresetItems(custom: boolean, number: BreadcrumbNumber): BreadcrumbItemData[] {
  const labels = custom ? CUSTOM_LABELS : PRESET_LABELS[number];
  return labels.map((label, index) => {
    const isLast = index === labels.length - 1;
    if (custom) {
      if (label === "...") return { label };
      if (isLast) return { label, current: true };
      return { label, href: "#" };
    }
    return {
      label,
      href: isLast ? undefined : "#",
      current: isLast,
    };
  });
}

export function BreadcrumbSeparator({ className }: { className?: string }) {
  return (
    <span className={cn("pt-breadcrumb__sep", className)} aria-hidden>
      <EdsIconById id="eds-other-breadcrumbslash" size={12} className="size-full" />
    </span>
  );
}

export type BreadcrumbItemProps = {
  href?: string;
  current?: boolean;
  /** Showcase：强制展示 Hover / Not current page */
  visualState?: BreadcrumbItemVisualState;
  separator?: boolean;
  className?: string;
  children?: ReactNode;
};

export function BreadcrumbItem({
  href = "#",
  current = false,
  visualState,
  separator = false,
  className,
  children,
}: BreadcrumbItemProps) {
  const isCurrent = current || visualState === "Not current page";
  const forceHover = visualState === "Hover";
  const ellipsis = children === "...";

  const labelClass = cn(
    "pt-breadcrumb__label",
    (isCurrent || ellipsis) && "pt-breadcrumb__label--current",
    ellipsis && "pt-breadcrumb__ellipsis",
  );

  return (
    <span className={cn("pt-breadcrumb__segment", className)}>
      {separator ? <BreadcrumbSeparator /> : null}
      {isCurrent || ellipsis ? (
        <span className={labelClass}>{children}</span>
      ) : (
        <a
          href={href}
          className={cn(
            "pt-breadcrumb__label pt-breadcrumb__link",
            forceHover && "pt-breadcrumb__link--hover",
          )}
          onClick={(e) => e.preventDefault()}
        >
          {children}
        </a>
      )}
    </span>
  );
}

export function Breadcrumb({
  custom = false,
  number = 2,
  items,
  className,
  children,
}: BreadcrumbProps) {
  const resolved = items ?? buildPresetItems(custom, number);

  return (
    <nav className={cn("pt-breadcrumb", className)} aria-label="Breadcrumb">
      {children ??
        resolved.map((item, index) => (
          <BreadcrumbItem
            key={`${index}-${String(item.label)}`}
            href={item.href}
            current={item.current}
            separator={index > 0}
          >
            {item.label}
          </BreadcrumbItem>
        ))}
    </nav>
  );
}
