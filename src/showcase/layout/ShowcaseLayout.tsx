import { PacsTrustLogo } from "@/components/brand/PacsTrustLogo";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  groupByCategory,
  isComponentsAreaPath,
  isNavItemActive,
  navItemPath,
  sidebarComponentNav,
  type NavItem,
} from "../nav";
import "./showcase-content.css";
import "./showcase-sidebar.css";

function ComponentCategorySection({
  label,
  items,
  defaultOpen,
}: {
  label: string;
  items: NavItem[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const location = useLocation();
  const hasActive = items.some((i) => isNavItemActive(i, location.pathname));

  useEffect(() => {
    if (hasActive) setOpen(true);
  }, [hasActive]);

  if (items.length === 0) return null;

  return (
    <div>
      <button
        type="button"
        className="showcase-sidebar-l2-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={cn("showcase-sidebar-chevron", open && "is-open")} aria-hidden>
          ›
        </span>
        {label}
      </button>
      {open ? (
        <ul className="showcase-sidebar-l3-list space-y-0.5 pb-1">
          {items.map((item) => {
            const path = navItemPath(item);
            const active = isNavItemActive(item, location.pathname);
            const linkClass = cn("showcase-sidebar-l3-link", active && "is-active");
            const dot = item.implemented ? (
              <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--el-color-success)]" />
            ) : null;
            return (
              <li key={item.slug}>
                <NavLink to={path} className={linkClass}>
                  {item.name}
                  {dot}
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function ComponentsNavMenu({ groups }: { groups: ReturnType<typeof groupByCategory> }) {
  const location = useLocation();
  const isOnComponent = isComponentsAreaPath(location.pathname);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (isOnComponent) setOpen(true);
  }, [isOnComponent]);

  const visibleGroups = groups.filter((g) => g.items.length > 0);

  if (!open) {
    return (
      <button
        type="button"
        className={cn("showcase-sidebar-l1", isOnComponent && "is-active")}
        onClick={() => setOpen(true)}
      >
        组件
      </button>
    );
  }

  return (
    <div
      className={cn(
        "showcase-sidebar-components-group",
        (isOnComponent || open) && "is-expanded",
      )}
    >
      <button
        type="button"
        className={cn(
          "showcase-sidebar-components-trigger",
          isOnComponent && "is-active",
        )}
        onClick={() => setOpen(false)}
        aria-expanded
      >
        组件
      </button>
      <div className="pt-0.5">
        {visibleGroups.map((g) => (
          <ComponentCategorySection
            key={g.category}
            label={g.label}
            items={g.items}
            defaultOpen={g.items.some((i) => isNavItemActive(i, location.pathname))}
          />
        ))}
      </div>
    </div>
  );
}

export function ShowcaseLayout() {
  const [dark, setDark] = useState(false);
  const groups = groupByCategory(sidebarComponentNav);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div className="showcase-app-shell text-[color:var(--ds-text-primary)]">
      <aside className="showcase-sidebar">
        <div className="showcase-sidebar-brand">
          <PacsTrustLogo className="h-6" />
        </div>
        <nav className="showcase-sidebar-nav min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <NavLink
            to="/tokens"
            className={({ isActive }) =>
              cn("showcase-sidebar-l1", isActive && "is-active")
            }
          >
            设计令牌
          </NavLink>
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              cn("showcase-sidebar-l1", isActive && "is-active")
            }
          >
            规范说明
          </NavLink>
          <ComponentsNavMenu groups={groups} />
        </nav>
        <div className="showcase-sidebar-footer">
          <button
            type="button"
            className="showcase-sidebar-l1 showcase-sidebar-theme-toggle w-full text-sm"
            onClick={() => setDark(!dark)}
          >
            {dark ? "切换浅色主题" : "切换深色主题"}
          </button>
        </div>
      </aside>
      <div className="showcase-content-shell">
        <main className="showcase-content-panel">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
