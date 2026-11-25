import type { ReactNode } from "react";
import "./doc-meta-panel.css";

export type DocMetaPanelItem = {
  id: string;
  label: string;
  value: ReactNode;
};

export type DocMetaPanelProps = {
  /** section aria-label，如「个人信息」「文档元数据」 */
  ariaLabel: string;
  items: readonly DocMetaPanelItem[];
  className?: string;
};

/** 【文档元数据面板布局】中后台详情页只读 KV 块 */
export function DocMetaPanel({ ariaLabel, items, className }: DocMetaPanelProps) {
  const sectionClass = ["pt-doc-meta-panel", className].filter(Boolean).join(" ");

  return (
    <div className="pt-doc-meta-panel-outer">
      <section className={sectionClass} aria-label={ariaLabel}>
        {items.flatMap((row) => [
          <span key={`${row.id}-label`} className="pt-doc-meta-panel__label">
            {row.label}
          </span>,
          <span key={`${row.id}-value`} className="pt-doc-meta-panel__value">
            {row.value}
          </span>,
        ])}
      </section>
    </div>
  );
}