import {
  Divider,
  type DividerContentLayout,
  type DividerLineStyle,
} from "@/components/Divider/Divider";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElDividerCode } from "../lib/elementPlusCode/builders";
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

const styles: DividerLineStyle[] = ["Solid", "Dashed", "Point"];
const layouts: DividerContentLayout[] = ["No text", "Left", "Center", "Right"];

export function DividerDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [vertical, setVertical] = useState(false);
  const [lineStyle, setLineStyle] = useState<DividerLineStyle>("Solid");
  const [contentLayout, setContentLayout] = useState<DividerContentLayout>("Center");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElDividerCode({ vertical, lineStyle, contentLayout }),
    [vertical, lineStyle, contentLayout],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeBooleanField
            label="Vertical"
            checked={vertical}
            onChange={(e) => setVertical(e.target.checked)}
          />
          <CustomizeField label="Style">
            <CustomizeSelect
              value={lineStyle}
              onChange={(e) => setLineStyle(e.target.value as DividerLineStyle)}
            >
              {styles.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          {!vertical ? (
            <CustomizeField label="Layout">
              <CustomizeSelect
                value={contentLayout}
                onChange={(e) => setContentLayout(e.target.value as DividerContentLayout)}
              >
                {layouts.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage
          minHeight={vertical ? 80 : 48}
          className={vertical ? "items-stretch justify-center" : "items-center justify-center"}
        >
          <EdsPreviewStack
            className={
              vertical
                ? "h-[80px] w-auto items-stretch justify-center"
                : "w-full max-w-[200px] items-stretch"
            }
          >
            <Divider vertical={vertical} lineStyle={lineStyle} contentLayout={contentLayout} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const dividerDemoCode = buildElDividerCode({
  vertical: false,
  lineStyle: "Solid",
  contentLayout: "Center",
});
