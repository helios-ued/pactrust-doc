import { textStyleMetrics, textStyleRows } from "./textStyleCatalog";

/** EDS Desktop · Text Style 列表（左样例 + 右 metrics） */
export function EdsTextStyleSection() {
  return (
    <ul className="divide-y divide-[color:var(--eds-panel-border)]">
      {textStyleRows.map((row) => (
        <li
          key={row.label}
          className="flex items-baseline justify-between gap-8 py-5 first:pt-2"
        >
          <span
            className="min-w-0 shrink text-[color:var(--eds-panel-fg)]"
            style={{
              fontFamily: "var(--el-font-family)",
              fontSize: row.fontSize,
              lineHeight: row.lineHeight,
              fontWeight: row.fontWeight,
            }}
          >
            {row.label}
          </span>
          <span className="shrink-0 font-mono text-sm tabular-nums text-[color:var(--eds-panel-muted)]">
            {textStyleMetrics(row)}
          </span>
        </li>
      ))}
    </ul>
  );
}
