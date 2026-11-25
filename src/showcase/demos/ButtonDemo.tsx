import { useState } from "react";
import { Button, type ButtonSize, type ButtonType } from "@/components/Button/Button";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElButtonCode } from "../lib/elementPlusCode";
import { IconArrowLeft, IconArrowRight } from "@/components/Icon/icons";
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

export function ButtonDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [buttonType, setButtonType] = useState<ButtonType>("Primary");
  const [size, setSize] = useState<ButtonSize>("Default");
  const [plain, setPlain] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(false);
  const [label, setLabel] = useState("按钮");

  const iconSize = size === "Small" ? 12 : 14;

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElButtonCode({
        type: buttonType,
        size,
        plain,
        disabled,
        label,
        leftIcon: showLeftIcon,
        rightIcon: showRightIcon,
      }),
    [buttonType, size, plain, disabled, label, showLeftIcon, showRightIcon],
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
        <CustomizeField label="Left Icon">
          <CustomizeSelect
            value={showLeftIcon ? "True" : "False"}
            onChange={(e) => setShowLeftIcon(e.target.value === "True")}
          >
            <option value="False">False</option>
            <option value="True">True</option>
          </CustomizeSelect>
        </CustomizeField>
        <CustomizeField label="Right Icon">
          <CustomizeSelect
            value={showRightIcon ? "True" : "False"}
            onChange={(e) => setShowRightIcon(e.target.value === "True")}
          >
            <option value="False">False</option>
            <option value="True">True</option>
          </CustomizeSelect>
        </CustomizeField>
        <CustomizeField label="文案" wide>
          <CustomizeInput value={label} onChange={(e) => setLabel(e.target.value)} />
        </CustomizeField>
      </CustomizeToolbar>
      }
      preview={
      <DemoStage>
        <div className="w-[min(100%,200px)]">
          <Button
            buttonType={buttonType}
            size={size}
            plain={plain}
            disabled={disabled}
            leftIcon={
              showLeftIcon ? (
                <IconArrowLeft width={iconSize} height={iconSize} aria-hidden />
              ) : undefined
            }
            rightIcon={
              showRightIcon ? (
                <IconArrowRight width={iconSize} height={iconSize} aria-hidden />
              ) : undefined
            }
          >
            {label}
          </Button>
        </div>
      </DemoStage>
      }
    />
  );
}

export const buttonCode = buildElButtonCode({
  type: "Primary",
  size: "Default",
  plain: false,
  disabled: false,
  label: "按钮",
  leftIcon: true,
  rightIcon: true,
});
