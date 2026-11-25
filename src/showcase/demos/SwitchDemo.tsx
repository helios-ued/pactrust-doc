import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElSwitchCode } from "../lib/elementPlusCode";
import {
  Switch,
  type SwitchSize,
  type SwitchType,
  type SwitchVisualState,
} from "@/components/Switch/Switch";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const sizes: SwitchSize[] = ["Default", "Large", "Small"];
const types: SwitchType[] = [
  "Default",
  "Text Inline",
  "Text",
  "Icon",
  "Icon Inline",
  "Action Icon",
];
const states: SwitchVisualState[] = ["Default", "Focus", "Disable"];

export function SwitchDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<SwitchSize>("Default");
  const [switchType, setSwitchType] = useState<SwitchType>("Default");
  const [custom, setCustom] = useState(false);
  const [visualState, setVisualState] = useState<SwitchVisualState>("Default");
  const [checked, setChecked] = useState(true);

  const interactive = visualState === "Default";
  const previewChecked = interactive ? checked : visualState === "Focus" ? true : checked;

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElSwitchCode({
        size,
        disabled: visualState === "Disable",
        checked: previewChecked,
      }),
    [size, visualState, previewChecked],
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
              onChange={(e) => setSize(e.target.value as SwitchSize)}
            >
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={switchType}
              onChange={(e) => setSwitchType(e.target.value as SwitchType)}
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="State">
            <CustomizeSelect
              value={visualState}
              onChange={(e) => setVisualState(e.target.value as SwitchVisualState)}
            >
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeInlineCheck
            label="Custom"
            checked={custom}
            onChange={(e) => setCustom(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Checked"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={48}>
          <Switch
            size={size}
            switchType={switchType}
            custom={custom}
            visualState={visualState}
            checked={previewChecked}
            onChange={interactive ? setChecked : undefined}
            disabled={visualState === "Disable"}
          />
        </DemoStage>
      }
    />
  );
}

export const switchCode = buildElSwitchCode({ size: "Default", disabled: false, checked: true });
