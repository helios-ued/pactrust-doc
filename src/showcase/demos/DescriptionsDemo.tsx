import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElDescriptionsCode } from "../lib/elementPlusCode";
import {
  Descriptions,
  type DescriptionsLayout,
  type DescriptionsSize,
} from "@/components/Descriptions/Descriptions";
import {
  CustomizeBooleanField,
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

export function DescriptionsDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [layout, setLayout] = useState<DescriptionsLayout>("Horizontal");
  const [size, setSize] = useState<DescriptionsSize>("Default");
  const [border, setBorder] = useState(false);
  const [icon, setIcon] = useState(false);

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElDescriptionsCode({ layout, size, border, icon }),
    [layout, size, border, icon],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Layout">
            <CustomizeSelect value={layout} onChange={(e) => setLayout(e.target.value as DescriptionsLayout)}>
              <option value="Horizontal">Horizontal</option>
              <option value="Vertical">Vertical</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Size">
            <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as DescriptionsSize)}>
              <option value="Default">Default</option>
              <option value="Large">Large</option>
              <option value="Small">Small</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeBooleanField label="Border" checked={border} onChange={(e) => setBorder(e.target.checked)} />
          <CustomizeBooleanField label="Icon" checked={icon} onChange={(e) => setIcon(e.target.checked)} />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={120}>
          <EdsPreviewStack className="max-w-full gap-0">
            <Descriptions layout={layout} size={size} border={border} icon={icon} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const descriptionsDemoCode = buildElDescriptionsCode({
  layout: "Horizontal",
  size: "Default",
  border: false,
  icon: false,
});
