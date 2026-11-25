import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Figma Link — Style × State (`1220:26096`) */
export type LinkType = "Default" | "Primary" | "Success" | "Warning" | "Danger" | "Info";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  linkType?: LinkType;
  /** Figma Hover(underline) */
  underline?: boolean;
  disabled?: boolean;
};

const typeClasses: Record<LinkType, string> = {
  Default: "text-el-text-regular hover:text-el-primary",
  Primary: "text-el-primary hover:opacity-80",
  Success: "text-[color:var(--el-color-success)] hover:opacity-80",
  Warning: "text-[color:var(--el-color-warning)] hover:opacity-80",
  Danger: "text-el-danger hover:opacity-80",
  Info: "text-[color:var(--el-color-info)] hover:opacity-80",
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, linkType = "Primary", underline = false, disabled = false, children, ...rest }, ref) => (
    <a
      ref={ref}
      aria-disabled={disabled || undefined}
      className={cn(
        "inline font-[family-name:var(--el-font-family)] text-el-base leading-el-base",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--el-color-primary)]",
        typeClasses[linkType],
        underline && "underline underline-offset-2",
        disabled && "cursor-not-allowed opacity-50 pointer-events-none",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  ),
);

Link.displayName = "Link";
