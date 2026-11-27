import { PacsTrustLogo } from "@/components/brand/PacsTrustLogo";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { isExternalProductLink, templateProductEntry } from "../lib/siteUrls";
import {
  docRailSections,
  docSectionById,
  docSectionIdFromPath,
} from "./docNav";
import "./doc-shell.css";

export function DocSiteShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionId = docSectionIdFromPath(location.pathname);
  const section = docSectionById(sectionId);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div className="doc-site" data-theme={dark ? "dark" : "light"}>
      <aside className="doc-site__rail" aria-label="文档分区">
        <div className="doc-site__rail-logo">
          <PacsTrustLogo className="h-6 w-6" />
        </div>
        {docRailSections.map((rail) => (
          <button
            key={rail.id}
            type="button"
            title={rail.label}
            className={cn(
              "doc-site__rail-btn",
              rail.id === sectionId && "is-active",
            )}
            onClick={() => navigate(rail.entry)}
          >
            {rail.label}
          </button>
        ))}
        <div className="mt-auto pt-4">
          <button
            type="button"
            className="doc-site__rail-btn text-[9px]"
            onClick={() => setDark((v) => !v)}
          >
            {dark ? "浅色" : "深色"}
          </button>
        </div>
      </aside>

      <nav className="doc-site__section-nav" aria-label={section.label}>
        <p className="doc-site__section-title">{section.label}</p>
        {section.groups.map((group) => (
          <div key={group.title} className="doc-site__nav-group">
            <p className="doc-site__nav-group-title">{group.title}</p>
            {group.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "doc-site__nav-link",
                    isActive && "is-active",
                    item.implemented === false && "is-disabled",
                  )
                }
                end
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
        <div className="doc-site__nav-group mt-8 border-t border-[color:var(--doc-border)] pt-4">
          <p className="doc-site__nav-group-title">其它入口</p>
          {isExternalProductLink("template") ? (
            <a
              href={templateProductEntry()}
              className="doc-site__nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Desktop 预览 ↗
            </a>
          ) : null}
        </div>
      </nav>

      <div className="doc-site__main-wrap">
        <div className="doc-site__main">
          <article className="doc-site__article">
            <Outlet />
          </article>
        </div>
      </div>
    </div>
  );
}