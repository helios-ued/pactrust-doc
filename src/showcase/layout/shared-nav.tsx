import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  groupByCategory,
  isNavItemActive,
  navItemPath,
  templateSidebarNav,
  type NavItem,
} from "../nav";

export function ComponentCategorySection({
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

export function ComponentsNavMenu({
  groups,
  areaActive,
}: {
  groups: ReturnType<typeof groupByCategory>;
  areaActive: boolean;
}) {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (areaActive) setOpen(true);
  }, [areaActive, location.pathname]);

  const visibleGroups = groups.filter((g) => g.items.length > 0);

  if (!open) {
    return (
      <button
        type="button"
        className={cn("showcase-sidebar-l1", areaActive && "is-active")}
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
        (areaActive || open) && "is-expanded",
      )}
    >
      <button
        type="button"
        className={cn("showcase-sidebar-components-trigger", areaActive && "is-active")}
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

/** 模板平铺列表（Desktop 展示侧栏） */
export function TemplateFlatNav({ items = templateSidebarNav }: { items?: NavItem[] }) {
  const location = useLocation();

  if (items.length === 0) return null;

  return (
    <ul className="showcase-sidebar-template-flat space-y-0.5 pb-2">
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
  );
}

export function UiShowcaseNavMenu({
  groups,
  areaActive,
}: {
  groups: ReturnType<typeof groupByCategory>;
  areaActive: boolean;
}) {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (areaActive) setOpen(true);
  }, [areaActive, location.pathname]);

  const visibleGroups = groups.filter((g) => g.items.length > 0);
  if (visibleGroups.length === 0) return null;

  if (!open) {
    return (
      <button
        type="button"
        className={cn("showcase-sidebar-l1", areaActive && "is-active")}
        onClick={() => setOpen(true)}
      >
        界面展示
      </button>
    );
  }

  return (
    <div
      className={cn(
        "showcase-sidebar-components-group",
        (areaActive || open) && "is-expanded",
      )}
    >
      <button
        type="button"
        className={cn("showcase-sidebar-components-trigger", areaActive && "is-active")}
        onClick={() => setOpen(false)}
        aria-expanded
      >
        界面展示
      </button>
      <p className="px-3 pb-1 pt-0.5 text-[10px] leading-snug text-[color:var(--ds-text-placeholder)]">
        模板 · Layout 全页
      </p>
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