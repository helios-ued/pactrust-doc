import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { SemanticTokenRow, TokenPairRow, TokensEdsNavItem } from "./tokensEdsCatalog";

export function TokensEdsSideNav({ items }: { items: TokensEdsNavItem[] }) {
  return (
    <nav
      className="sticky top-6 hidden w-[168px] shrink-0 xl:block"
      aria-label="Tokens 目录"
    >
      <ul className="space-y-0.5 border-l border-[color:var(--eds-panel-border)] pl-3 text-[13px]">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block py-1 leading-snug text-[color:var(--eds-panel-muted)] transition-colors hover:text-[color:var(--eds-toc-active)]",
                item.level === 2 && "font-medium text-[color:var(--eds-panel-fg)]",
                item.level === 3 && "pl-3 text-xs",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function TokensEdsSection({
  id,
  title,
  level = 2,
  description,
  children,
}: {
  id: string;
  title: string;
  level?: 2 | 3;
  description?: string;
  children?: ReactNode;
}) {
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <section id={id} className="scroll-mt-6 border-t border-[color:var(--eds-panel-border)] pt-8 first:border-0 first:pt-0">
      <Tag
        className={cn(
          "font-semibold tracking-tight text-[color:var(--eds-panel-fg)]",
          level === 2 ? "text-lg" : "text-base",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[color:var(--eds-panel-muted)]">
          {description}
        </p>
      ) : null}
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function TokenPairTable({ rows }: { rows: TokenPairRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[color:var(--eds-panel-border)]">
      <table className="w-full min-w-[520px] border-collapse text-left text-xs">
        <thead className="bg-[color:var(--ds-bg-muted)] text-[color:var(--eds-panel-muted)]">
          <tr>
            <th className="px-4 py-2.5 font-medium">Token</th>
            <th className="px-4 py-2.5 font-medium">CSS 变量</th>
            <th className="px-4 py-2.5 font-medium">Light</th>
            <th className="px-4 py-2.5 font-medium">Dark</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-[color:var(--eds-panel-border)]">
              <td className="px-4 py-2.5 font-mono text-[color:var(--eds-panel-fg)]">{row.name}</td>
              <td className="px-4 py-2.5 font-mono text-[color:var(--eds-toc-active)]">{row.cssVar}</td>
              <td className="px-4 py-2.5">
                <span className="inline-flex items-center gap-2 font-mono">
                  {row.cssVar.startsWith("--el-color") ||
                  row.cssVar.startsWith("--pt-brand") ||
                  row.cssVar.includes("text") ||
                  row.cssVar.includes("bg") ||
                  row.cssVar.includes("border") ? (
                    <span
                      className="inline-block h-4 w-4 shrink-0 rounded-sm border border-black/10"
                      style={{ background: row.light }}
                    />
                  ) : null}
                  {row.light}
                </span>
              </td>
              <td className="px-4 py-2.5 font-mono text-[color:var(--eds-panel-muted)]">
                {row.dark ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SemanticTokenTable({ rows }: { rows: SemanticTokenRow[] }) {
  return (
    <ul className="divide-y divide-[color:var(--eds-panel-border)] rounded-lg border border-[color:var(--eds-panel-border)]">
      {rows.map((row) => (
        <li
          key={row.name}
          className="grid gap-2 px-4 py-3 text-xs sm:grid-cols-[140px_1fr_auto]"
        >
          <span className="font-mono text-[color:var(--eds-panel-fg)]">{row.name}</span>
          <code className="font-mono text-[color:var(--eds-toc-active)]">{row.expression}</code>
          {row.note ? (
            <span className="text-[color:var(--eds-panel-muted)] sm:text-right">{row.note}</span>
          ) : (
            <span />
          )}
        </li>
      ))}
    </ul>
  );
}
