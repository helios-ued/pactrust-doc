import { cn } from "@/lib/cn";
import { NavLink, useLocation } from "react-router-dom";
import {
  designProductEntry,
  isExternalProductLink,
  templateProductEntry,
} from "../lib/siteUrls";
import { isDesignShellPath, isTemplateShellPath } from "../nav";

function SwitchTab({
  active,
  href,
  external,
  children,
}: {
  active: boolean;
  href: string;
  external?: boolean;
  children: string;
}) {
  const className = cn(
    "flex-1 rounded px-2 py-1.5 text-center text-xs font-medium transition-colors",
    active
      ? "bg-[color:var(--ds-sidebar-item-active-bg)] text-[color:var(--ds-sidebar-item-active-text)]"
      : "text-[color:var(--ds-text-regular)] hover:text-[color:var(--ds-text-primary)]",
  );

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <NavLink to={href} className={() => className}>
      {children}
    </NavLink>
  );
}

export function ProductSwitcher() {
  const { pathname } = useLocation();
  const designActive = isDesignShellPath(pathname);
  const templateActive = isTemplateShellPath(pathname);

  return (
    <div
      className="mb-2 flex gap-1 rounded-[var(--el-border-radius-base)] border border-[color:var(--eds-panel-border)] bg-[color:var(--eds-panel-bg)] p-1"
      role="tablist"
      aria-label="产品切换"
    >
      <SwitchTab
        active={designActive}
        href={designProductEntry()}
        external={isExternalProductLink("design")}
      >
        设计规范
      </SwitchTab>
      <SwitchTab
        active={templateActive}
        href={templateProductEntry()}
        external={isExternalProductLink("template")}
      >
        Desktop 展示
      </SwitchTab>
    </div>
  );
}