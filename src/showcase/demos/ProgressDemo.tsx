import { useState } from "react";
import {
  Progress,
  type ProgressState,
  type ProgressVisualType,
} from "@/components/Progress/Progress";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElProgressCode } from "../lib/elementPlusCode/builders";
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

const visualTypes: ProgressVisualType[] = ["Default", "Internal", "Circle", "Dashboard"];
const states: ProgressState[] = ["Primary", "Success", "Warning", "Error"];

const pctPresets = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export function ProgressDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [visualType, setVisualType] = useState<ProgressVisualType>("Default");
  const [state, setState] = useState<ProgressState>("Primary");
  const [percentage, setPercentage] = useState(50);
  const [showLabel, setShowLabel] = useState(true);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElProgressCode({ visualType, state, percentage, showLabel }),
    [visualType, state, percentage, showLabel],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={visualType}
              onChange={(e) => setVisualType(e.target.value as ProgressVisualType)}
            >
              {visualTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="State">
            <CustomizeSelect value={state} onChange={(e) => setState(e.target.value as ProgressState)}>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="%">
            <CustomizeSelect
              value={String(percentage)}
              onChange={(e) => setPercentage(Number(e.target.value))}
            >
              {pctPresets.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeBooleanField
            label="Label"
            checked={showLabel}
            onChange={(e) => setShowLabel(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={visualType === "Circle" || visualType === "Dashboard" ? 160 : 80}>
          <EdsPreviewStack className="max-w-full items-center">
            <Progress
              visualType={visualType}
              state={state}
              percentage={percentage}
              showLabel={showLabel}
            />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const progressDemoCode = buildElProgressCode({
  visualType: "Default",
  state: "Primary",
  percentage: 50,
  showLabel: true,
});
