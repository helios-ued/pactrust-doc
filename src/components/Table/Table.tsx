import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import {
  TableActionsCell,
  TableFieldCell,
  TableProgressCell,
  TableSelectionCell,
  TableSwitchCell,
  TableTagCell,
  TableTitleCell,
} from "./TableCopyMeCells";
import "./table.css";

/** Figma Column — Rows（Custom=false 时 1 … 12，无 8 档展示用连续数字） */
export type TableRowCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type TableSize = "Default" | "Large";

export type TableProps = {
  /** Figma Custom */
  custom?: boolean;
  /** Custom=false 时行数 */
  rows?: TableRowCount;
  /** Figma Stripe */
  stripe?: boolean;
  /** Figma Boder */
  border?: boolean;
  size?: TableSize;
  className?: string;
};

const CUSTOM_ROW_COUNT = 6;

const customHeaders = [
  { key: "selection", label: null as ReactNode, selection: true },
  { key: "title", label: "Title" },
  { key: "input", label: "Title" },
  { key: "select", label: "Title" },
  { key: "tag", label: "Title" },
  { key: "switch", label: "Title" },
  { key: "progress", label: "Title" },
  { key: "button", label: "Title" },
  { key: "actions", label: "Title" },
] as const;

function renderCustomCell(key: (typeof customHeaders)[number]["key"], rowIndex: number, size: TableSize) {
  switch (key) {
    case "selection":
      return <TableSelectionCell size={size} />;
    case "title":
      return <TableTitleCell size={size} />;
    case "input":
    case "select":
    case "button":
      return <TableFieldCell />;
    case "tag":
      return <TableTagCell size={size} />;
    case "switch":
      return <TableSwitchCell rowIndex={rowIndex} size={size} />;
    case "progress":
      return <TableProgressCell rowIndex={rowIndex} />;
    case "actions":
      return <TableActionsCell size={size} />;
    default:
      return null;
  }
}

export function Table({
  custom = true,
  rows = 3,
  stripe = false,
  border = false,
  size = "Large",
  className,
}: TableProps) {
  const rowIndices = custom
    ? Array.from({ length: CUSTOM_ROW_COUNT }, (_, i) => i)
    : Array.from({ length: rows }, (_, i) => i);

  return (
    <div className={cn("pt-table-wrap", className)}>
      <table
        className={cn(
          "pt-table",
          size === "Large" ? "pt-table--size-large" : "pt-table--size-default",
          stripe && "pt-table--stripe",
          border && "pt-table--border",
        )}
      >
        <thead>
          <tr>
            {custom ? (
              customHeaders.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "pt-table__th",
                    col.key === "selection" && "pt-table__th--selection",
                    col.key === "actions" && "pt-table__th--actions",
                  )}
                  scope="col"
                >
                  {col.key === "selection" ? <TableSelectionCell header size={size} /> : col.label}
                </th>
              ))
            ) : (
              <th className="pt-table__th" scope="col">
                Title
              </th>
            )}
          </tr>
        </thead>
        <tbody className="pt-table__body">
          {rowIndices.map((rowIndex) => (
            <tr key={rowIndex}>
              {custom ? (
                customHeaders.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "pt-table__td",
                      col.key === "selection" && "pt-table__td--selection",
                      col.key === "actions" && "pt-table__td--actions",
                    )}
                  >
                    {renderCustomCell(col.key, rowIndex, size)}
                  </td>
                ))
              ) : (
                <td className="pt-table__td">
                  <TextCell />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TextCell() {
  return (
    <span className="text-[color:var(--el-text-color-primary)]">Title</span>
  );
}
