import {
  POPCONFIRM_LAYOUTS,
  Popconfirm,
  type PopconfirmLayout,
} from "@/components/Popconfirm/Popconfirm";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElPopconfirmCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

const layouts = POPCONFIRM_LAYOUTS;

export function PopconfirmDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [layout, setLayout] = useState<PopconfirmLayout>("Up-center");

  useReportElementPlusCode(reportElementPlusCode, () => buildElPopconfirmCode({ layout }), [layout]);

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Layout">
            <CustomizeSelect value={layout} onChange={(e) => setLayout(e.target.value as PopconfirmLayout)}>
              {layouts.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={140} className="items-center justify-center overflow-hidden">
          <EdsPreviewStack className="max-w-none items-center">
            <Popconfirm layout={layout} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const popconfirmDemoCode = buildElPopconfirmCode({ layout: "Up-center" });
