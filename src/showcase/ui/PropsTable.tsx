export type PropRow = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="overflow-x-auto rounded-el-base border border-[color:var(--ds-stroke-divider)]">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead className="bg-[color:var(--ds-bg-muted)] text-[color:var(--ds-text-secondary)]">
          <tr>
            <th className="px-4 py-2 font-medium">Prop</th>
            <th className="px-4 py-2 font-medium">类型</th>
            <th className="px-4 py-2 font-medium">默认</th>
            <th className="px-4 py-2 font-medium">说明</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-t border-[color:var(--ds-stroke-divider)]"
            >
              <td className="px-4 py-2 font-mono text-[color:var(--el-color-primary)]">
                {row.name}
              </td>
              <td className="px-4 py-2 font-mono text-xs text-[color:var(--ds-text-secondary)]">
                {row.type}
              </td>
              <td className="px-4 py-2 font-mono text-xs">{row.default ?? "—"}</td>
              <td className="px-4 py-2 text-[color:var(--ds-text-regular)]">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
