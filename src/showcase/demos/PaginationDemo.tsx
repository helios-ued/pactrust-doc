import { useState } from "react";
import {
  Pagination,
  type PaginationLayoutType,
  type PaginationSize,
  type PaginationStyle,
} from "@/components/Pagination/Pagination";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElPaginationCode } from "../lib/elementPlusCode/builders";
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

const layoutTypes: { id: PaginationLayoutType; label: string }[] = [
  { id: "lt5", label: "<5page" },
  { id: "gt5", label: ">5page" },
  { id: "omitted", label: "Both ends omitted" },
  { id: "inputGoTo", label: "Input go to" },
];

const styles: PaginationStyle[] = ["Default", "Background", "Border"];
const sizes: PaginationSize[] = ["Default", "Small"];

export function PaginationDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [layoutType, setLayoutType] = useState<PaginationLayoutType>("gt5");
  const [paginationStyle, setPaginationStyle] = useState<PaginationStyle>("Default");
  const [size, setSize] = useState<PaginationSize>("Default");
  const [showTotal, setShowTotal] = useState(false);
  const [showPageSize, setShowPageSize] = useState(false);
  const [showGoTo, setShowGoTo] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElPaginationCode({
        layoutType,
        paginationStyle,
        size,
        showTotal,
        showPageSize,
        showGoTo,
        disabled,
      }),
    [layoutType, paginationStyle, size, showTotal, showPageSize, showGoTo, disabled],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={layoutType}
              onChange={(e) => {
                const next = e.target.value as PaginationLayoutType;
                setLayoutType(next);
                setCurrentPage(1);
              }}
            >
              {layoutTypes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Style">
            <CustomizeSelect
              value={paginationStyle}
              onChange={(e) => setPaginationStyle(e.target.value as PaginationStyle)}
            >
              {styles.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Size">
            <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as PaginationSize)}>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeBooleanField label="Total" checked={showTotal} onChange={(e) => setShowTotal(e.target.checked)} />
          <CustomizeBooleanField
            label="Page size"
            checked={showPageSize}
            onChange={(e) => setShowPageSize(e.target.checked)}
          />
          <CustomizeBooleanField label="Go to" checked={showGoTo} onChange={(e) => setShowGoTo(e.target.checked)} />
          <CustomizeBooleanField label="Disabled" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={80}>
          <EdsPreviewStack className="max-w-full items-start">
            <Pagination
              layoutType={layoutType}
              paginationStyle={paginationStyle}
              size={size}
              showTotal={showTotal}
              showPageSize={showPageSize}
              showGoTo={showGoTo || layoutType === "inputGoTo"}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              disabled={disabled}
            />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const paginationDemoCode = buildElPaginationCode({
  layoutType: "gt5",
  paginationStyle: "Default",
  size: "Default",
  showTotal: false,
  showPageSize: false,
  showGoTo: false,
  disabled: false,
});
