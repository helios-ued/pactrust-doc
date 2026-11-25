import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElColorPickerPanelCode } from "../lib/elementPlusCode";
import {
  ColorPickerPanel,
  type ColorPickerPanelType,
} from "@/components/ColorPicker/ColorPickerPanel";
import {
  CustomizeBooleanField,
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const panelTypes: { value: ColorPickerPanelType; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "alpha", label: "Alpha" },
  { value: "predefined", label: "Predefined colors" },
];

export function ColorPickerPanelDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [type, setType] = useState<ColorPickerPanelType>("default");
  const [border, setBorder] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [color, setColor] = useState("#1677ff");

  useReportElementPlusCode(reportElementPlusCode, () => buildElColorPickerPanelCode(), []);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={type}
              onChange={(e) => setType(e.target.value as ColorPickerPanelType)}
            >
              {panelTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeBooleanField
            label="Border"
            checked={border}
            onChange={(e) => setBorder(e.target.checked)}
          />
          <CustomizeBooleanField
            label="Disabled"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage>
          <ColorPickerPanel
            type={type}
            border={border}
            disabled={disabled}
            value={color}
            onChange={setColor}
          />
        </DemoStage>
      }
    />
  );
}

export const colorPickerPanelDemoCode = buildElColorPickerPanelCode();
