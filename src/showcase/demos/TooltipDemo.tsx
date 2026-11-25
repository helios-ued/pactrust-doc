import {
  TOOLTIP_LAYOUTS,
  Tooltip,
  type TooltipEffect,
  type TooltipLayout,
} from "@/components/Tooltip/Tooltip";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElTooltipCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

const effects: TooltipEffect[] = ["Light", "Dark"];

export function TooltipDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [effect, setEffect] = useState<TooltipEffect>("Light");
  const [layout, setLayout] = useState<TooltipLayout>("Top");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElTooltipCode({ effect, layout }),
    [effect, layout],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Effect">
            <CustomizeSelect value={effect} onChange={(e) => setEffect(e.target.value as TooltipEffect)}>
              {effects.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Arrow">
            <CustomizeSelect value={layout} onChange={(e) => setLayout(e.target.value as TooltipLayout)}>
              {TOOLTIP_LAYOUTS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={120} className="items-center justify-center overflow-hidden">
          <EdsPreviewStack className="max-w-none items-center">
            <Tooltip layout={layout} effect={effect} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const tooltipDemoCode = buildElTooltipCode({ effect: "Light", layout: "Top" });
