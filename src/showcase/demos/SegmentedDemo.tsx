import { useMemo, useState } from "react";
import {
  Segmented,
  SegmentedItem,
  type SegmentedNumber,
} from "@/components/Segmented/Segmented";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElSegmentedCode } from "../lib/elementPlusCode/builders";
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

const numbers: SegmentedNumber[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function SegmentedDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [custom, setCustom] = useState(false);
  const [number, setNumber] = useState<SegmentedNumber>(3);
  const [disabled, setDisabled] = useState(false);
  const [disableItem2, setDisableItem2] = useState(false);
  const [value, setValue] = useState("1");

  const customOptions = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        label: "Button",
        value: String(i + 1),
        disabled: disableItem2 && i === 1,
      })),
    [disableItem2],
  );

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElSegmentedCode({
        custom,
        number,
        disabled,
        disableSecond: disableItem2,
      }),
    [custom, number, disabled, disableItem2],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeBooleanField label="Custom" checked={custom} onChange={(e) => setCustom(e.target.checked)} />
          {!custom ? (
            <CustomizeField label="Number">
              <CustomizeSelect
                value={String(number)}
                onChange={(e) => setNumber(Number(e.target.value) as SegmentedNumber)}
              >
                {numbers.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          <CustomizeBooleanField
            label="Disabled"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
          <CustomizeBooleanField
            label="Disable 2nd item"
            checked={disableItem2}
            onChange={(e) => setDisableItem2(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={48}>
          <EdsPreviewStack className="max-w-full">
            {custom ? (
              <Segmented custom value={value} onChange={setValue} disabled={disabled} options={customOptions}>
                {customOptions.map((opt) => (
                  <SegmentedItem key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </SegmentedItem>
                ))}
              </Segmented>
            ) : (
              <Segmented
                number={number}
                value={value}
                onChange={setValue}
                disabled={disabled}
                options={
                  disableItem2
                    ? Array.from({ length: number }, (_, i) => ({
                        label: "Button",
                        value: String(i + 1),
                        disabled: i === 1,
                      }))
                    : undefined
                }
              />
            )}
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const segmentedDemoCode = buildElSegmentedCode({
  custom: false,
  number: 3,
  disabled: false,
  disableSecond: false,
});
