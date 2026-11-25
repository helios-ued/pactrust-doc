import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElInputOtpCode } from "../lib/elementPlusCode";
import {
  InputOTP,
  type InputOTPSize,
  type InputOTPState,
  type InputOTPType,
} from "@/components/InputOTP/InputOTP";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const types: InputOTPType[] = ["Outlined", "Filled", "Underlined"];
const sizes: InputOTPSize[] = ["Default", "Large", "Small"];
const states: InputOTPState[] = ["Default", "Hover", "Focus", "Disabled"];

export function InputOTPDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [type, setType] = useState<InputOTPType>("Outlined");
  const [size, setSize] = useState<InputOTPSize>("Default");
  const [state, setState] = useState<InputOTPState>("Default");
  const [length, setLength] = useState(6);
  const [separator, setSeparator] = useState(false);
  const [code, setCode] = useState("123456");

  useReportElementPlusCode(reportElementPlusCode, () => buildElInputOtpCode(), []);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect value={type} onChange={(e) => setType(e.target.value as InputOTPType)}>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Size">
            <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as InputOTPSize)}>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="State">
            <CustomizeSelect value={state} onChange={(e) => setState(e.target.value as InputOTPState)}>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Length">
            <CustomizeSelect
              value={String(length)}
              onChange={(e) => setLength(Number(e.target.value))}
            >
              {[4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeInlineCheck
            label="Separator"
            checked={separator}
            onChange={(e) => setSeparator(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="flex-col gap-3">
          <InputOTP
            key={`${length}-${type}-${size}`}
            length={length}
            type={type}
            size={size}
            state={state}
            separator={separator}
            value={code.slice(0, length)}
            onChange={setCode}
          />
          <p className="text-xs text-el-text-secondary">输入：{code.slice(0, length) || "—"}</p>
        </DemoStage>
      }
    />
  );
}

export const inputOtpDemoCode = buildElInputOtpCode();
