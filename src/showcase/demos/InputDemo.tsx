import { useState } from "react";
import { Input, type InputSize, type InputState } from "@/components/Input/Input";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElInputCode } from "../lib/elementPlusCode";
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

const states: InputState[] = ["Default", "Hover", "Focus", "Error", "Disabled"];
const sizes: InputSize[] = ["Default", "Large", "Small"];

export function InputDemo({
  part = "all",
  splitRender,
  reportElementPlusCode,
}: ShowcaseDemoProps = {}) {
  const [state, setState] = useState<InputState>("Default");
  const [size, setSize] = useState<InputSize>("Default");
  const [placeholder, setPlaceholder] = useState("Please input");
  const [prefixIcon, setPrefixIcon] = useState(true);
  const [suffixIcon, setSuffixIcon] = useState(true);
  const [range, setRange] = useState(false);
  const [forceInput, setForceInput] = useState<boolean | "auto">("auto");
  const [value, setValue] = useState("");
  const [rangeValue, setRangeValue] = useState<[string, string]>(["", ""]);

  const inputProp =
    forceInput === "auto"
      ? undefined
      : forceInput
        ? true
        : false;

  const displayValue =
    forceInput === true && !value ? "Element Plus" : value;

  const hasValue =
    forceInput === true ||
    (forceInput === "auto" && Boolean(displayValue)) ||
    Boolean(rangeValue[0] || rangeValue[1]);

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElInputCode({
        state,
        size,
        placeholder,
        prefixIcon: prefixIcon && !range,
        suffixIcon: suffixIcon && !range,
        range,
        hasValue: forceInput === true || (forceInput === "auto" && hasValue),
      }),
    [state, size, placeholder, prefixIcon, suffixIcon, range, forceInput, hasValue],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="State">
            <CustomizeSelect
              value={state}
              onChange={(e) => setState(e.target.value as InputState)}
            >
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Size">
            <CustomizeSelect
              value={size}
              onChange={(e) => setSize(e.target.value as InputSize)}
            >
              {sizes.map((s) => (
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
          <CustomizeInlineCheck
            label="Prefix Icon"
            checked={prefixIcon}
            onChange={(e) => setPrefixIcon(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Suffix Icon"
            checked={suffixIcon}
            onChange={(e) => setSuffixIcon(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Range"
            checked={range}
            onChange={(e) => setRange(e.target.checked)}
          />
          <CustomizeField label="Placeholder" wide>
            <CustomizeInput
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
            />
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage>
          <div className="w-full max-w-[280px]">
            <Input
              state={state}
              size={size}
              input={inputProp}
              prefixIcon={prefixIcon}
              suffixIcon={suffixIcon}
              range={range}
              placeholder={placeholder}
              value={range ? undefined : displayValue}
              onChange={(e) => setValue(e.target.value)}
              rangeValue={rangeValue}
              onRangeChange={setRangeValue}
            />
          </div>
        </DemoStage>
      }
    />
  );
}

export const inputCode = buildElInputCode({
  state: "Default",
  size: "Default",
  placeholder: "Please input",
  prefixIcon: true,
  suffixIcon: true,
});
