import { useState } from "react";
import { type ButtonSize, type ButtonType } from "@/components/Button/Button";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElTextButtonCode } from "../lib/elementPlusCode";
import { TextButton } from "@/components/Button/TextButton";
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

const types: ButtonType[] = [
  "Default",
  "Primary",
  "Success",
  "Warning",
  "Danger",
  "Info",
];
const sizes: ButtonSize[] = ["Default", "Large", "Small"];

export function TextButtonDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [buttonType, setButtonType] = useState<ButtonType>("Primary");
  const [size, setSize] = useState<ButtonSize>("Default");
  const [plain, setPlain] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [label, setLabel] = useState("文本按钮");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElTextButtonCode({ type: buttonType, size, plain, disabled, label }),
    [buttonType, size, plain, disabled, label],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
      <CustomizeToolbar>
        <CustomizeField label="Type">
          <CustomizeSelect
            value={buttonType}
            onChange={(e) => setButtonType(e.target.value as ButtonType)}
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </CustomizeSelect>
        </CustomizeField>
        <CustomizeField label="Size">
          <CustomizeSelect
            value={size}
            onChange={(e) => setSize(e.target.value as ButtonSize)}
          >
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </CustomizeSelect>
        </CustomizeField>
        <CustomizeInlineCheck
          label="Plain"
          checked={plain}
          onChange={(e) => setPlain(e.target.checked)}
        />
        <CustomizeInlineCheck
          label="Disable"
          checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
        <CustomizeField label="文案" wide>
          <CustomizeInput value={label} onChange={(e) => setLabel(e.target.value)} />
        </CustomizeField>
      </CustomizeToolbar>
      }
      preview={
      <DemoStage className="flex-wrap gap-6">
        <TextButton
          buttonType={buttonType}
          size={size}
          plain={plain}
          disabled={disabled}
        >
          {label}
        </TextButton>
        <div className="flex flex-wrap gap-3">
          {types.map((t) => (
            <TextButton key={t} buttonType={t} size="Small">
              {t}
            </TextButton>
          ))}
        </div>
      </DemoStage>
      }
    />
  );
}

export const textButtonCode = buildElTextButtonCode({
  type: "Primary",
  size: "Default",
  plain: false,
  disabled: false,
  label: "文本按钮",
});
