import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElColorPickerCode } from "../lib/elementPlusCode";
import {
  ColorPicker,
  type ColorPickerSize,
  type ColorPickerType,
} from "@/components/ColorPicker/ColorPicker";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const sizes: ColorPickerSize[] = ["Default", "Large", "Small"];
const types: { value: ColorPickerType; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "alpha", label: "Alpha" },
  { value: "custom", label: "Custom" },
];

export function ColorPickerDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [size, setSize] = useState<ColorPickerSize>("Default");
  const [type, setType] = useState<ColorPickerType>("default");
  const [color, setColor] = useState<string | null>("#1677ff");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElColorPickerCode({ size }),
    [size],
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
              onChange={(e) => setSize(e.target.value as ColorPickerSize)}
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
              value={type}
              onChange={(e) => setType(e.target.value as ColorPickerType)}
            >
              {types.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage>
          <ColorPicker
            size={size}
            type={type}
            value={color}
            onChange={setColor}
          />
        </DemoStage>
      }
    />
  );
}

export const colorPickerDemoCode = buildElColorPickerCode({ size: "Default" });
