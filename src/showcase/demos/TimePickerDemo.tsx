import { useEffect, useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElTimePickerCode } from "../lib/elementPlusCode";
import { TimePicker } from "@/components/TimePicker/TimePicker";
import type { InputSize, InputState } from "@/components/Input/Input";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeInput,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const sizes: InputSize[] = ["Default", "Large", "Small"];
const states: InputState[] = ["Default", "Hover", "Focus", "Error", "Disabled"];

export function TimePickerDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<InputSize>("Default");
  const [state, setState] = useState<InputState>("Default");
  const [range, setRange] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [forceInput, setForceInput] = useState<boolean | "auto">("auto");
  const [placeholder, setPlaceholder] = useState("Arbitrary time");
  const [value, setValue] = useState("12:00:00");
  const [rangeValue, setRangeValue] = useState<[string, string]>(["09:00:00", "18:00:00"]);

  useEffect(() => {
    if (!range) setValue("12:00:00");
  }, [range]);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElTimePickerCode({ disabled: state === "Disabled" }),
    [state],
  );

  const inputProp = forceInput === "auto" ? undefined : forceInput;
  const forceOpen = state === "Focus";

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Size">
            <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as InputSize)}>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="State">
            <CustomizeSelect value={state} onChange={(e) => setState(e.target.value as InputState)}>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeInlineCheck label="Range" checked={range} onChange={(e) => setRange(e.target.checked)} />
          <CustomizeInlineCheck label="Arrow" checked={arrow} onChange={(e) => setArrow(e.target.checked)} />
          <CustomizeField label="Input">
            <CustomizeSelect
              value={forceInput === "auto" ? "auto" : forceInput ? "True" : "False"}
              onChange={(e) => {
                const v = e.target.value;
                setForceInput(v === "auto" ? "auto" : v === "True");
              }}
            >
              <option value="auto">Auto</option>
              <option value="True">True</option>
              <option value="False">False</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Placeholder" wide>
            <CustomizeInput value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} />
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="items-stretch" minHeight={range ? 360 : 300}>
          <div className="mx-auto w-full max-w-[280px]">
            <TimePicker
              size={size}
              state={state}
              range={range}
              arrow={arrow}
              input={inputProp}
              placeholder={placeholder}
              forceOpen={forceOpen}
              disabled={state === "Disabled"}
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

export const timePickerCode = buildElTimePickerCode({ disabled: false });
