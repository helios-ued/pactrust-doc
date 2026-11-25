import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElCascaderCode } from "../lib/elementPlusCode";
import {
  Cascader,
  type CascaderOption,
  type CascaderOptionType,
} from "@/components/Cascader/Cascader";
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
const optionTypes: CascaderOptionType[] = ["Default", "Radio", "Checkbox"];

export const cascaderOptions: CascaderOption[] = [
  {
    label: "Guide",
    value: "guide",
    children: [
      {
        label: "Disciplines",
        value: "disciplines",
        children: [
          { label: "Consistency", value: "consistency" },
          { label: "Feedback", value: "feedback" },
        ],
      },
      {
        label: "Navigation",
        value: "navigation",
        children: [{ label: "Side nav", value: "side-nav" }],
      },
    ],
  },
  {
    label: "Resource",
    value: "resource",
    children: [{ label: "Axure", value: "axure" }],
  },
];

export function CascaderDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<InputSize>("Default");
  const [state, setState] = useState<InputState>("Default");
  const [optionType, setOptionType] = useState<CascaderOptionType>("Default");
  const [placeholder, setPlaceholder] = useState("Select");
  const [value, setValue] = useState<string[]>([]);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElCascaderCode({ disabled: state === "Disabled" }),
    [state],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Option Type">
            <CustomizeSelect
              value={optionType}
              onChange={(e) => setOptionType(e.target.value as CascaderOptionType)}
            >
              {optionTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
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
          <CustomizeField label="Placeholder" wide>
            <CustomizeInput
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
            />
          </CustomizeField>
          <CustomizeInlineCheck
            label="Disabled"
            checked={state === "Disabled"}
            onChange={(e) => setState(e.target.checked ? "Disabled" : "Default")}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={120} className="items-start justify-center">
          <Cascader
            options={cascaderOptions}
            value={value}
            onChange={(v) => setValue(v)}
            placeholder={placeholder}
            size={size}
            state={state}
            optionType={optionType}
            forceOpen={state === "Focus"}
            disabled={state === "Disabled"}
          />
        </DemoStage>
      }
    />
  );
}

export const cascaderCode = buildElCascaderCode({ disabled: false });
