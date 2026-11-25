import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElInputNumberCode } from "../lib/elementPlusCode";
import {
  InputNumber,
  type InputNumberPosition,
  type InputNumberSize,
  type InputNumberState,
} from "@/components/InputNumber/InputNumber";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const sizes: InputNumberSize[] = ["Default", "Large", "Small"];
const states: InputNumberState[] = ["Default", "Hover", "Focus", "Disabled"];
const positions: InputNumberPosition[] = ["Default", "Right"];

export function InputNumberDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<InputNumberSize>("Default");
  const [state, setState] = useState<InputNumberState>("Default");
  const [position, setPosition] = useState<InputNumberPosition>("Default");
  const [prefix, setPrefix] = useState(true);
  const [suffix, setSuffix] = useState(true);
  const [value, setValue] = useState(1);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElInputNumberCode({ size, disabled: state === "Disabled" }),
    [size, state],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Size">
            <CustomizeSelect
              value={size}
              onChange={(e) => setSize(e.target.value as InputNumberSize)}
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
              onChange={(e) => setState(e.target.value as InputNumberState)}
            >
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Position">
            <CustomizeSelect
              value={position}
              onChange={(e) => setPosition(e.target.value as InputNumberPosition)}
            >
              {positions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeInlineCheck label="Prefix" checked={prefix} onChange={(e) => setPrefix(e.target.checked)} />
          <CustomizeInlineCheck label="Suffix" checked={suffix} onChange={(e) => setSuffix(e.target.checked)} />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage>
          <InputNumber
            size={size}
            state={state}
            position={position}
            prefix={prefix}
            suffix={suffix}
            value={value}
            onChange={setValue}
            min={0}
            max={99}
          />
        </DemoStage>
      }
    />
  );
}

export const inputNumberDemoCode = buildElInputNumberCode({ size: "Default", disabled: false });
