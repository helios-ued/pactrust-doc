import { PacsTrustLogo } from "@/components/brand/PacsTrustLogo";
import { useEffect, useState, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import "./showcase-content.css";
import "./showcase-sidebar.css";

export function ShowcaseShell({ nav }: { nav: ReactNode }) {
  const [dark, setDark] = useState(false);

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
          {nav}
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