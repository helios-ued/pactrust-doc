import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElDatePickerCode } from "../lib/elementPlusCode";
import { DateTimePicker } from "@/components/DatePicker/DateTimePicker";
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

export function DateTimePickerDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<InputSize>("Default");
  const [state, setState] = useState<InputState>("Default");
  const [range, setRange] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [forceInput, setForceInput] = useState<boolean | "auto">("auto");
  const [placeholder, setPlaceholder] = useState("Pick a date");
  const [value, setValue] = useState<Date | null>(new Date(2022, 7, 1, 0, 0, 0));

  const inputProp = forceInput === "auto" ? undefined : forceInput;

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElDatePickerCode({ type: "datetime", disabled: state === "Disabled" }),
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
          <CustomizeInlineCheck label="Range" checked={range} onChange={(e) => setRange(e.target.checked)} />
          <CustomizeInlineCheck
            label="Sidebar"
            checked={sidebar}
            onChange={(e) => setSidebar(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Footer"
            checked={showFooter}
            onChange={(e) => setShowFooter(e.target.checked)}
          />
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
        <DemoStage className="items-stretch">
          <div className="mx-auto w-full max-w-[400px] space-y-3">
            <DateTimePicker
              size={size}
              state={state}
              range={range}
              input={inputProp}
              sidebar={sidebar}
              showFooter={showFooter}
              placeholder={placeholder}
              value={value}
              onChange={setValue}
            />
            <p className="text-xs text-el-text-secondary">
              已选：{value ? formatDateTime(value) : "—"}
            </p>
          </div>
        </DemoStage>
      }
    />
  );
}

function formatDateTime(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export const dateTimePickerDemoCode = buildElDatePickerCode({ type: "datetime", disabled: false });
