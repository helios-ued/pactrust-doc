import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  type BreadcrumbItemVisualState,
  type BreadcrumbNumber,
} from "@/components/Breadcrumb/Breadcrumb";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElBreadcrumbCode } from "../lib/elementPlusCode/builders";
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

const numbers: BreadcrumbNumber[] = [2, 3, 4];
const itemStates: BreadcrumbItemVisualState[] = ["Default", "Hover", "Not current page"];

export function BreadcrumbDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [custom, setCustom] = useState(false);
  const [number, setNumber] = useState<BreadcrumbNumber>(3);
  const [previewItem, setPreviewItem] = useState(false);
  const [itemState, setItemState] = useState<BreadcrumbItemVisualState>("Default");

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElBreadcrumbCode({
        custom,
        number,
        previewItem,
        itemState,
      }),
    [custom, number, previewItem, itemState],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeBooleanField
            label="Preview item"
            checked={previewItem}
            onChange={(e) => setPreviewItem(e.target.checked)}
          />
          {previewItem ? (
            <CustomizeField label="State">
              <CustomizeSelect
                value={itemState}
                onChange={(e) => setItemState(e.target.value as BreadcrumbItemVisualState)}
              >
                {itemStates.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : (
            <>
              <CustomizeBooleanField label="Custom" checked={custom} onChange={(e) => setCustom(e.target.checked)} />
              {!custom ? (
                <CustomizeField label="Number">
                  <CustomizeSelect
                    value={String(number)}
                    onChange={(e) => setNumber(Number(e.target.value) as BreadcrumbNumber)}
                  >
                    {numbers.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </CustomizeSelect>
                </CustomizeField>
              ) : null}
            </>
          )}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={28}>
          <EdsPreviewStack className="max-w-full items-center">
            {previewItem ? (
              <Breadcrumb>
                <BreadcrumbItem separator visualState={itemState}>
                  homepage
                </BreadcrumbItem>
              </Breadcrumb>
            ) : (
              <Breadcrumb custom={custom} number={number} />
            )}
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const breadcrumbDemoCode = buildElBreadcrumbCode({
  custom: false,
  number: 3,
  previewItem: false,
  itemState: "Default",
});
