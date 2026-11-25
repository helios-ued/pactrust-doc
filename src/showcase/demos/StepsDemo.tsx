import {
  Steps,
  StepsLine,
  type StepDirection,
  type StepIconType,
  type StepStatus,
} from "@/components/Steps/Steps";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElStepsCode } from "../lib/elementPlusCode/builders";
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

const directions: StepDirection[] = ["Horizontal", "Vertical"];
const stepTypes: StepIconType[] = ["Default", "State"];
const statuses: StepStatus[] = ["Wait", "Process", "Success", "Error"];
const actives = [1, 2, 3, 4, 5] as const;

export function StepsDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [previewLine, setPreviewLine] = useState(false);
  const [direction, setDirection] = useState<StepDirection>("Horizontal");
  const [stepType, setStepType] = useState<StepIconType>("Default");
  const [alignCenter, setAlignCenter] = useState(true);
  const [active, setActive] = useState<1 | 2 | 3 | 4 | 5>(2);
  const [lineStatus, setLineStatus] = useState<StepStatus>("Wait");
  const [lastStep, setLastStep] = useState(false);
  const [errorStep, setErrorStep] = useState(false);

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElStepsCode({
        previewLine,
        direction,
        stepType,
        alignCenter,
        active,
        lineStatus,
        lastStep,
        errorStep,
      }),
    [previewLine, direction, stepType, alignCenter, active, lineStatus, lastStep, errorStep],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeBooleanField
            label="Preview line"
            checked={previewLine}
            onChange={(e) => setPreviewLine(e.target.checked)}
          />
          {previewLine ? (
            <>
              <CustomizeField label="Type">
                <CustomizeSelect
                  value={stepType}
                  onChange={(e) => setStepType(e.target.value as StepIconType)}
                >
                  {stepTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Status">
                <CustomizeSelect
                  value={lineStatus}
                  onChange={(e) => setLineStatus(e.target.value as StepStatus)}
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeBooleanField
                label="Last step"
                checked={lastStep}
                onChange={(e) => setLastStep(e.target.checked)}
              />
            </>
          ) : (
            <>
              <CustomizeField label="Direction">
                <CustomizeSelect
                  value={direction}
                  onChange={(e) => setDirection(e.target.value as StepDirection)}
                >
                  {directions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Type">
                <CustomizeSelect
                  value={stepType}
                  onChange={(e) => setStepType(e.target.value as StepIconType)}
                >
                  {stepTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              {direction === "Horizontal" ? (
                <CustomizeBooleanField
                  label="Align center"
                  checked={alignCenter}
                  onChange={(e) => setAlignCenter(e.target.checked)}
                />
              ) : null}
              {direction === "Horizontal" ? (
                <CustomizeField label="Active">
                  <CustomizeSelect
                    value={String(active)}
                    onChange={(e) => setActive(Number(e.target.value) as 1 | 2 | 3 | 4 | 5)}
                  >
                    {actives.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </CustomizeSelect>
                </CustomizeField>
              ) : null}
              <CustomizeBooleanField
                label="Error step"
                checked={errorStep}
                onChange={(e) => setErrorStep(e.target.checked)}
              />
            </>
          )}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={direction === "Vertical" && !previewLine ? 220 : 100} className="items-start">
          <EdsPreviewStack className="w-full max-w-[651px] items-stretch">
            {previewLine ? (
              <StepsLine
                status={lineStatus}
                stepType={stepType}
                lastStep={lastStep}
                direction="Horizontal"
                className="pt-steps__line-preview"
              />
            ) : direction === "Vertical" ? (
              <Steps
                direction="Vertical"
                stepType={stepType}
                alignCenter={false}
                active={active}
                stepCount={5}
                errorStep={errorStep ? 1 : null}
              />
            ) : (
              <Steps
                direction="Horizontal"
                stepType={stepType}
                alignCenter={alignCenter}
                active={active}
                errorStep={errorStep && stepType === "Default" ? 1 : null}
              />
            )}
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const stepsDemoCode = buildElStepsCode({
  previewLine: false,
  direction: "Horizontal",
  stepType: "Default",
  alignCenter: true,
  active: 2,
  lineStatus: "Wait",
  lastStep: false,
  errorStep: false,
});
