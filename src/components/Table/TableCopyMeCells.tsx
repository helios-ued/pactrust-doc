import { Checkbox } from "@/components/Checkbox/Checkbox";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { Link } from "@/components/Link/Link";
import { Switch } from "@/components/Switch/Switch";
import { Tag } from "@/components/Tag/Tag";
import { Text } from "@/components/Text/Text";
import type { ReactNode } from "react";
import type { TableSize } from "./Table";

const tableActions = [
  { key: "detail", label: "Detail" },
  { key: "edit", label: "Edit" },
] as const;

/** Figma Table Cell Size → 内嵌控件尺寸（Default 行 40px 用 Small，Large 行 64px 用 Default） */
function controlSize(tableSize: TableSize): "Small" | "Default" | "Large" {
  return tableSize === "Large" ? "Default" : "Small";
}

export function TableTitleCell({ size }: { size: TableSize }) {
  return (
    <div className="pt-table__cell-stack">
      <div className="pt-table__cell-row">
        <Text role="Body" weight="Medium" className="truncate">
          PacsTrust Design
        </Text>
        {size === "Large" ? (
          <EpIconByName name="EditPen" className="pt-table__cell-icon" size={14} />
        ) : null}
      </div>
      <div className="pt-table__cell-row pt-table__cell-row--secondary pt-table__cell-stack--large-only">
        <span className="truncate">Notification message</span>
        <EpIconByName name="Link" className="pt-table__cell-icon" size={14} />
      </div>
    </div>
  );
}

/** Figma Table Cell Type=Default — 纯字段文案 */
export function TableFieldCell({ children = "Title" }: { children?: ReactNode }) {
  return <span className="pt-table__field truncate">{children}</span>;
}

export function TableTagCell({ size }: { size: TableSize }) {
  const tagSize = size === "Large" ? "Default" : "Small";
  return (
    <div className="pt-table__tags">
      <Tag tagStyle="Info" topic="Light" size={tagSize}>
        Tag
      </Tag>
      <Tag tagStyle="Success" topic="Light" size={tagSize}>
        Tag
      </Tag>
    </div>
  );
}

export function TableSwitchCell({ rowIndex, size }: { rowIndex: number; size: TableSize }) {
  return (
    <Switch
      size={controlSize(size)}
      defaultChecked={rowIndex === 1}
      aria-label="Switch"
    />
  );
}

export function TableProgressCell({ rowIndex }: { rowIndex: number }) {
  const complete = rowIndex === 1;
  const percent = complete ? 100 : 50;
  return (
    <div className="pt-table__progress">
      <div className="pt-table__progress-track">
        <div
          className={`pt-table__progress-bar${complete ? " pt-table__progress-bar--success" : ""}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      {complete ? (
        <EpIconByName name="CircleCheck" size={16} className="text-[color:var(--el-color-success)]" />
      ) : (
        <span className="pt-table__progress-label">50%</span>
      )}
    </div>
  );
}

/** Figma Table-Action Type=Text · Num=2 */
export function TableActionsCell(_props: { size: TableSize }) {
  return (
    <div className="pt-table__actions">
      {tableActions.map(({ key, label }) => (
        <Link
          key={key}
          href="#"
          linkType="Primary"
          className="pt-table__action-link whitespace-nowrap"
          onClick={(e) => e.preventDefault()}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export function TableSelectionCell({ header, size }: { header?: boolean; size?: TableSize }) {
  const boxSize = size === "Large" ? "Default" : "Small";
  return <Checkbox size={boxSize} aria-label={header ? "Select all" : "Select row"} />;
}
