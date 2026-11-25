import type { ReactNode } from "react";
import {
  figmaFixedWords,
  figmaFontSizes,
  figmaFontWeights,
  figmaTextMatrixRows,
  figmaTextTypes,
} from "./figmaFontVariables";

function VarTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[color:var(--eds-panel-border)]">
      <table className="w-full min-w-[640px] border-collapse text-left text-xs">
        <thead className="bg-[color:var(--ds-bg-muted)] text-[color:var(--eds-panel-muted)]">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2.5 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, i) => (
            <tr key={i} className="border-t border-[color:var(--eds-panel-border)]">
              {cells.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 font-mono text-[color:var(--eds-panel-fg)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Figma Variables · Font Size / Line Height 全量对照 */
export function FigmaTypographyBaseTables() {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="mb-2 text-sm font-semibold text-[color:var(--eds-panel-fg)]">Font Size（11）</h4>
        <VarTable
          headers={["Figma 名称", "CSS 变量", "字号", "行高变量", "行高", "来源 (MCP)"]}
          rows={figmaFontSizes.map((r) => [
            r.figmaName,
            <span key="v" className="text-[color:var(--eds-toc-active)]">
              {r.cssVar}
            </span>,
            r.px,
            <span key="lh" className="text-[color:var(--eds-toc-active)]">
              {r.lineHeightVar}
            </span>,
            r.lineHeightPx,
            <span key="m" className="font-sans text-[11px] text-[color:var(--eds-panel-muted)]">
              {r.mcpSource}
            </span>,
          ])}
        />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-semibold text-[color:var(--eds-panel-fg)]">Font Weight</h4>
        <VarTable
          headers={["Figma", "CSS 变量", "值"]}
          rows={figmaFontWeights.map((w) => [w.figmaName, w.cssVar, w.value])}
        />
        <p className="mt-2 text-xs text-[color:var(--eds-panel-muted)]">
          Font Family：<code className="text-[color:var(--eds-toc-active)]">--el-font-family</code> · Inter
        </p>
      </div>
      {Object.keys(figmaFixedWords).length > 0 ? (
        <div>
          <h4 className="mb-2 text-sm font-semibold text-[color:var(--eds-panel-fg)]">Fixed words</h4>
          <VarTable
            headers={["名称", "字号", "行高", "说明"]}
            rows={Object.entries(figmaFixedWords).map(([name, spec]) => [
              name,
              `${spec.sizePx}px`,
              `${spec.lineHeightPx}px`,
              spec.note ?? "—",
            ])}
          />
        </div>
      ) : null}
    </div>
  );
}

/** Text 2.3.0 组件矩阵 ↔ Figma Font Size 名称 */
export function FigmaTextMatrixTable() {
  return (
    <div className="space-y-4">
      <VarTable
        headers={["Role", "Size", "Font Size 变量名", "Line Height 变量名", "Weight"]}
        rows={figmaTextMatrixRows.map((r) => [
          r.role,
          r.size,
          r.fontSize,
          r.lineHeight,
          r.weights,
        ])}
      />
      <div>
        <h4 className="mb-2 text-sm font-semibold text-[color:var(--eds-panel-fg)]">Type（Figma）</h4>
        <p className="text-xs text-[color:var(--eds-panel-muted)]">
          {figmaTextTypes.join(" · ")} — 代码{" "}
          <code className="text-[color:var(--eds-toc-active)]">Error</code> 与 Figma 一致，映射{" "}
          <code className="text-[color:var(--eds-toc-active)]">--el-color-danger</code>
        </p>
      </div>
    </div>
  );
}
