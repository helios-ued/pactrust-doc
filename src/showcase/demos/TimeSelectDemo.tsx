import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElTimeSelectCode } from "../lib/elementPlusCode";
import { TimeSelect } from "@/components/TimeSelect/TimeSelect";
import type { InputSize, InputState } from "@/components/Input/Input";
import {
  CustomizeField,
  CustomizeInput,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const sizes: InputSize[] = ["Default", "Large", "Small"];
const states: InputState[] = ["Default", "Hover", "Focus", "Error", "Disabled"];

export function TimeSelectDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<InputSize>("Default");
  const [state, setState] = useState<InputState>("Default");
  const [forceInput, setForceInput] = useState<boolean | "auto">("auto");
  const [start, setStart] = useState("08:30");
  const [end, setEnd] = useState("10:15");
  const [step, setStep] = useState(15);
  const [value, setValue] = useState("09:30");

  const inputProp = forceInput === "auto" ? undefined : forceInput;
  const forceOpen = state === "Focus";

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElTimeSelectCode({ disabled: state === "Disabled" }),
    [state],
  );

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
          <CustomizeField label="Start">
            <CustomizeInput value={start} onChange={(e) => setStart(e.target.value)} />
          </CustomizeField>
          <CustomizeField label="End">
            <CustomizeInput value={end} onChange={(e) => setEnd(e.target.value)} />
          </CustomizeField>
          <CustomizeField label="Step (min)">
            <CustomizeInput
              type="number"
              min={1}
              value={String(step)}
              onChange={(e) => setStep(Number(e.target.value) || 15)}
            />
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="items-stretch" minHeight={380}>
          <div className="mx-auto w-full max-w-[280px]">
            <TimeSelect
              size={size}
              state={state}
              input={inputProp}
              forceOpen={forceOpen}
              disabled={state === "Disabled"}
              start={start}
              end={end}
              stepMinutes={step}
              value={value}
              onChange={setValue}
            />
          </div>
        </DemoStage>
      }
    />
  );
}

export const timeSelectDemoCode = buildElTimeSelectCode({ disabled: false });
