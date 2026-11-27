import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type DocMetaRow = { label: string; value: ReactNode };

export function DocMetaPanel({ rows }: { rows: DocMetaRow[] }) {
  return (
    <div className="doc-site__meta">
      {rows.map((row) => (
        <div key={row.label} className="doc-site__meta-row">
          <span className="doc-site__meta-label">{row.label}</span>
          <span className="text-[color:var(--el-text-color-primary)]">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

export function DocPageChrome({
  eyebrow = "PacsTrust Design System",
  title,
  meta,
  toc,
  children,
}: {
  eyebrow?: string;
  title: string;
  meta: DocMetaRow[];
  toc: { id: string; label: string; level?: 2 | 3 }[];
  children: ReactNode;
}) {
  return (
    <>
      <DocGuideTabs />
      <p className="doc-site__eyebrow">{eyebrow}</p>
      <h1 className="doc-site__title">{title}</h1>
      <DocMetaPanel rows={meta} />
      <DocBody toc={toc}>{children}</DocBody>
    </>
  );
}

function DocGuideTabs() {
  return (
    <div className="doc-site__tabs mb-1" role="tablist" aria-label="文档视图">
      <span className="doc-site__tab is-active">使用指南</span>
      <span className="doc-site__tab">开发指引</span>
    </div>
  );
}

function DocBody({
  children,
  toc,
}: {
  children: ReactNode;
  toc: { id: string; label: string; level?: 2 | 3 }[];
}) {
  return (
    <div className="mt-8 flex items-start gap-10">
      <DocArticle>{children}</DocArticle>
      <DocOnPageNav items={toc} />
    </div>
  );
}

function DocArticle({ children }: { children: ReactNode }) {
  return <div className="doc-site__prose min-w-0 flex-1">{children}</div>;
}

function DocOnPageNav({
  items,
}: {
  items: { id: string; label: string; level?: 2 | 3 }[];
}) {
  return (
    <nav className="doc-site__toc" aria-label="本页目录">
      <input
        type="search"
        className="mb-3 w-full rounded-lg border border-[color:var(--doc-border)] px-2.5 py-1.5 text-xs"
        placeholder="On this page"
        aria-label="筛选本页目录"
        readOnly
        tabIndex={-1}
      />
      <p className="doc-site__toc-title">On this page</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(item.level === 3 && "pl-2 text-[11px]")}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}