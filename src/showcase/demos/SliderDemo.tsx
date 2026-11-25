import { useEffect, useMemo, useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElSliderCode } from "../lib/elementPlusCode";
import {
  Slider,
  type SliderVisualState,
} from "@/components/Slider/Slider";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const sliderStates: SliderVisualState[] = ["Default", "Hover", "Disable"];

export function SliderDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [showSteps, setShowSteps] = useState(false);
  const [range, setRange] = useState(false);
  const [visualState, setVisualState] = useState<SliderVisualState>("Default");
  const [value, setValue] = useState(56);
  const [rangeValue, setRangeValue] = useState<[number, number]>([30, 70]);

  const { min, max, step } = useMemo(() => {
    if (range && showSteps) return { min: 1, max: 10, step: 1 };
    if (showSteps) return { min: 0, max: 100, step: 10 };
    return { min: 0, max: 100, step: 1 };
  }, [range, showSteps]);

  useEffect(() => {
    if (range && showSteps) setRangeValue([3, 8]);
    else if (range) setRangeValue([30, 70]);
    else setValue(showSteps ? 50 : 56);
  }, [range, showSteps]);

  const disabled = visualState === "Disable";

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElSliderCode({ range, disabled }),
    [range, disabled],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="State">
            <CustomizeSelect
              value={visualState}
              onChange={(e) => setVisualState(e.target.value as SliderVisualState)}
            >
              {sliderStates.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeInlineCheck
            label="Steps"
            checked={showSteps}
            onChange={(e) => setShowSteps(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Range"
            checked={range}
            onChange={(e) => setRange(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="items-stretch" minHeight={range && showSteps ? 72 : 48}>
          <div className="mx-auto w-full max-w-[706px] px-1 pt-6">
            <Slider
              min={min}
              max={max}
              step={step}
              showSteps={showSteps}
              range={range}
              disabled={disabled}
              visualState={visualState}
              value={range ? undefined : value}
              onChange={range ? undefined : setValue}
              rangeValue={range ? rangeValue : undefined}
              onRangeChange={range ? setRangeValue : undefined}
            />
          </div>
        </DemoStage>
      }
    />
  );
}

export const sliderCode = buildElSliderCode({ range: false, disabled: false });
