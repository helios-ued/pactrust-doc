import { useState } from "react";
import { Table, type TableRowCount, type TableSize } from "@/components/Table/Table";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElTableCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeBooleanField,
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

const rowCounts: TableRowCount[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const sizes: TableSize[] = ["Default", "Large"];

export function TableDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [custom, setCustom] = useState(true);
  const [rows, setRows] = useState<TableRowCount>(3);
  const [stripe, setStripe] = useState(false);
  const [border, setBorder] = useState(false);
  const [size, setSize] = useState<TableSize>("Large");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElTableCode({ custom, rows, stripe, border, size }),
    [custom, rows, stripe, border, size],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeBooleanField label="Custom" checked={custom} onChange={(e) => setCustom(e.target.checked)} />
          {!custom ? (
            <CustomizeField label="Rows">
              <CustomizeSelect
                value={String(rows)}
                onChange={(e) => setRows(Number(e.target.value) as TableRowCount)}
              >
                {rowCounts.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          <CustomizeBooleanField label="Stripe" checked={stripe} onChange={(e) => setStripe(e.target.checked)} />
          <CustomizeBooleanField label="Border" checked={border} onChange={(e) => setBorder(e.target.checked)} />
          <CustomizeField label="Size">
            <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as TableSize)}>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={200} className="items-stretch">
          <EdsPreviewStack className="max-w-full gap-0">
            <Table custom={custom} rows={rows} stripe={stripe} border={border} size={size} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const tableDemoCode = buildElTableCode({
  custom: true,
  rows: 3,
  stripe: false,
  border: false,
  size: "Large",
});
