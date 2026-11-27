import { useState } from "react";
import {
  BasePanel,
  type BasePanelLayout,
  type BasePanelPadding,
} from "@/components/Layout/BasePanel";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "../demos/types";

const layouts: BasePanelLayout[] = ["Single", "Vertical", "Horizontal"];
const paddings: BasePanelPadding[] = ["Default", "None"];

export function BasePanelDemo({ part = "all", splitRender }: ShowcaseDemoProps = {}) {
  const [layout, setLayout] = useState<BasePanelLayout>("Single");
  const [padding, setPadding] = useState<BasePanelPadding>("Default");

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Layout">
            <CustomizeSelect value={layout} onChange={(e) => setLayout(e.target.value as BasePanelLayout)}>
              {layouts.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Padding">
            <CustomizeSelect value={padding} onChange={(e) => setPadding(e.target.value as BasePanelPadding)}>
              {paddings.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={400} className="w-full items-stretch !p-4 md:!p-5">
          <BasePanel
            className="min-h-[360px] w-full"
            layout={layout}
            padding={padding}
            placeholder
          />
        </DemoStage>
      }
    />
  );
}

export const basePanelDemoCode = `<BasePanel layout="Single" padding="Default" placeholder>
  <!-- Content-Slot -->
</BasePanel>`;