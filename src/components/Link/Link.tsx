import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Figma Link — docs/COMPONENTS.md (Basic) */
export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  underline?: boolean;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, underline = false, children, ...rest }, ref) => (
    <a
      ref={ref}
      className={cn(
        "inline font-[family-name:var(--el-font-family)] text-el-base leading-el-base text-el-primary",
        "hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--el-color-primary)]",
        underline && "underline underline-offset-2",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  ),
);

Link.displayName = "Link";
